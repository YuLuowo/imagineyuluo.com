"use client";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {ConfirmModal} from "@/components/ui/ConfirmModal";

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

export default function CommentList({fetchTrigger}: { fetchTrigger?: number }) {
    const {data: session} = useSession();
    const [comments, setComments] = useState<CommentType[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCommentId, setSelectedCommentId] = useState<string | null>(null);

    const fetchComments = async () => {
        setLoading(true);
        const res = await fetch("/api/comments");
        const data: CommentType[] = await res.json();
        setComments(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchComments();
    }, [fetchTrigger]);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this comment?")) return;
        const res = await fetch(`/api/comments/${id}`, {method: "DELETE"});
        if (res.ok) {
            setComments((prev) => prev.filter((c) => c._id !== id));
        } else {
            alert("Failed to delete");
        }
    };

    if (loading) return <div>Loading comments...</div>;

    return (
        <>
            <div className="space-y-4 max-w-7xl max-h-[500px] overflow-y-auto mx-auto my-4 p-4 border border-gray-700 rounded-lg bg-zinc-900/60 custom-scrollbar">
                {comments.map((comment) => (
                    <div key={comment._id}
                         className="flex gap-3 p-3">
                        <img
                            src={comment.avatar || ""}
                            alt={comment.username}
                            className="h-10 w-10 rounded-full object-cover border border-gray-700"
                        />
                        <div className="flex-1">
                            <div className="flex gap-3 items-center">
                                <span className="font-medium text-gray-100">{comment.username}</span>
                                <span className="text-sm text-gray-400">
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
                    const res = await fetch(`/api/comments/${selectedCommentId}`, {method: "DELETE"});
                    if (res.ok) setComments((prev) => prev.filter((c) => c._id !== selectedCommentId));
                    setModalOpen(false);
                    setSelectedCommentId(null);
                }}
            />
        </>

    );
}
