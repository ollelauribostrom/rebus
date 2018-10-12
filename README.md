# Rebus

[![Build Status](https://travis-ci.org/ollelauribostrom/rebus.svg?branch=master)](https://travis-ci.org/ollelauribostrom/rebus)
[![Coverage Status](https://coveralls.io/repos/github/ollelauribostrom/rebus/badge.svg?branch=master)](https://coveralls.io/github/ollelauribostrom/rebus?branch=master)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/rebus-contributors/Lobby)

Contributing to an open source project for the first time can be a scary thing. The goal of this repo is to help you take your first steps as an open source contributor by developing a simple (but hopefully fun) rebus game together. 💖

#### Try the live version of the game: https://ollelauribostrom.github.io/rebus/

## Who can contribute?

Everyone can! (and I mean everyone) 💫

💻 **You don’t have to contribute code**. Add a new rebus, fix a typo, report a bug, add some documentation, do some re-design or add a translation. This project just like most open source projects are in need of all sorts of different contributions. Not just code.

🌟 **You are good enough**. Start of easy by fixing something small (like adding a new rebus). This will help you orientate yourself in the project and increase your confidence and experience. No one will judge you if you make a mistake and you can't break anything. Ask for some pointers if you get stuck. You got this!

➡️ Have a look at the [open issues](https://github.com/ollelauribostrom/rebus/issues) to see what needs to be done in this project.

The only thing that is required to get started is git. Make sure you have it installed on your computer by running `git --version` in your terminal. If you do not have git installed, [install it](https://help.github.com/articles/set-up-git/).

## Fork this repo

The first step is to create a fork of this repo. Do so by clicking on the fork button on the top of this page. A fork is basically your own working copy of this repository.

![Forking the repo](.github/fork.png)

## Clone the repo

The next step is to clone the forked repo to your machine.

Go to your GitHub repositories and open the forked repository called Rebus (_forked from ollelauribostrom/rebus_). Then click on the "Clone or download" button and then click the copy to clipboard icon to get your url.

<img align="right" width="300" src=".github/clone.png" alt="Cloning the repo" />

Finally run the following git command in your terminal:

```sh
git clone "the copied url"
```

For example:

```
git clone https://github.com/username/rebus.git
```

## Register the upstream repository

You have now created a local clone on you computer. This clone will point to your forked repository. It's also useful to have
the upstream repository (the source that your forked) registered as well to be able to stay up to date with the latest changes.

If you haven't already, start by changing your directory to the rebus catalog that was created when you ran `git clone`:

```sh
cd rebus
```

Then add `ollelauribostrom/rebus` as the upstream remote:

```
git remote add upstream https://github.com/ollelauribostrom/rebus.git
```

## Create a branch

It's common practice to create a new branch for each new feature of bugfix you are working on. Let's go ahead and create one.

First, lets make sure we got the latest version of the upstream repository by running (do this before each time you create a new branch):

```sh
git fetch upstream
```

Create your new branch by running:

```sh
git checkout -b <your-new-branch-name> upstream/master
```

> Note 1: Replace `<your-new-branch-name>` with something that describes the changes you are about to make  
> Note 2: By specifying `upstream/master` we're saying that our new branch should be created from the latest upstream version

For example:

```sh
git checkout -b add-new-rebus upstream/master
```

## Installing the dependencies

Run

```sh
npm install
```

or

```sh
yarn install
```

from your terminal to install project dependencies

## Make your changes

Now it's time to make your changes. Let's add a new rebus to the game.

Open the file `src/js/rebuses.js` in your favourite editor (preferable VSCode 😉) and add a new rebus object to the end of the `rebuses` array. Save the file and then run `git status` to see which changes you have made. This will look something like:

<img align="right" width="300" src=".github/status.png" alt="Git status" />

To add these changes to your next commit, you can run:

```sh
git add src/js/rebuses.js
```

To commit your changes, run:

```sh
git commit -m "Your message"
```

For example:

```sh
git commit -m "Adding a new rebus"
```

## Running the game locally
 Run
 ```sh
npm run start
```
 or
 ```sh
yarn start
```
from your terminal to start game locally in development mode.

## Push your changes to Github

Push your changes to GitHub by running:

```sh
git push origin <your-new-branch-name>
```

> Note: Replace `<your-new-branch-name>` with the name of your branch

## Open a Pull Request

Head over to your repository on GitHub and click on the green "Compare and pull request" button.

![Compare and pull request](.github/pr.png)

Describe your changes and submit your pull request

![Submit pull request](.github/pr2.png)

## What's next?

🎉 Congratulations 🎉

You just took your first step as an open source contributor. Your pull request will be reviewed as soon as possible.
Join us on [gitter](https://gitter.im/rebus-contributors/Lobby) if you have questions or need any help. If you feel like
it, please give this repository a star ⭐.

If you want something more to work on, look at [the open issues](https://github.com/ollelauribostrom/rebus/issues) for
inspiration. Also, take a look the [Further Reading](https://github.com/ollelauribostrom/rebus#further-reading) section for more great learning resources.

## Further Reading

- [GitHub Open Source Guide](https://opensource.guide/)

## Support

Please [open an issue](https://github.com/ollelauribostrom/rebus/issues/new) for support, or join us on [gitter](https://gitter.im/rebus-contributors/Lobby).

## License

Licensed under the MIT License.
