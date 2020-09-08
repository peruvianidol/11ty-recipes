---
title: Add files using passthrough file copy
---

### Directions

1. Create a file in your project root called **.eleventy.js** and add the following:

```javascript
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
};
```

2. Create a folder called **css**, and inside create a file called **style.css**

3. Inside **style.css** add some styles:

```css
body {
	font-family: sans-serif;
}
```

4. In **_includes/base.njk**, link to your styles in the head:

```html
<link href="/css/style.css" rel="stylesheet">
```

5. Visit your index page at [**https://localhost:8080**](https://localhost:8080) and your styles should now be linked.

6. You can also add passthrough for images and JS files in **.eleventy.js**. The following will copy any files in the /img or /js folders:

```javascript
eleventyConfig.addPassthroughCopy("img");
eleventyConfig.addPassthroughCopy("js");
```

### Resources

- [Eleventy Documentation - Passthrough File Copy](https://www.11ty.dev/docs/copy/)
