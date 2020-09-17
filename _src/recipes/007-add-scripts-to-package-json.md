---
title: "Add scripts to package.json"
---

We can add commands to the scripts section of our **package.json** file to make shorter aliases for running Eleventy as well as combining it with other commands. For now, let's set up a development command, which will run Eleventy in watch mode and refresh the browser when we make changes, and a production command, which will just build the site.

### Directions

1. Open **package.json**.

2. In the "scripts" section of **package.json**, add the following:

``` json/1-2
"scripts": {
  "dev": "npx @11ty/eleventy --serve",
  "prod": "npx @11ty/eleventy"
},
```

3. Run the `dev` script from the command line

```text
npx run dev
```
4. You should see something like this:

```text
Watching…
[Browsersync] Access URLs:
 ----------------------------------
       Local: http://localhost:8080
    External: http://10.0.0.31:8080
 ----------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 ----------------------------------
[Browsersync] Serving files from: _site
```

### Resources

- [Introduction to NPM Scripts](https://www.freecodecamp.org/news/introduction-to-npm-scripts-1dbb2ae01633/)