/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'megastar-group.ru',
          port: '',
          pathname: '/images/**',
        },
      ],
    },
};

export default nextConfig;
