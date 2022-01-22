const withImages = require("next-images");

module.exports = withImages({
    reactStrictMode: true,
    images: {
        domains: ["picsum.photos", "i3.ytimg.com"],
    },
});
