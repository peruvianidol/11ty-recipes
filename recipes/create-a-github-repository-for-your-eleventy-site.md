---
title: Create a Github repository for your Eleventy site
---

Using Github will allow us to version control our project and make things like deploying our site easier.

## Prerequisites

- [Start an Eleventy site from scratch](/recipes/start-an-eleventy-site-from-scratch/)

## What you'll need

☑️ A [Github](https://github.com) account

## Directions

1. Create a .gitignore file and add the node_modules and _site folders\
`echo 'node_modules\n_site' > .gitignore`
2. Initialize your repo\
`git init`
3. Add all files to be committed\
`git add --all`
4. Commit the files\
`git commit -m "Initial commit"`
5. Log into Github and select "New Repository" from the menu next to your profile.
6. Give your repo a name (my-eleventy-project)
7. Click "Create Repository"
8. On the next page copy the two lines under "...or push an existing repository from the command line
9. Paste them into the terminal. They should look like this:\
`git remote add origin *remote repository URL*`\
`git push -u origin master`

## Resources

* [Adding an existing project to GitHub using the command line](https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line)