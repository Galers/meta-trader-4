# MetaTrader4

## [Site](https://galers.github.io/meta-trader-4/)

## Description.

### This is a simple landing page implemented in pure JavaScript, SCSS, and HTML according to the design in Figma. The purpose of the project is to demonstrate the skills of layout, code structuring, and working with Sass without using frameworks.

## Technologies used

- Vite
- HTML5
- SCSS
- Vanilla JavaScript
- Git & GitHub Pages

## Getting started guide

1. Clone the repository:

`git clone https://github.com/<your-username>/<repo-name>.git`

2. Change to the project folder:

`cd <repo-name>.`

3. Install the dependencies:

`npm install`

4. Start the local development server:

`npm run dev`

5. Open the address `http://localhost:5173` in your browser

## Build for production

### To create an optimized build, run

`npm run build`

### The result will be in the dist folder.

## Deploy to GitHub Pages

1. Make sure the script is configured in package.json:

```
“scripts": {
“deploy": “gh-pages -d dist”
}
```

2. Install gh-pages as a dev dependency:

`npm install gh-pages --save-dev`

3. Run the deploy:

`npm run build`
`npm run deploy`
