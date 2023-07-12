/** @type {import('next').NextConfig} */

let assetPrefix = '';
let basePath = '';

if(process.env.GITHUB_ACTIONS) { 
    const repo = 'jacobhauck';
    assetPrefix = `/${repo}/`;
    basePath = `/${repo}/`
}

const nextConfig = {
    assetPrefix: `/${repo}/`,
    basePath: `/${repo}/`
}

module.exports = nextConfig
