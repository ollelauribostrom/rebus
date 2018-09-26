# Contributing to sverigesradio

## Contribution process overview

1. Create your own fork of this project.
2. Create a feature branch.
3. Make your changes.
4. Run testing `npm test`.
5. Run linting `npm run lint`.
6. Push changes to your fork/branch.
7. Create pull request.
8. Code review and automated testing.
9. Merge into master.

### 1. Fork

1. Click the fork button up top.
2. Clone your fork locally (Notice that git's `origin` reference will point to your forked repository).
3. It is useful to have the upstream repository registered as well using: `git remote add upstream https://github.com/ollelauribostrom/sverigesradio.git` and periodically fetch it using `git fetch upstream`.

### 2. Create feature branch

Create and switch to new feature branch: `git checkout -b {branch_name} upstream/master`  
(replace `{branch_name}` with a meaningful name that describes your feature or change).

### 3. Make changes

1. Now that you have a new branch you can edit/create/delete files.
2. Use touch-up commits with main one (squash) -- the `git commit --amend` can be used for that. (You may use git force push after that).
3. Look at how to run your own local development copy [here](https://github.com/ollelauribostrom/sverigesradio/blob/master/README.md#running-your-own-local-development-copy).

### 4. Run testing

`npm run test`.

### 5. Run linting

`npm run lint`.

### 6. Push changes to your fork/branch

1. After lint and all tests pass, push the changes to your fork/branch on GitHub: `git push origin {branch_name}`.
2. For force push, which will destroy previous commits on the server, use `--force` (or `-f`) option.

### 7. Create pull request

Create a pull request on GitHub for your feature branch.
