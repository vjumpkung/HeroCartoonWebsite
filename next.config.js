// /next.config.js
module.exports = {
  images: {
    domains: ["admin.herocartoontshirt.com"],
    maxAge: 9999999999, // seconds
  },
  async headers() {
    return [
      {
        source: '/(.*).(jpe?g|png|ico|webp|svg|xml|ttf|woff2?)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
};
