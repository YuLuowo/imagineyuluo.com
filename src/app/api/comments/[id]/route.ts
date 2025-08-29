import {NextRequest, NextResponse} from "next/server";
import { connectDB } from "@/libs/mongodb";
import Comment from "@/models/Comment";
import { getServerSession } from "next-auth";
import {authOptions} from "@/libs/auth";


export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const session = await getServerSession(authOptions);
    if (!session?.user?.discordId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await connectDB();
    const comment = await Comment.findById(id);
    if (!comment) return NextResponse.json({ error: "Not found" }, { status: 404 });

    if (comment.discordId !== session.user.discordId)
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    await Comment.deleteOne({ _id: comment._id });
    return NextResponse.json({ success: true });
}
