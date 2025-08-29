import {useState} from "react";
import CommentBox from "@/components/ui/CommentBox";
import CommentList from "@/components/ui/CommentList";

export default function CommentSection() {
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleCommentAdded = async () => {
        setLoading(true);
        setRefreshTrigger((prev) => prev + 1);
        setLoading(false)
    };

    return (
        <div className="relative">
            <CommentList fetchTrigger={refreshTrigger} />
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                    <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            <CommentBox onCommentAdded={handleCommentAdded} />
        </div>
    );
}

