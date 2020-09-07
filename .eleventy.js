const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("css");

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Collections
  eleventyConfig.addCollection('recipes', collection => {
    return [
      ...collection.getFilteredByGlob('./recipes/*.md')
    ];
  });
};