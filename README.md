# 1. Create an empty branch on an existing GitHub repository.
- Step 1: Make sure the (.git) is in an empty folder/directory at first. E.g. (test/.git)
```
$ git checkout --orphan <new-branch>
$ git rm -rf .
```

- Step 2: Copy/move the (.git) from (test/.git) to an existing project.
```
$ git add .
$ git commit --allow-empty -m "Initial commit"

$ git push origin <branch-name>
or
$ git push --set-upstream origin <branch-name>
```

<hr>

# 2. App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
