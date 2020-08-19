---
title: Start an Eleventy site from scratch
---

This is the most basic of sites, but the start of something great! All other recipes will assume you have everything below (What you'll need) and at least this very basic Eleventy setup.

## What you'll need
☑️ A terminal emulator (iTerm2)\
☑️ node.js (https://nodejs.org)\
☑️ npm\
☑️ A web browser (Firefox)

## Directions

1. Create a directory for your Eleventy project
```text
mkdir my-eleventy-project
```

2. Change to your Eleventy project directory
```text
cd my-eleventy-project
```

3. Create a package.json file
```text
npm init -y
```

4. Install Eleventy in the local directory
```text
npm install --save-dev @11ty/eleventy
```

5. Create an index page using Markdown
```text
echo '# My Eleventy Project' > index.md
```

6. Process the index page with Eleventy and start a local server
```text
npx @11ty/eleventy --serve
```

7. Your site can be viewed locally by visiting [**http://localhost:8080**](http://localhost:8080)

## Resources
* [Official Eleventy website/documentation](https://11ty.dev)
* [Official Eleventy Discord](https://discord.gg/GBkBy9u)
* [Beginner's Guide to Eleventy](https://tatianamac.com/posts/beginner-eleventy-tutorial-parti/) (Tatiana Mac)
* [Learn Eleventy from Scratch](https://piccalil.li/course/learn-eleventy-from-scratch/) (Andy Bell)
* [Learn with Jason: Let's Learn Eleventy w/ Zach Leatherman](https://www.youtube.com/watch?v=j8mJrhhdHWc) (Jason Lengstorf)
* [Building a Static Site with Eleventy](https://www.youtube.com/watch?v=p7TkCS01lI8) (Bryan Robinson)