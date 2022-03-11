include .makefile.inc

## Starts app in development mode
start:
	npm start

## Launches test runner in the interactive watch mode
test:
	npm test

## Builds the app for production in the `build` folder
build:
	npm run build

## Removes the single build dependency of the app
## Warning: One-way operation
eject:
	npm run eject

## Deploys the app to GitHub Pages
deploy:
	npm run deploy
