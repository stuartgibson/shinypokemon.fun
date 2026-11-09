# ShinypokemonFun

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

The site's data (`src/data`) isn't bundled into the app: it's generated into `src/assets/data.json`, which the app loads at startup. `npm start` generates it first; after changing data, run `npm run data` (or restart `npm start`) to regenerate it.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build-prod` for a production build. The build artifacts will be stored in the `dist/` directory. This runs `npm run build-app` (the Angular app) then `npm run build-data` (`data.json` and the public JSON API). The deploy workflow reuses the previous app build when only data has changed.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
