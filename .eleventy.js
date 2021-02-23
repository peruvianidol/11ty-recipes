const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("_src/images");
  eleventyConfig.addPassthroughCopy("_src/fonts");

  // Watch sass folder for changes
  eleventyConfig.addWatchTarget("./src/sass/");

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Collections
  eleventyConfig.addCollection("recipes", function(collectionApi) {
    return collectionApi.getFilteredByTag("recipe");
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};