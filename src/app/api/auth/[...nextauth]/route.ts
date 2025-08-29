import NextAuth, {DefaultSession} from "next-auth";
import {authOptions} from "@/libs/auth";

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
