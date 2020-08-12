# Trackdéchets - Site Web

Ce dépôt contient les sources du site web de [Trackdéchets](https://trackdechets.beta.gouv.fr).

## Installation

1. Installer Node.js
2. Lancer la commande `npm install`
3. Démarrer l'application via la commande `npm start`

## Déploiement

Le site est automatiquement déployée comme une page GitHub (branche `gh-pages`) lorsqu'un nouveau commit est poussé sur la branche `master`.
Ce déploiement est effectué via une [action GitHub](./.github/workflows/deploy.yml).

Il est également possible de déployer manuellement avec les commandes suivantes :

```
npm run build
npm run deploy
```

## LICENCE

[MIT](./LICENSE)
