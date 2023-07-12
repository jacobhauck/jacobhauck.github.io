/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    basePath: "/jacobhauck.github.io",
    assetPrefix: "/jacobhauck.github.io",
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;
