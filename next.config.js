/** @type {import('next').NextConfig} */

let assetPrefix = '';
let basePath = '';

if(process.env.GITHUB_ACTIONS || false) { 
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
    assetPrefix = `/${repo}/`;
    basePath = `/${repo}`;
}

const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath
};

module.exports = nextConfig
