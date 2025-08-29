import NextAuth, {DefaultSession, NextAuthOptions} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

declare module "next-auth" {
    interface Session {
        user: {
            discordId?: string;
            avatar?: string;
        } & DefaultSession["user"];
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account && profile) {
                token.discordId = (profile as any).id;
                token.avatar = (profile as any).avatar;
                token.username = (profile as any).username;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.discordId = token.discordId as string;
                session.user.avatar = token.avatar
                    ? `https://cdn.discordapp.com/avatars/${token.discordId}/${token.avatar}.png`
                    : `https://cdn.discordapp.com/embed/avatars/${Math.floor(
                        Math.random() * 5
                    )}.png`;
                session.user.name = token.username as string;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
