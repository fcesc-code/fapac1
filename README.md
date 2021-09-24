
## Purpose
The aim of this PAC1 is to create a small site and complete basic exercises, as part of a University 
[Web apps and sites development Master](https://estudis.uoc.edu/ca/masters-universitaris/desenvolupament-llocs-aplicacions-web/presentacio) 
by [Universitat Oberta de Catalunya](http://uoc.edu). \
Subject: Advanced Frameworks. September 2021.

## Repo
A Git repository can be found at https://github.com/fcesc-code/fapac1.git
The backend counterpart can be found at (tbd)

## Tech stack
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
- Paradigms: Object-Oriented, Reactive

## Content

- [Pexels](https://www.pexels.com/)

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

## Development server
Run _ng serve_ for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
Alternatively, run _npm start_.

## Build
Run _ng build_ to build the project. The build artifacts will be stored in the dist/ directory. Use the _-prod_ flag for a production build.

## Running unit tests
Run _ng test_ to execute the unit tests via Karma.
Option _npm run testAuto_ is given for GitHub Actions.

## Running end-to-end tests
Run _ng e2e_ to execute the end-to-end tests via Protractor. Before running the tests make sure you are serving the app via ng serve.

## Next steps
1. Implement continuous deployment.

## Releases
v0.0.1 Planned - 1st October 2021

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
