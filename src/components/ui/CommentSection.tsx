import { useState } from "react";
import CommentBox from "@/components/ui/CommentBox";
import CommentList from "@/components/ui/CommentList";

export default function CommentSection() {
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const handleCommentAdded = async () => {
        setRefreshTrigger((prev) => prev + 1);
    };

    return (
        <div className="relative">
            <CommentList fetchTrigger={refreshTrigger} />
            <CommentBox onCommentAdded={handleCommentAdded} />
        </div>
    );
}
