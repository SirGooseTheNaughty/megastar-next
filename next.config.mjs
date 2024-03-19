/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: process.env.NEXT_PUBLIC_MEDIA_ROOT_PROTOCOL,
          hostname: process.env.NEXT_PUBLIC_MEDIA_ROOT_URL,
          port: '',
          pathname: '/**',
        },
      ],
    },
};

export default nextConfig;
