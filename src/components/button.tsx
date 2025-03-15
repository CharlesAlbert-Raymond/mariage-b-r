import NextLink from "next/link";

export const Link = ({
    href,
    children,
    className = "",
}: {
    children: React.ReactNode;
    href: string;
    className?: string;
}) => {
    return (
        <NextLink
            href={href}
            className={`rounded-xl border border-pink-600 bg-pink-200 px-4 py-2 text-pink-600 hover:bg-pink-200/70 hover:text-pink-600/70 ${className}`}
        >
            {children}
        </NextLink>
    );
};
