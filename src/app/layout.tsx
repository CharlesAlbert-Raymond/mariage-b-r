import type { Metadata } from "next";
import "./global.css";
import Meta from "~/lib/meta/meta";

export const metadata: Metadata = {
    title: "Mariage Blais-Raymond",
    description:
        "Le mariage de Charles-Albert Raymond et Gabrielle Blais aura lieu du 8 au 11 août 2025. Venez célébrer avec nous!",
    icons: {
        icon: `/static/img/favicon.png`,
        apple: `/static/img/apple-touch-icon.png`,
    },
    openGraph: {
        title: "Mariage Blais-Raymond",
        description:
            "Le mariage de Charles-Albert Raymond et Gabrielle Blais aura lieu du 8 au 11 août 2025. Venez célébrer avec nous!",
        images: [
            {
                url: `/static/img/og-image.png`,
                width: 1200,
                height: 630,
                alt: "Mariage Blais-Raymond",
            },
        ],
        type: "website",
        locale: "fr_CA",
        url: process.env.NEXT_PUBLIC_URL ?? "",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mariage Blais-Raymond",
        description:
            "Le mariage de Charles-Albert Raymond et Gabrielle Blais aura lieu du 8 au 11 août 2025. Venez célébrer avec nous!",
        images: [`/static/img/og-image.png`],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Meta />
            <body>{children}</body>
        </html>
    );
}
