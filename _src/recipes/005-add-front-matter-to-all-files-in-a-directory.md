---
title: Add front matter to all files in a directory
---

Rather than add the same front matter to every file in a directory, Eleventy will automatically apply any values in a JSON file with the same name to every file.

### Prerequisites

[Add a layout template](../add-a-layout/)

### Directions

1. Create a folder called **posts** in the root of your project
2. Create a file called **posts.json** in the posts folder and add the following:

```json
{
  "layout": "base"
}
```

3. Create another file in **posts** called **my-first-post.md**. You only need to add front matter for the title.

```json
---
title: My First Post
---
```

4. Create a second post, **my-second-post.md**. Again, you only need to add a title.

```json
---
title: My Second Post
---
```

5. You can now visit either of these pages, [**http://localhost:8080/posts/my-first-post/**](http://localhost:8080/posts/my-first-post/) and you'll see the page is using our base layout without having needed to specify it in each page's front matter.

### Resources

- [Eleventy Documentation - Template and Directory Specific Data Files](https://www.11ty.dev/docs/data-template-dir/)