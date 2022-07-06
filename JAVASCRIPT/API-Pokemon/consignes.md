# A la découverte des APIS et de fetch

https://datascientest.com/api
https://developer.mozilla.org/fr/docs/Web/API/Fetch_API

Le but de l'exercice du jour va être de se connecter à une API grâce à fetch(AJAX), et dans un premier temps d'afficher dans notre HTML une liste de tâches à effectuer

https://jsonplaceholder.typicode.com/
(bien lire la documentation pour savoir comment s'en servir)

## Niveau 1

- écrire une fonction qui prend en paramètre une liste, et qui génère son affichage en HTML
- récupérer la liste des tâches, et lancer la fonction avec cette liste en paramètre

## Niveau 2

- Mettre en forme la liste
- Faire en sorte qu'il y ait une ligne qui indique si oui ou non une tâche a été effectuée
(Terminé ? Oui/Non)

## Niveau 3

- Il faut récupérer la liste des utilisateurs avant celle des tâches, et la stocker
- Créer une fonction qui accepte en paramètre un ID d'utilisateur, et qui retourne l'utilisateur qui correspond à cet ID
- Modifier notre fonction niveau 1, pour remplacer les id utilisateur par les informations des utilisateurs (nom, prenom, mail)