const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Collections
  eleventyConfig.addCollection("recipes", function(collectionApi) {
    return collectionApi.getFilteredByTag("recipe");
  });
};