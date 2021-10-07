const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
      "@elements": path.resolve(__dirname, "src/components/elements"),
      "@icons": path.resolve(__dirname, "src/components/icons"),
      "@styles": path.resolve(__dirname, "src/components/styles"),
    },
  },
};
