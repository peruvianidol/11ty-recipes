---
title: Add files using passthrough file copy
---

Eleventy will only process specific filetypes. For assets like images, CSS and JavaScript, you need to set up passthrough copy to copy those files into your **_site** directory each time Eleventy is run.

### Directions

1. Create a folder called **css**, and inside create a file called **style.css**

2. Inside **style.css** add some styles:

```css
body {
	font-family: sans-serif;
}
```

3. In **_includes/base.njk**, link to your styles in the head:

```html
<link href="/css/style.css" rel="stylesheet">
```

4. Create a file in your project root called **.eleventy.js** and add the following:

```javascript
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
};
```

5. Visit your index page at [**https://localhost:8080**](https://localhost:8080) and your styles should now be linked.

6. To add passthrough for images and JS files (in directories named **img** and **js**), add the following to **.eleventy.js**, within the `module.exports` function:

```javascript
eleventyConfig.addPassthroughCopy("img");
eleventyConfig.addPassthroughCopy("js");
```

### Resources

- [Eleventy Documentation - Passthrough File Copy](https://www.11ty.dev/docs/copy/)
