---
title: Add pagination  
authorName: Akbarsait
authorUrl: https://www.akbarsait.com
---

**Pagination** helps organize the content of your blog or website. Eleventy's pagination is built into its collections feature.

### Prerequisites

- [Add a layout](../add-a-layout/)
- [Create a Collection](../create-a-collection)

### Directions

1. Follow the instructions on [Create a Collection](../create-a-collection) and by having a tag with name as *general* to each entry of the blog post, we have the collection established. Now add the following code to our **index.md** file. 


```md
---
layout: layout
title: My Web Blog
pagination:
  data: collections.general
  size: 2
  alias: posts
---
```

2. In the above code, we have added the **Pagination** key to our template's front matter and provided our collection dataset from blog post to **data** key and to limit the number of posts displayed in a page can be controlled using the **size** key and used **alias** name for collection. Now use the following lines of code to your **index.md** page for creating the pagination navigation. 

```md
## My Blog Posts

{% raw %}{%- for post in posts %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}{% endraw %}


{% raw %}{% if pagination.href.previous %}
  <a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{pagination.href.next}}">Next Page</a>
{% endif %}{% endraw %}
```
The above code will display the following output. 
```html
<h2>My Blog Posts</h2>

<ul>
  <li><a href="/posts/my-first-post.md">My First Post</a></li>
  <li><a href="/posts/my-second-post.md">My Second Post</a></li>
</ul>
<p><a href="/1/">Next Page</a></p>
```

### References

- [Pagination Navigation in 11ty](https://www.11ty.dev/docs/pagination/nav/)
- [Pagination](https://www.11ty.dev/docs/pagination/)