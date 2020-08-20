---
title: Add a layout template
---

Adding a layout template allows you to nest the content of HTML or Markdown pages.

## Directions

1. Create a folder in the root of your project called **_includes**
2. Create a file inside of **_includes** called **base.njk**
3. In **base.njk** add a basic HTML boilerplate and inside of the body add `{% raw %}{{ content | safe }}{% endraw %}`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Eleventy Project</title>
</head>
<body>
  {% raw %}{{ content | safe }}{% endraw %}
</body>
</html>
```

4. In [**index.md**](http://index.md) add some front matter to the top of the page.

```text
---
layout: base
---
```

5. Visit your index page and now it should be rendering as HTML instead of Markdown. [**https://localhost:8080/**](https://localhost:8080/)

6. Let's make our title dynamic. In **_includes/base.njk**, Replace the conent of the title with `{% raw %}{{ title }}{% endraw %}`

```html
<title>{% raw %}{{ title }}{% endraw %}</title>
```

7. Before `{% raw %}{{ content | safe }}{% endraw %}`, add: 
```html
<h1>{{ title }}</h1>
``` 

8. In **index.md**, add another line to your front matter:

```text
title: My Eleventy Project
```

9. Delete your title: ~~`# My Eleventy Project`~~

## Resources

- [Eleventy Documentation - Layouts](https://www.11ty.dev/docs/layouts/)