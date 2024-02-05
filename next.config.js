/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  headers: [
    {
      source: "/.well-known/apple-app-site-association",
      headers: [
        {
          key: "Content-Type",
          value: "application/json",
        },
      ],
    },
  ],
};

module.exports = nextConfig;
