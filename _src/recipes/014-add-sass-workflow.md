---
title: Add a Sass workflow
---

Eleventy doesn't support Sass out of the box, but it's rather easy to add, thanks to [this awesome tutorial](https://egghead.io/lessons/11ty-add-sass-compiling-and-watch-for-changes-in-eleventy-11ty) by [Stephanie Eckles](https://twitter.com/5t3ph).

### Prerequisites

* [Change the default directories](/recipes/change-the-default-directories/)
* [Add scripts to package.json](/recipes/add-scripts-to-package.json/)
* [Add a layout](/recipes/add-a-layout/)

### Directions

1. Install **sass** and **npm-run-all**.

```text
npm install sass npm-run-all --save-dev
```

2. In **package.json** update the **scripts** section. Here we're creating watch and build commands for both Sass and Eleventy and running them concurrently using **npm-run-all**. Sass will compile all files in **_src/sass** to **_site/css**.

```json
// package.json

"scripts": {
  "watch:sass": "sass --watch _src/sass:_site_/css",
  "build:sass": "sass _src/sass:_site/css",
  "watch:eleventy": "eleventy --serve",
  "build:eleventy": "eleventy",
  "start": "npm-run-all build:sass --parallel watch:*",
  "build": "npm-run-all build:*"
},
```

3. Create a **.scss** file within **_src/sass** (or whichever name you'd like, as long as it matches the path defined in Step 2).

```scss
// _src/sass/recipes.scss

body {
  font-family: sans-serif;
}
```

4. Add a link to your CSS in the `<head>` of your template layout.

```html
<!-- _src/_includes/base.njk -->

<head>
  <link rel="stylesheet" href="/css/recipes.css">
</head>
```

5. In **.eleventy.js**, use `addWatchTarget()` to watch the **sass** folder for changes. This will make sure your changes are reflected in the browser automatically when you save your `.scss` files.

```js
// .eleventy.js

module.exports = function(eleventyConfig) {
  // Watch sass folder for changes
  eleventyConfig.addWatchTarget("./_src/sass/");
};
```

6. Start/restart the Eleventy server to make sure the changes to **package.json** take effect.

### Resources

* [Add Sass Compiling and Watch for Changes in Eleventy (11ty)](https://egghead.io/lessons/11ty-add-sass-compiling-and-watch-for-changes-in-eleventy-11ty)
* [11ty-sass-skeleton](https://github.com/5t3ph/11ty-sass-skeleton) - A bare bones Eleventy starter that just includes the essential setup to watch and compile Sass, by [Stephanie Eckles](https://thinkdobecreate.com/)
* [npm sass](https://www.npmjs.com/package/sass)