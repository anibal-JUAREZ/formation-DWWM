// Liste des touches du clavier.
const TOUCHE_BAS    = 40;
const TOUCHE_DROITE = 39;
const TOUCHE_GAUCHE = 37;
const TOUCHE_HAUT   = 38;

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#value_of_keycode


function onClickButton()
{
    // Changer la couleur du rectangle lorsqu'on clique sur le bouton (regarder le CSS).
    const rectangle = document.getElementById('rectangle');

    rectangle.classList.toggle('autre-couleur');
}

function onKeyDown(event)
{
    // Les gestionnaires d'évènements reçoivent un objet event avec les informations sur ce qu'il s'est passé.

    // Par exemple pour les souris : https://developer.mozilla.org/fr/docs/Web/API/MouseEvent
    // Dans notre cas c'est pour le clavier : https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent


    // 1- Rechercher le rectangle.

// Recherche : il est possible de manipuler le style CSS d'une balise avec la propriété .style
// Exemple 1 : rectangle.style.width = '600px' va passer le rectangle à 600 pixels de largeur
// <div id="rectangle" style="width: 600px;"></div>
//
// Exemple 2 : rectangle.style.backgroundColor = '#FF0000' va passer le rectangle à la couleur de fond rouge
// <div id="rectangle" style="background-color: #FF0000"></div>
// Par conséquent on peut lire et modifier en JavaScript les propriétés CSS left et top du rectangle (lignes 11 et 13 du fichier CSS)


    // 2- Gérer les 4 touches du clavier fléchées pour déplacer en pixels le rectangle, en utilisant la propriété CSS left ou top.

// Recherche : trouver dans l'objet event la propriété qui donne le numéro de touche de clavier
// Pour regarder dans l'objet, utiliser console.log


    // 2-1 Pour chaque touche il faut récupérer la position avec https://developer.mozilla.org/fr/docs/Web/API/Window/getComputedStyle
    // 2-2 Il faut ajouter ou soustraire à chaque fois quelques pixels supplémentaires, en utilisant la propriété DOM style du rectangle.
}


// 1- Rechercher le bouton
const button = document.getElementById('changement-couleur');

// 2- Installer un gestionnaire d'évènements clic dessus, qui emmène vers onClickButton
button.addEventListener('click', onClickButton);

// 3- Installer un gestionnaire d'évènements sur toute la page, pour détecter les touches du clavier

// Toute la page = la variable document (la balise <html>)
document.addEventListener('keydown', onKeyDown);