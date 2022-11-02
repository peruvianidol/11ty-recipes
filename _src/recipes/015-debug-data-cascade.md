---
title: Debug the Data Cascade
---

When we set a variable in our template but get nothing in generated result, it's more convinent to print out the variable's data cascade detail for investigation.

### Create a filter

1. Open our configuration file **.eleventy.js** and add:

```js
eleventyConfig.addFilter('debug', function(content) {
    console.log(content);
});
```

### How to use

1. Use the filter we just created with whatever we want to investigate

```js
{{ collections.blog | debug }}
```

2. Go to our windows console, now we can see what is like inside `collections.blog`

```console
  {
    template: Template {
      _config: [TemplateConfig],
      inputPath: './src/blogs/1',
      inputDir: './src',
      parsed: [Object],
      extraOutputSubdirectory: '',
      outputDir: '_site',
      _extensionMap: [EleventyExtensionMap],
      linters: [],
      ...
      dataCache: [Object],
      computedData: [ComputedData],
      _usePermalinkRoot: undefined
    },
    inputPath: './src/books/liaofansixun/frontannounce.html',
    fileSlug: 'frontannounce',
    filePathStem: '/blog/liaofansixun/frontannounce',
    data: {
      metadata: [Object],
      taglist: [Array],
      eleventy: [Object],
      pkg: [Object],
      tags: [Array],
      layout: 'layouts/blog.njk',
      page: [Object],
      collections: [Object]
    },
    date: 2022-11-01T03:59:57.954Z,
    outputPath: '_site/blogs/1',
    url: '/blogs/1',
    checkTemplateContent: true,
    templateContent: [Getter/Setter],
    _templateContent: '\r\n' +
      '<p class="title">Hello World</p>\r\n'
  }
]
```
