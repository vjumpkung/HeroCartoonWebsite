// /next.config.js
module.exports = {
  images: {
    domains: ["admin.herocartoontshirt.com"],
  },
  async headers() {
    return [
      {
        // This works, and returns appropriate Response headers:
        source: '/(.*).png',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=31536000',
          },
        ],
      },
      {
        // This doesn't work for 'Cache-Control' key (works for others though):
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            // Instead of this value:
            value: 'public, max-age=31536000, s-maxage=31536000 stale-while-revalidate=31536000',
            // Cache-Control response header is `public, max-age=60` in production
            // and `public, max-age=0, must-revalidate` in development
          },
        ],
      },
    ]
  },
};
