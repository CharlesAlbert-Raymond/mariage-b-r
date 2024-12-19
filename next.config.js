await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "vykgagnypfwuujwluuvq.supabase.co",
                port: "",
                pathname: "/storage/v1/**",
            },
        ],
    },
    reactStrictMode: true,
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
    },
    transpilePackages: ["geist"],
};

export default config;
