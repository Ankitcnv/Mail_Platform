/** @type {import('next').NextConfig} */
const nextConfig = {
   
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      },
};

export default nextConfig;
