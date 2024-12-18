# Landing Page for Official Website 5DS  

## Description  
Ce projet est une landing page officielle pour le site web de l'organisation 5DS. Il est développé avec les technologies **HTML**, **CSS**, **Bootstrap**, et **Angular 17**.  

## Prérequis  
Avant de commencer, assurez-vous d'avoir les outils suivants installés :  
- **Node.js** (version recommandée : 16+).  
- **Angular CLI** : Vous pouvez l'installer via la commande :  
  ```bash
  npm i -g @angular/cli@version
  ```
- Une connexion internet pour accéder aux ressources en ligne comme le CDN Bootstrap.


 
 ##  Étapes d'installation
 
- Installez l'Angular CLI globalement sur votre machine :
 ```bash
npm i -g @angular/cli@version
```
- Naviguez vers le dossier où vous souhaitez créer le projet Angular :
 ```bash
cd chemin/vers/votre/dossier
```
- Créez un nouveau projet Angular :
```bash
ng new nom-de-votre-projet-angular
```
- Entrez dans le dossier du projet nouvellement créé :
```bash
cd nom-de-votre-projet-angular
```
- Ouvrez le projet dans Visual Studio Code :
```bash
code .
```
- Intégrez Bootstrap dans le projet en ajoutant son lien CDN dans le fichier index.html :
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
- Retournez à l'invite de commande et créez les composants nécessaires pour votre landing page :

```bash
ng g c nom-du-composant
```



##   Usage (Guide d’utilisation)
Une fois le projet correctement installé, suivez ces étapes pour l'utiliser :

Lancez l'application avec la commande :
```bash
ng serve
```
Accédez à l'application dans votre navigateur via :
```bash
http://localhost:4200/
```
Pour arrêter le serveur ou installer d'autres bibliothèques, utilisez :
```bash
ctrl + c
```


##  Structure du Projet
Voici une structure de base pour le projet :

├── src/                      # Code source principal  
│   ├── app/                  # Composants et modules Angular  
│   ├── assets/               # Ressources statiques (images, CSS, etc.)  
│   ├── index.html            # Fichier principal pour intégrer Bootstrap  
├── angular.json              # Fichier de configuration Angular  
├── package.json              # Dépendances et scripts du projet   
└── README.md                 # Documentation principale 


##  Démonstration
- Vous pouvez voir une version en ligne du projet ici :
Landing Page (5DS) sur Netlify : https://lucent-pie-021af5.netlify.app/home


## Contribuer
Si vous souhaitez contribuer, suivez ces étapes :
1. Forkez le dépôt.
2. Clonez votre fork localement.
3. Faites vos modifications et soumettez une pull request.


