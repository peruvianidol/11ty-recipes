---
title: Create a collection
authorName: Jon Thomas
authorUrl: https://twitter.com/wjonthomas
---

**Collections** allow you to create a single data set out of multiple pieces of data, and loop over them so you can output them them in different ways. A common use for collections might be to display a list of blog posts. The Eleventy documentation [goes into great detail on collections](https://www.11ty.dev/docs/collections/), so let's just look at the most basic way you can create your first collection.

### Prerequisites

- [Add a layout](../add-a-layout/)

### Directions

1. Create a new directory in your **_src** folder to contain multiple entries. For this example, we'll call it **posts**.
2. Create a few entries. For this example, let's assume we're writing blog post entries using Markdown. We'll create three basic entries called **my-first-post.md**, **my-second-post.md** and **my-third-post.md**.

```html
_src/
  posts/
    my-first-post.md
    my-second-post.md
    my-third-post.md
```        

3. Add some front matter each file. For now, we'll just specify a **layout**, **title** and a **tag**. **Tags** are the easiest way to establish a collection of related data.

Here's how **my-first-post.md** looks.

```md
---
layout: base
title: My First Post
tag: general
---

Hello from {% raw %}{{ title }}{% endraw %}!
```

4. By simply adding a **tag** to each entry, you have established your first named collection. You can now output it by using a loop, and by referencing **tag** you added to each file.

```md
## My posts

{% raw %}{%- for post in collections.general %}
  [{{ post.data.title }}]({{ post.url }})

{%- endfor %}{% endraw %}
```

The above code will output the following HTML:

```html
<h2>My posts</h2>

<p>
  <a href="/posts/my-first-post.md">My First Post</a>
</p>
<p>
  <a href="/posts/my-second-post.md">My Second Post</a>
</p>
<p>
  <a href="/posts/my-third-post.md">My Third Post</a>
</p>
```

5. Once you create your first collection, there are several ways you can manipulate it...

* [Excluding entries from a collection](https://www.11ty.dev/docs/collections/#option-exclude-content-from-collections)
* [Outputting entries that share multiple tags](https://www.11ty.dev/docs/collections/#multiple-tags-single-line)
* Custom [sorting](https://www.11ty.dev/docs/collections/#sorting) and [filtering](https://www.11ty.dev/docs/collections/#getfilteredbytag(-tagname-)) for a collection

### Related

- [Add front matter to all files in a directory](../add-front-matter-to-all-files-in-a-directory)

### Resources

- [Eleventy Documentation - Collections](https://www.11ty.dev/docs/collections/)
- [Working with Collections](https://www.pborenstein.com/posts/collections/) by Philip Borenstein