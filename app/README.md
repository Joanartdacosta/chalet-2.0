# WebApp-Chalet

**This is a Web-App developed for an _Interior Design’s_ project called _Chalet_**.

> ![Chalet Interior Design](https://chalet-webapp.s3.amazonaws.com/icons/Chalet-logo.jpg)

The project applied **JavaScript, React and Next.js**.
In the website it will be possible to find detailed information about the designer _Mariana Batista Ramadas_, her services and check some projects developed in a gallery.

At the moment, it is under-construction.

[Website](https://www.chaletdesigninteriores.com)

[Instagram](https://www.instagram.com/chalet_designinteriores/)

## Github Workflow Steps

### Create a new feature

- `git checkout main`
- `git pull origin main`
- `git checkout -b "branch_name"`
- Code stuff
- `git add .`
- `git commit -m "description"`
- `git push origin "branch_name"`
- Merge feature branch to dev after PR is reviewed and approved
- (Manually) deploy dev branch using Vercel CLI
  - git checkout dev && git pull origin dev
  - cd app
  - npx vercel
- Ensure changes in dev are correct
- Merge feature branch to master after PR is reviewed and approved
- (Manually) deploy main branch using Vercel CLI
  - git checkout main && git pull origin main
  - cd app
  - npx vercel --prod
- git checkout dev && git pull origin main
- (optional) git checkout feature branch && git pull origin main

## Domain

Domain in www.namecheap.com.

Hosted in Vercel.
