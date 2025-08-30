"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { ConfirmModal } from "@/components/ui/ConfirmModal";

dayjs.extend(utc);
dayjs.extend(timezone);

type CommentType = {
    _id: string;
    discordId: string;
    username: string;
    avatar?: string;
    message: string;
    createdAt: string;
};

export default function CommentList({ fetchTrigger }: { fetchTrigger?: number }) {
    const { data: session } = useSession();
    const [comments, setComments] = useState<CommentType[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCommentId, setSelectedCommentId] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const commentsPerPage = 5;

    const fetchComments = async () => {
        setLoading(true);
        const res = await fetch("/api/comments");
        const data: CommentType[] = await res.json();
        setComments(data);
        setLoading(false);
        setCurrentPage(1);
    };

    useEffect(() => {
        fetchComments();
    }, [fetchTrigger]);

    const totalPages = Math.ceil(comments.length / commentsPerPage);
    const startIdx = (currentPage - 1) * commentsPerPage;
    const currentComments = comments.slice(startIdx, startIdx + commentsPerPage);

    if (loading) {
        return (
            <div className="space-y-4 max-w-7xl max-h-[500px] mx-auto my-4 p-4 border border-gray-700 rounded-lg bg-zinc-900/60">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex gap-3 p-3 animate-pulse">
                        <div className="h-10 w-10 rounded-full bg-gray-700"></div>
                        <div className="flex-1 space-y-2">
                            <div className="flex gap-3">
                                <div className="h-4 w-24 bg-gray-700 rounded"></div>
                                <div className="h-4 w-16 bg-gray-700 rounded"></div>
                            </div>
                            <div className="h-3 w-full bg-gray-700 rounded"></div>
                            <div className="h-3 w-5/6 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="space-y-4 max-w-7xl mx-auto my-4 p-4 border border-gray-700 rounded-lg bg-zinc-900/60 custom-scrollbar">
                {currentComments.map((comment) => (
                    <div key={comment._id} className="flex gap-3 p-3">
                        <img
                            src={comment.avatar || ""}
                            alt={comment.username}
                            className="h-10 w-10 rounded-full object-cover border border-gray-700"
                        />
                        <div className="flex-1">
                            <div className="flex gap-3 items-center">
                                <span className="text-sm md:text-base font-medium text-gray-100">{comment.username}</span>
                                <span className="text-xs md:text-sm text-gray-400">
                                    {dayjs(comment.createdAt).tz("Asia/Taipei").format("YYYY/MM/DD HH:mm")}
                                </span>
                            </div>
                            <p className="text-gray-200 mt-1 break-all">{comment.message}</p>
                            {session?.user?.discordId === comment.discordId && (
                                <button
                                    onClick={() => {
                                        setSelectedCommentId(comment._id);
                                        setModalOpen(true);
                                    }}
                                    className="mt-1 text-red-400 text-xs hover:underline cursor-pointer"
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {totalPages > 1 && (
                    <div className="flex justify-center space-x-2 my-2">
                        {[...Array(totalPages)].map((_, idx) => {
                            const page = idx + 1;
                            return (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-3 py-1 border border-gray-700  rounded-md cursor-pointer ${
                                        currentPage === page
                                            ? "bg-blue-600/50 text-white"
                                            : "text-white hover:bg-zinc-800"
                                    }`}
                                >
                                    {page}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>



            <ConfirmModal
                isOpen={modalOpen}
                message="Do you want to delete this comment?"
                onCancel={() => {
                    setModalOpen(false);
                    document.body.style.overflow = "";
                }}
                onConfirm={async () => {
                    if (!selectedCommentId) return;
                    setLoading(true);
                    const res = await fetch(`/api/comments/${selectedCommentId}`, { method: "DELETE" });
                    if (res.ok) setComments((prev) => prev.filter((c) => c._id !== selectedCommentId));
                    setModalOpen(false);
                    setLoading(false);
                    setSelectedCommentId(null);
                }}
            />
        </>
    );
}
