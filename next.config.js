const path = require("path");

module.exports = {
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `
      // Bootstrap Required
      @import "bootstrap/scss/functions";
      @import "bootstrap/scss/variables";
      @import "bootstrap/scss/mixins";

      // Custom Variables and Mixins
      @import "variables";
      @import "mixins";
    `,
  },
};
