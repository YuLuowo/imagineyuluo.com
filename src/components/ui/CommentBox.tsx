"use client";
import {useState} from "react";
import {signIn, signOut, useSession} from "next-auth/react";
import {FaDiscord} from "react-icons/fa";

type CommentBoxProps = {
    maxLength?: number;
    placeholder?: string;
    onCommentAdded?: () => void,
};

export default function CommentBox({
                                       maxLength = 300,
                                       placeholder = "Write your comment!",
                                       onCommentAdded
                                   }: CommentBoxProps) {
    const {data: session} = useSession();
    const [value, setValue] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const isSignedIn = !!session?.user;
    const remaining = maxLength - value.length;
    const overLimit = remaining < 0;
    const canSubmit = isSignedIn && !submitting && value.trim().length > 0 && !overLimit;

    const handleSubmit = async () => {
        if (!canSubmit) return;

        setSubmitting(true);
        try {
            const res = await fetch("/api/comments", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message: value.trim()}),
            });

            if (!res.ok) new Error(await res.text());

            setValue("");

            onCommentAdded?.();
        } catch (err) {
            console.error(err);
            alert("Failed to post comment");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div
            className="w-full max-w-7xl mx-auto my-4 rounded-lg border border-gray-700 bg-zinc-900/60 backdrop-blur p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    {session?.user?.avatar ? (
                        <img
                            src={session.user.avatar}
                            alt={session.user.name ?? "User"}
                            className="h-9 w-9 rounded-full object-cover border border-gray-700"
                        />
                    ) : (
                        <div className="h-9 w-9 rounded-full bg-gray-700"/>
                    )}
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-100">
                          {session?.user?.name ?? (isSignedIn ? "Logged in" : "Guest")}
                        </span>
                        <span className="text-xs text-gray-400">Leave a comment</span>
                    </div>
                </div>

                {!isSignedIn ? (
                    <button
                        type="button"
                        onClick={() => signIn("discord", {callbackUrl: window.location.href})}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-indigo-800 bg-indigo-900/30 hover:bg-indigo-900/50 text-indigo-300 text-sm cursor-pointer"
                    >
                        <FaDiscord className="w-5 h-5 hidden md:block" />
                        Sign in with Discord
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-red-800 bg-red-900/30 hover:bg-red-900/50 text-red-300 text-sm cursor-pointer"
                    >
                        Sign out
                    </button>
                )}
            </div>

            <div className="relative">
                <textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    maxLength={maxLength * 2}
                    placeholder={placeholder}
                    className="w-full min-h-[120px] rounded-2xl border border-gray-700 bg-zinc-900 outline-none focus:ring-2 ring-blue-500/80 px-4 py-3 text-sm text-gray-100 placeholder:text-gray-500"
                />
                <div className="mt-2 flex items-center justify-between">
                    <span className={`text-xs ${overLimit ? "text-red-400" : "text-gray-400"}`}>
                        {overLimit ? `Over by ${Math.abs(remaining)} chars` : `${remaining} characters left`}
                    </span>
                    {!isSignedIn ? <span className="text-xs text-gray-400">Sign in to comment</span> : null}
                </div>
            </div>

            <div className="mt-3 flex items-center justify-end gap-2">
                <button
                    type="button"
                    className="px-3 py-2 text-sm rounded-xl border border-gray-700 hover:bg-zinc-800 cursor-pointer"
                    onClick={() => setValue("")}
                    disabled={!isSignedIn || submitting || value.length === 0}
                >
                    Clear
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className={`px-4 py-2 text-sm rounded-xl font-medium transition ${
                        canSubmit ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow" : "bg-gray-700 text-gray-500 cursor-not-allowed"
                    }`}
                >
                    {submitting ? "Sending..." : "Post Comment"}
                </button>
            </div>
        </div>
    );
}
