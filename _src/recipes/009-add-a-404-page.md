---
title: Add a 404 page
authorName: Raymond Camden
authorUrl: https://www.raymondcamden.com
---

The actual contents can vary of course, but in general a good 404 page informs the user the content they wanted was not found and attempts to give them resources to find what they were looking for.

### Prerequisites

- [Add a layout](../add-a-layout/)

### Directions
1. Create a file in your project root called **404.md** and add the following:

```md
---
title: Oops! Not Found
layout: base
permalink: /404.html
---

This is where you should tell the user how to find their content. Maybe on the [home page?](./)
```

2. Depending your platform, your job is done. On Netlify and GitHub pages, they will automatically load this file when a page is not found. For other platforms, check their documentation to see how to specify which file/URL is used when a page is not found.

### Resources

- [Eleventy Documentation - Quick Tip #006—Adding a 404 Not Found Page To Your Static Site](https://www.11ty.dev/docs/quicktips/not-found/)
