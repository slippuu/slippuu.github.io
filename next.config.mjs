/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    images: {
        loader: "akamai",
        path:"",
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig;
