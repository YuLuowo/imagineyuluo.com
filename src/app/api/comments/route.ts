import { getServerSession } from "next-auth";
import Comment from "@/models/Comment";
import { connectDB } from "@/libs/mongodb";
import { NextResponse } from "next/server";
import {authOptions} from "@/libs/auth";

export async function GET() {
    await connectDB();
    const comments = await Comment.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json(comments);
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.discordId) {
        return new Response("Unauthorized", { status: 401 });
    }

    const { message } = await req.json();
    if (!message || message.trim().length === 0) {
        return new Response("Message required", { status: 400 });
    }

    await connectDB();
    const comment = await Comment.create({
        discordId: session.user.discordId,
        username: session.user.name,
        avatar: session.user.avatar,
        message: message.trim(),
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    return Response.json(comment);
}
