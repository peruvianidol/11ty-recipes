---
title: Add global data
---

Global data files allow you to store data in a single file and reference it in all of your templates. It can be handy for adding meta data about the site to various pages, but has lots of other uses as well.

### Directions

1. Add a folder called **_data**

2. Within **_data/**, create a file called **site.json**

3. In **site.json** add some details about your site

```json
{
  "name": "11ty Recipes",
  "url": "https://11ty.recipes",
  "authorName": "Mike Aparicio",
  "authorUrl": "https://mikeaparicio.com",
  "description": "11ty.recipes helps you build an Eleventy site from scratch, showing you how to add individual features to craft the exact site you need.",
  "favicon": "https://11ty.recipes/images/meta/favicon.svg"
}
```

4. You can access this data in your templates using template variables

```html/3-5
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="{% raw %}{{ site.authorName }}{% endraw %}">
  <meta name="description" content="{% raw %}{{ site.description }}{% endraw %}">
  <link rel="icon" href="{% raw %}{{ site.favicon }}{% endraw %}" type="image/svg+xml" />
  ...
</head>
```

### References

- [Eleventy Documentation - Global Data Files](https://www.11ty.dev/docs/data-global/)
