import type {Metadata} from "next";
import "./globals.css";
import React from "react";


export const metadata: Metadata = {
    title: "ImagineYuLuo",
    description: "Hi",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
