# 🔷 ACM @ UCSD's Static Site Template

## Getting Started
Install the dependencies
```bash
# Install Yarn:
$ git clone https://github.com/acmucsd/static-template
$ cd static-template
$ curl -o- -L https://yarnpkg.com/install.sh | bash
# Install the package dependencies
$ yarn install
# start the website
$ yarn start
```

## Configuring for your community

Make sure you see config-overrides.js and src/configs/index.ts and make all necessary changes to fit your community!

This includes primary colors, logos, links etc.

### How to Get Updates

Templates are just forks! 

To streamline the process, you can pull any changes by running `yarn template:pull-changes`. (make sure you have committed all local changes before proceeding).

if you had any errors look at this helpful [stack overflow](https://stackoverflow.com/questions/56577184/github-pull-changes-from-a-template-repository/56577320).



## Technologies
- Language: **TypeScript**
- Framework: **React**
- CSS Preprocessor: **Less** 
- Boilerplate: **create-react-app**
- Icons: **fontawesome**

## To-do
- [ x ] Add react-router
- [ ] Add airbnb lint for ts
- [ ] Add separate repo w/redux
- [ ] Add more ACM assets (eg. logo/diamonds/shapes)
- [ ] Add Markdown support with [react-markdown](https://www.google.com/search?q=markdown+react&rlz=1C1GCEA_enUS817US817&oq=markdown+react&aqs=chrome.0.0l6j69i60l2.1868j0j7&sourceid=chrome&ie=UTF-8)
