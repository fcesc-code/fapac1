## Purpose

The aim of this PAC1 is to create a small site and complete basic exercises, as part of a University 
[Web apps and sites development Master](https://estudis.uoc.edu/ca/masters-universitaris/desenvolupament-llocs-aplicacions-web/presentacio) 
by [Universitat Oberta de Catalunya](http://uoc.edu). \
Subject: Advanced Frameworks. September 2021.

## Project 

### Repo

A Git repository can be found at https://github.com/fcesc-code/fapac1.git
The backend counterpart can be found at (tbd)

### Tech stack

- [Angular](https://angular.io/) framework
- [Angular CLI](https://angular.io/cli)
- [RxJS](https://rxjs.dev/guide/overview) library for reactive programming with Angular
- [Typescript](https://www.typescriptlang.org/)
- [Jasmine](https://jasmine.github.io/) test framework
- [Karma](https://karma-runner.github.io/) test runner
- [Protractor](https://www.protractortest.org/#/) e2e testing in Angular
- [sass](https://sass-lang.com/)
- [GitHub](https://github.com/)
- [GitHub Actions](https://github.com/features/actions) for automated testing in continuous delivery
- [GitHub native Dependabot](https://dependabot.com/) for security alerts
- [GitHub codeQL](https://github.com/github/codeql) for code scanning alerts
- [sonarqube](https://www.sonarqube.org/)
- [VSCode](https://code.visualstudio.com/)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/about) Windows Subsystem for Linux (ubuntu 20)
- [HTML](https://html.spec.whatwg.org/)
- [YAML](https://yaml.org/) for GitHub actions

### Content

- [Pexels](https://www.pexels.com/)

### Project

- [Trello](https://trello.com/)
- [kanban](https://en.wikipedia.org/wiki/Kanban)

### Code

- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Reactive programming](https://en.wikipedia.org/wiki/Reactive_programming)
- Common [Software Design patterns](https://en.wikipedia.org/wiki/Software_design_pattern)

## Releases

| Version | Date                 | Status       | Content         |
| ------- | -------------------- | ------------ | --------------- |
| 0.0.0   | October 2021 (est.)  | Not released | Initial version |

### Version 0.0.0

1. ✔️ Initial version

## Quality gate

- [HTML Validator](https://jigsaw.w3.org/css-validator/): x errors | x warnings \
- [CSS Validator](https://jigsaw.w3.org/css-validator/validator): x errors | x warnings \
- [Karma](https://karma-runner.github.io/): xx/xx tests passed (branch not merged) | Coverage: \
  | statements | branches | lines | functions |
  | ---------- | -------- | ----- | --------- |
  | x.x% | x.x% | x.x% | x.x% |
- [Sonarqube](https://www.sonarqube.org/): x bugs | x0 code smells | x vulnerabilities | x security hotspots | x% code duplication (excluding duplicated API file requested to separate deliverables) \
- [GitHub codeQL](https://github.com/github/codeql): 0 security alerts [![CodeQL](https://github.com/fcesc-code/fapac1/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/fcesc-code/fapac1/actions/workflows/codeql-analysis.yml)

## Continuous delivery

Automated testing in every pull request or merge to the main branch.
Automated code scanning to measure code quality, pull requests cannot be merged if quality is not met.
Automated security alerts for the repository.

## Scripts

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Alternatively, run `npm start`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Option `npm run testAuto` is provided for automated GitHub Actions.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Contributions

### Philosophy

This software is currently developed :construction: with educational purposes and is open source. The code is published in this public repository. 

### Issues :fire:

Do you want to suggest :bulb: a new feature? Open an [issue](https://github.com/fcesc-code/fapac1/issues).
Please, keep it short, descriptive and concise :smiley:

### Security

Check out the how to report a vulnerability in our supported versions in the [SECURITY](https://github.com/fcesc-code/fapac1/blob/main/SECURITY.md) :open_book:.

## Credits

Assistant professor [Francesc Albuera Reverté](https://campus.uoc.edu/rb/PERFIL20/profile/429300?s=2209f6e4bc33018fa1c11ff4a5b0155bf3c80342c5afe2459e9234430545bfa178d24210c97bb72689d6c22d6b5c504c3c675f64bdd04cad4dc6254b9970d991).
Wherever appropriate, credit is given to author as a comment in specific file.

## Author

Francesc Brugarolas, [repo](https://github.com/fcesc-code/)\
\
Latest update: September 2021
