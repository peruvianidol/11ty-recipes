[![Netlify Status](https://api.netlify.com/api/v1/badges/1dd26105-df12-4845-b473-9fdaa7d92556/deploy-status)](https://app.netlify.com/sites/11ty-recipes/deploys)

# 11ty Recipes

There's a ton of great Eleventy starter kits out there but they're pretty opinionated about their features and dependencies. 11ty.recipies helps you build an Eleventy site from scratch, showing you how to add individual features to craft the exact site you need.

## Contribute

Submit an issue or a pull request if there's a specific recipe you'd like to see.

If submitting a PR, be sure to include the following in the front matter to receive proper credit.

```
authorName: [Your Name]
authorUrl: [A link to your website or Twitter]
```

## Some tips for contributing

- The title should be actionable (Add a layout, Change the default directories) and should not refer to Eleventy or "your site/a site," which are implied already.

- Recipes should have a short introduction to what the user will be doing and how this feature benefits them.

- Recipes should stand on their own. If a user needs to do several things to make something work, it should be broken out into separate recipes with later steps referencing those as **Prerequisites**. See [Add a 404 page]https://www.11ty.recipes/recipes/add-a-404-page/) for an example.

- The **Directions** section should be an ordered list with code samples for each step, where applicable. If adding to existing code, it can be helpful to highlight the lines being added with existing code around it for context. See step 4 of [Add global data](https://www.11ty.recipes/recipes/add-global-data/). You can do this in Markdown by adding line numbers (these are zero-indexed, so the first line is **0**) to highlight at the start of a codeblock:

```
```html/3-5, 6-9
```

- References to filenames or folders should be emphasized using **strong**

- Remember to escape Nunjucks tags in code snippets with `{% raw %}{% endraw %}` so that they are not processed when the recipe page is built.

- Always include a **References** section, when possible, to direct the user to resources where they can learn more about this recipe. This includes relevant pages from the [Eleventy Documentation](https://11ty.dev/docs/), tutorial videos, articles, Github repos, etc.

## Installing the repo

1. Clone this repo
2. Run `npm install` in the repo directory
3. Run `npm start` to serve your Eleventy site at `https://localhost:8080` and watch for changes

## Questions/Feedback

If you have any questions or feedback, please reach out to me via [Twitter](https://twitter.com/peruvianidol). Thanks!
