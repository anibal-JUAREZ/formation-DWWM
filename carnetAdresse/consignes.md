# Projet carnet d'adresse

Nous allons réviser ce que nous savons déjà de Javascript à travers ce projet, et y ajouter quelques subtilités.
Ce document décrit une liste d'étapes pour arriver vers le résultat final, libre à vous de faire différemment.

## Etape 1: HTML

### Formulaire

Créer le formulaire HTML qui va nous permettre de créer des contacts. Nous aurons besoin:
- d'un nom
- d'un prénom
- d'un numéro de téléphone
- d'une adresse email

### Fiche de contact

Créer dans le HTML, à l'endroit prévu, une liste non ordonnée qui contiendra nos contacts

Pour l'exemple, créer une fiche de contact factice.

## Etape 2: Javascript utilitaires


### utilities.js

Pour se faciliter la tâche, nous allons créer dans notre fichier utilities.js des fonction qui nous serviront pour la suite.

- Une fonction qui acceptera pour paramètre un selecteur CSS sous forme de chaîne de caractère, et qui retournera l'attribut value de l'input correspondant au selecteur


## Etape 3: Javascript principal

### Mécanique de click

- Récupérer le bouton côté Javascript
- Ajouter un écouteur d'évènement à ce bouton, qui va déclencher une fonction qui servira à sauvegarder notre contact

### Fonction d'ajout de contact

Créer une fonction, qui prend en paramètre nos 4 propriétés, les range dans un objet contact, puis insère cet objet dans notre carnet d'adresses.


### Fonction refresh

Créer une fonction sans paramètres, qui va mettre à jour l'affichage HTML de notre carnet d'adresses:
- elle récupère notre liste HTML
- elle supprime le contenu de la liste
- Pour chaque élément de notre carnet d'adresses Javascript, la fonction va insérer dans le HTML de la liste un nouvel élément de liste qui contiendra les informations correspondantes

### Fonction sauvegarde

Créer une fonction sans paramètres, qui va:

- récupérer les valeurs saisies dans le formulaire
- créer un nouveau contact grâce à ces valeurs
- rafraichir l'affichage HTML
- réinitialiser le formulaire

## Local Storage ?

Pour préparer la suite, dans le fichier utilities:

- créer une fonction qui acceptera pour paramètre un nom (chaîne de caractères) et notre carnet d'adresses, et qui sauvegardera notre carnet d'adresses dans le local storage sous le nom qu'on lui a donné
https://www.alsacreations.com/article/lire/1402-web-storage-localstorage-sessionstorage.html