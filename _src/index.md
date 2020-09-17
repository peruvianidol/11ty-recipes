---
layout: base
---

There's a ton of great <a href="https://11ty.dev/">Eleventy</a> starter kits out there but they're pretty opinionated about their features and dependencies. <strong>11ty.recipes</strong> helps you build an Eleventy site from scratch, showing you how to add individual features to craft the exact site you need.

## Recipes

{%- for recipe in collections.recipes %}
  1. [{{ recipe.data.title }}]({{ recipe.url }})
{%- endfor %}

## Coming soon

* Collections
* Dates
* Tags
* Navigation
* Nesting templates
* RSS feed
* Custom domain on Netlify
* Deploy status badge
* SASS
* Cache busting
* Contact form
* Syntax highlighting
* Minification
* Pagination
* Search
* Image optimization
* Icon sprite generation

