## Concept

Ce projet représente mon portfolio. En le consultant, vous trouverez toutes mes réalisations, pour un client ou dans le cadre de projets étudiants.

## Paramétrage

### Initialisation

- Lancer la commande `npm run setup` dès l'ouverture du projet.
- _Pour lancer le serveur backend, vous aurez besoin des variables d'environnement, renseignées avec les données relatives à la base de données. Vous trouverez un template dans `backend/.env.sample`_

### Commandes disponibles

- `setup` : Initialise le frontend et le backend, et installe tous les outils et packages nécessaires.
- `dev` : Démarre les serveurs (frontend + backend) dans un seul terminal.
- `dev-front` : Démarre le serveur frontend.
- `dev-back` : émarre le serveur backend.
- `fix` : Permet de fixer rapidement les erreurs trouvées par EsLint.

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
- _Prisma_ : Allows to create and update database scheme without tiping queries
`
