await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
    },
    transpilePackages: ["geist"],
};

export default config;
