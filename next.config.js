module.exports = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin.html/",
      },
    ];
  },
};
