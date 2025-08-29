import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Providers from "@/components/layout/Providers";

export const metadata: Metadata = {
    title: "YuLuowo",
    description: "Hi",
    keywords: [
        "YuLuowo",
        "YuLuo",
        "ImagineYuLuo",
        "雨落",
    ],
    openGraph: {
        title: "YuLuowo",
        description:
            "Hi!",
        url: "https://imagineyuluo.com",
        siteName: "ImagineYuLuo",
        images: [
            {
                url: "https://imagineyuluo.com/images/yibei.png",
                width: 640,
                height: 640,
                alt: "YuLuo Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },

};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
            <Providers>
                {children}
            </Providers>
        </body>
        </html>
    );
}
