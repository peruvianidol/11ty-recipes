---
title: Add a Sitemap
authorName: Akbarsait
authorUrl: https://www.akbarsait.com
---

A sitemap helps search engines crawl your site, making easier and quicker to find and index your website content. 

### Prerequisites

- [Add global data](../add-global-data/)
- A `url` in **_data/site.json**

### Directions

1. Create a file in your source directory called **sitemap.njk** and add the following content to it


```md
---
permalink: /sitemap.xml
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {% raw %}{% for page in collections.all %}
        <url>
            <loc>{{ site.url }}{{ page.url | url }}</loc>
            <lastmod>{{ page.date.toISOString() }}</lastmod>
        </url>
    {% endfor %}{% endraw %}
</urlset>
```

2. Now you have the **sitemap.xml** ready. Let's add one final thing to make it working by updating **robots.txt** to let the search engine know where to find it. Here is the content if you don't have  **robots.txt** already. 

```md
Sitemap: https://www.yoursitename.dev/sitemap.xml

User-agent: *
Disallow:
```

### References

- [Create a Sitemap.xml with Eleventy](https://www.belter.io/eleventy-sitemap/)
- [Sitemaps XML format](https://www.sitemaps.org/protocol.html)