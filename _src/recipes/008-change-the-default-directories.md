---
title: Change the default directories
---

By default, Eleventy looks for your source files in the root directory and outputs files to **_site**. You can change these defaults from the command line when running Eleventy, or by setting them in **.eleventy.js**. This helps keep your site files separate from your Eleventy config and other project files.

### Directions

1. Change the input directories from the command line

```text
npx @11ty/eleventy --input=_src --output=_site
```
\
**\*\*OR\*\***

1. Open **.eleventy.js**

2. Within the **module.exports** function , enter the following

```js/1-6
module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};
```

### Resources

- [Eleventy Documentation - Configuration Options: Input Directory](https://www.11ty.dev/docs/config/#input-directory)
- [Eleventy Documentation - Configuration Options: Output Directory](https://www.11ty.dev/docs/config/#output-directory)