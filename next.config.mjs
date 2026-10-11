const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: isProd ? '/turism-' : '',
    assetPrefix: isProd ? '/turism-' : '',
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? '/turism-' : '',
    },
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
