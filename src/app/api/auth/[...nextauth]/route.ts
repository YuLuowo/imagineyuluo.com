import NextAuth, {DefaultSession, NextAuthOptions} from "next-auth";
import {authOptions} from "@/libs/auth";

interface DiscordProfile {
    id: string;
    username: string;
    avatar: string | null;
    discriminator: string;
}

declare module "next-auth" {
    interface Session {
        user: {
            discordId?: string;
            avatar?: string;
        } & DefaultSession["user"];
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
