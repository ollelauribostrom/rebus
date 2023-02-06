# Rebus

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Build Status](https://travis-ci.org/ollelauribostrom/rebus.svg?branch=master)](https://travis-ci.org/ollelauribostrom/rebus)
[![Coverage Status](https://coveralls.io/repos/github/ollelauribostrom/rebus/badge.svg?branch=master)](https://coveralls.io/github/ollelauribostrom/rebus?branch=master)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/rebus-contributors/Lobby)
[![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](https://www.firsttimersonly.com/) 

Contribuer pour la première fois à un projet open source peut être effrayant. Le but de ce référentiel est de vous aider à faire vos premiers pas en tant que contributeur open source en développant ensemble un jeu de rebus simple (mais espérons-le amusant) 💖

#### Essayez la version en direct du jeu : https://ollelauribostrom.github.io/rebus/

## Qui peut contribuer?

Tout le monde peut ! (et je veux dire tout le monde) 💫

💻 **Vous n'avez pas à contribuer que du code**. Ajoutez un nouveau rebus, corrigez une faute d'orthographe, signalez un bug, ajoutez de la documentation, faites une refonte ou ajoutez une traduction. Ce projet, tout comme la plupart des projets open source, a besoin de toutes sortes de contributions différentes. Pas seulement du code.

🌟 **Vous êtes assez bon**. Commencez facilement en corrigeant quelque chose de petit (comme ajouter un nouveau rebus). Cela vous aidera à vous orienter dans le projet et à augmenter votre confiance et votre expérience. Personne ne vous jugera si vous faites une erreur, et vous ne pouvez rien casser ! Demandez des indications si vous vous bloquez. Tu peux le faire!

➡️ Jetez un coup d'œil aux[problèmes ouverts](https://github.com/ollelauribostrom/rebus/issues) pour voir ce qui doit être fait dans ce projet.

Le seul prérequis pour commencer est git. Assurez-vous de l'avoir installé sur votre ordinateur en exécutant git --version dans votre terminal. Si vous n'avez pas git installé, , [installez le](https://help.github.com/articles/set-up-git/).

Si vous êtes un développeur expérimenté, consultez le fichier  [CONTRIBUTING file](https://github.com/ollelauribostrom/rebus/blob/master/.github/CONTRIBUTING.md) pour voir comment vous pouvez contribuer.

## Pourquoi contribuer à l'open source?

Lorsque vous contribuez à l'Open Source, vous participez à l'effort collaboratif d'une vaste communauté de développeurs passionnés et de contributeurs! Le logiciel Open Source vous permet de voir, utiliser et, plus important encore, de modifier son code source. Contribuer à l'Open Source est un excellent moyen de développer une compréhension plus approfondie du logiciel, et le meilleur, c'est d'apprendre et d'enseigner avec une communauté de contributeurs.

## Comment contribuer

Suivez ce guide étape par étape pour effectuer votre première contribution au code source ouvert. Les étapes que vous effectuerez dans ce guide sont un flux de travail assez standard que vous rencontrerez dans la plupart des projets: `Fork -> Clone -> Installer les dépendances -> Apporter vos modifications -> Exécuter les tests -> Commit -> PR`

### 1. Fork

La première étape consiste à créer une fourchette de ce dépôt. Faites-le en cliquant sur le bouton de fourchette en haut de cette page. Une fourchette est en quelque sorte votre propre copie de travail de ce dépôt.

<img src=".github/fork.png" alt="Forking the repo" />

### 2. Clone

La prochaine étape consiste à cloner le dépôt forké sur votre machine.

Rendez-vous dans vos référentiels GitHub et ouvrez le dépôt forké appelé Rebus (forké de ollelauribostrom/rebus). Cliquez sur le bouton "Cloner ou télécharger" et cliquez ensuite sur l'icône de copie dans le presse-papiers pour obtenir votre url.

<img align="right" width="300" src=".github/clone.png" alt="Cloning the repo" />

Finalement exécuter les commandes git suivantes sur votre terminal:

```sh
git clone "url copié"
```

Par exemple:

```
git clone https://github.com/username/rebus.git
```

### 3. Enregistrer le dépôt distant

Vous avez maintenant créé un clone local sur votre ordinateur. Ce clone pointera vers votre dépôt forké. Il est également utile d'avoir le dépôt distant (la source que vous avez forké) enregistré également pour être en mesure de rester à jour avec les derniers changements.

Si ce n'est pas déjà fait, commencez par changer votre répertoire pour le dépôt rebus qui a été créé lorsque vous avez exécuté la commande `git clone`

```sh
cd rebus
```

Ensuite ajoutez `ollelauribostrom/rebus` comme dépôt distant:

```
git remote add upstream https://github.com/ollelauribostrom/rebus.git
```

### 4. Créer une branche

Il est courant de créer une nouvelle branche pour chaque nouvelle fonctionnalité ou correction de bogue sur laquelle vous travaillez. Allez-y et créez-en une !

Tout d'abord, vérifiez que vous avez la dernière version du dépôt distant en exécutant (faites-le avant chaque création de branche) 

```sh
git fetch upstream
```

Créez votre nouvelle branche en exécutant:

```sh
git checkout -b <nouvelle-branche> upstream/master
```

> A noter: Remplacez `<nouvelle-branche>` avec quelque chose qui décrit les changements que vous êtes sur le point d'effectuer.

Par exemple:

```sh
git checkout -b add-new-rebus upstream/master
```

> A noter: En spécifiant `upstream/master` nous disons que notre nouvelle branche doit être créée à partir de la dernière version upstream.

### 5. Installer les dépendances

Avant de commencer à faire vos changements, installez les dépendances du projet :

```sh
npm install
```

### 6. Faire vos changements

Maintenant, il est temps de faire vos changements. Ajoutez un nouveau rébus au jeu.

1. Ouvrir le fichier `src/js/rebuses.js` avec votre éditeur favoris(VScode préférable 😉).
2. Ajoutez un nouvel objet rebus à la fin du tableau `rebuses`.
3. Enregistrez le fichier après avoir fini.

### 7. Exécuter le jeu localement

Vous pouvez exécuter le jeu localement pour tester vos changements:

```sh
npm start
```

### 8. Exécuter les tests

Avant de faire un commit exécuter les tests pour s'assurer que vous n'avez rien cassé:

```sh
npm run test:all
```

### 9. Enregistrez vos changements

Exécutez `git status` pour voir les changements effectués. Cela ressemble à quelque chose commme:

<img width="300" src=".github/status.png" alt="Git status" />

Ajoutez ces changements à votre prochain commit en exécutant:

```sh
git add src/js/rebuses.js
```

Et ensuite faire le commit en exécutant:

```sh
git commit -m "votre message"
```

For example:

```sh
git commit -m "Ajout d'un nouveau rebus"
```

### 10. Poussez vos changements sur Github

Poussez vos modifications sur Github en exécutant la commande:

```sh
git push origin <nouvelle-branche>
```

> A noter: Remplacez `<nouvelle branche>` par le nom de votre branche.

### 11. Ouvrir une Pull Request

Rendez-vous sur votre dépôt sur GitHub et cliquez sur le bouton vert "Compare and pull request".

<img src=".github/pr.png" alt="Compare and pull request" />

Décrivez vos modifications et soumettez votre Pull Request

<img src=".github/pr2.png" alt="Submit pull request" />

## La suite?

🎉 CFélictations 🎉

Vous venez de faire votre premier pas en tant que contributeur open source. Votre pull request sera examinée dès que possible.
Rejoignez-nous sur [gitter](https://gitter.im/rebus-contributors/Lobby) si vous avez des questions ou si vous avez besoin d'aide. Si vous en avez envie de donner une étoile à ce dépôt. ⭐.

Si vous voulez travailler sur quelque chose de plus, regardez à [the open issues](https://github.com/ollelauribostrom/rebus/issues) pour
l'inspiration. Jetez également un coup d'œil à la section [Further Reading](https://github.com/ollelauribostrom/rebus#further-reading) pour d'autres excellentes ressources d'apprentissage.

## FAQ

### Résoudre les conflits de merge ###

Une fois que les changements ont été validés et mis en page, il est temps de gérer les conflits en exécutant la commande suivante: 

```sh
git pull upstream master
```

Revenez à votre éditeur de code préféré et examinez les conflits éventuels. En général les changements courants (`current`) sont surlignés d'une couleur et les  changements "à venir"  (`incoming`) sont surlignés d'une autre couleur. `Acceptez` les `current` ou `incoming` modifications.  

Validez à nouveau les changements comme indiqué aux étapes #9 et #10 ci-dessus ou en exécutant: 

```sh
git add -A
```
```sh
git commit -m "Votre message"
```
```sh
git push origin <nouvelle-branche>
```

### Linebreaks ###

Il est important de noter que les systèmes d'exploitation Windows et Linux traitent les fins de ligne différemment. Si vous obtenez une erreur lorsque le programme s'attend à ce que les sauts de ligne soient "lf", mais qu'il trouve des styles de saut de ligne "crlf",

<img src=".github/linebreak-error.png" alt="Terminal linebreak error" />

alors vous pouvez exécuter la commande suivante dans votre terminal:

```sh
npm run lint -- --fix 
```

Pour éviter ce problème à l'avenir, vous pouvez modifier votre éditeur afin d'utiliser la séquence de fin de ligne "lf". Pour ce faire, dans Visual Studio Code, cliquez simplement sur le bouton lf/crlf en bas à droite, puis sélectionnez "lf" dans le menu déroulant qui apparaît.

<img src=".github/vsc-endline.png" alt="Visual Studio Code linebreaks" />

## Further Reading

- [GitHub Open Source Guide](https://opensource.guide/)
- [Resource To learn Git](https://try.github.io/)
- [Git Tutorial Part 1: What is Version Control?](https://www.youtube.com/watch?v=9GKpbI1siow&feature=youtu.be)
- [Git Tutorial Part 2: Vocab (Repo, Staging, Commit, Push, Pull)](https://www.youtube.com/watch?v=n-p1RUmdl9M)
- [Git Tutorial Part 3: Installation, Command-line & Clone](https://www.youtube.com/watch?v=UFEby2zo-9E)
- [Git Tutorial Part 4: GitHub (Pushing to a Server)](https://www.youtube.com/watch?v=ol_UCWox9kc)
- [Git & GitHub Crash Course For Beginners](https://www.youtube.com/watch?v=SWYqp7iY_Tc)
- [Git Magic](http://www-cs-students.stanford.edu/~blynn/gitmagic/index.html)
- [Friendly Beginner Repos](https://github.com/MunGell/awesome-for-beginners)
- [GitHub Endorsed Beginning Contributer Repos](https://github.com/showcases/great-for-new-contributors)
- [Sourcetree - Git GUI for macOS and Windows](https://www.sourcetreeapp.com/)
- [VS Code - extensible code editor](https://code.visualstudio.com/)
- [GitHub Atom - Hackable Text Editor for the 21st Century](https://atom.io/)

## Support

S'il vous plaît [ouvrir une issue](https://github.com/ollelauribostrom/rebus/issues/new) pour support, ou nous joindre sur [gitter](https://gitter.im/rebus-contributors/Lobby).

## Code de conduite

Ce projet adhère au [JS Foundation Code of Conduct](https://js.foundation/community/code-of-conduct). Veuillez lire le texte dans son intégralité afin de comprendre quelles actions seront et ne seront pas tolérées. 

## Licence

Sous licence MIT.
