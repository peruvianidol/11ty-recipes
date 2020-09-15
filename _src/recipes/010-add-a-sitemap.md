---
title: Add a Sitemap to 11ty site
authorName: Akbarsait
authorUrl: https://www.akbarsait.com
---

Sitemap helps search engine crawl for making easier and quicker way to find and index your website content. The base blog of 11ty is already equipped and have a built in sitemap but added couple of date relavent changes to it make it more easier

### Directions
1. Create a file in your source directory  called **sitempa.njk** and add the following content to it.

```md
---
permalink: /sitemap.xml
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {% for page in collections.all %}
        <url>
            <loc>{{ site.url }}{{ page.url | url }}</loc>
            <lastmod>{{ page.date.toISOString() }}</lastmod>
            <changefreq>{{page.data.changeFreq}}</changefreq>
        </url>
    {% endfor %}
</urlset>
```

2. Now you have the **sitemap.xml** ready. Let's add one final thing to make it working. Let the search engine know where to find it by updating your robots.txt. Here is the content if you don't have the robots.txt already

```md
Sitemap: https://www.akbarsait.com/sitemap.xml

User-agent: *
Disallow:
```
### Resources

- [Eleventy Documentation - Quick Tip #006—Adding a 404 Not Found Page To Your Static Site](https://www.11ty.dev/docs/quicktips/not-found/)
