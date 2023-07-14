/** @type {import('next').NextConfig} */
const pathPrefix = process.env.NODE_ENV == 'production' ? '/jacobhauck' : '';

const nextConfig = {
    output: "export"
}

module.exports = nextConfig
