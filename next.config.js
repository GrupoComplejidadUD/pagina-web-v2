const path = require("path");

module.exports = {
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `
      // Custom Variables and Mixins
      @import "variables";
      @import "mixins";
    `,
  },
};
