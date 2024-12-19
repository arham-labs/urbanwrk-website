/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['urbanwrk.com'], // Add the domain name here
      },
      experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};

export default nextConfig;
