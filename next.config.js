/** @type {import('next').NextConfig} */

const pathPrefix = process.env.NODE_ENV === 'production' ? '/jacobhauck' : '';

const nextConfig = {
    output: "export",
    assetPrefix: pathPrefix,
    env: {
        pathPrefix
    },
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;
