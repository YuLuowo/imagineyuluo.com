import mongoose, { Schema, Document, Model } from "mongoose";

export interface IComment extends Document {
    discordId: string;
    username: string;
    avatar?: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

const CommentSchema = new Schema<IComment>({
    discordId: { type: String, required: true },
    username: { type: String, required: true },
    avatar: { type: String },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Comment: Model<IComment> = mongoose.models.Comment || mongoose.model<IComment>("Comment", CommentSchema);
export default Comment;
