import type { Metadata } from "next";
import "./globals.css";
import { GlobalContextProvider } from "@/context/global-context";

export const metadata: Metadata = {
    title: "Next & Contentful",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <GlobalContextProvider>{children}</GlobalContextProvider>
            </body>
        </html>
    );
}
