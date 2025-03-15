import NextLink from "next/link";

export const Link = ({
    href,
    children,
    className = "",
    isExternal = false,
    variant = "primary",
}: {
    children: React.ReactNode;
    href: string;
    className?: string;
    isExternal?: boolean;
    variant?: "primary" | "outline";
}) => {
    const cssClasses =
        "rounded-xl border px-4 py-2";

    const variantCssClasses = {
        primary:
            "bg-pink-200 text-pink-600 hover:bg-pink-200/70 hover:text-pink-600/70",
        outline:
            "border-pink-600 text-pink-600 hover:bg-opacity-70 hover:text-pink-600/70",
    }[variant];

    if (isExternal) {
        return (
            <a
                href={href}
                className={`${cssClasses} ${className} ${variantCssClasses}`}
                target="_blank"
            >
                {children}
            </a>
        );
    }

    return (
        <NextLink
            href={href}
            className={`${cssClasses} ${className} ${variantCssClasses}`}
        >
            {children}
        </NextLink>
    );
};
