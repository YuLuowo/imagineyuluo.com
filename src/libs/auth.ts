import {NextAuthOptions} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

interface DiscordProfile {
    id: string;
    username: string;
    avatar: string | null;
    discriminator: string;
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
                const discordProfile = profile as DiscordProfile;

                token.discordId = discordProfile.id;
                token.avatar = discordProfile.avatar;
                token.username = discordProfile.username;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                if (token.avatar) {
                    const isGif = (token.avatar as string).startsWith("a_"); // Check if gif qwq! (a mean animation)
                    session.user.avatar = `https://cdn.discordapp.com/avatars/${token.discordId}/${token.avatar}.${isGif ? "gif" : "png"}`;
                } else {
                    session.user.avatar = `https://cdn.discordapp.com/embed/avatars/${Math.floor(
                        Math.random() * 5
                    )}.png`;
                }

                session.user.discordId = token.discordId as string;
                session.user.name = token.username as string;
            }
            return session;
        },
    },
};