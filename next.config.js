/** @type {import('next').NextConfig} */

let assetPrefix = '';
let basePath = '';

if(process.env.GITHUB_ACTIONS || false) { 
    const repo = 'jacobhauck';
    assetPrefix = `/${repo}/`;
    basePath = `/${repo}/`;
}

const nextConfig = {
    assetPrefix,
    basePath
};

module.exports = nextConfig
