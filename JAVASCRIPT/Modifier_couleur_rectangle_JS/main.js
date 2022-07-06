// Liste des touches du clavier.
const TOUCHE_BAS    = 40;
const TOUCHE_DROITE = 39;
const TOUCHE_GAUCHE = 37;
const TOUCHE_HAUT   = 38;
let positionX=0;
let positionY=0;
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#value_of_keycode


function onClickButton()
{
    // Changer la couleur du rectangle lorsqu'on clique sur le bouton (regarder le CSS).
    const rectangle = document.getElementById('rectangle');

    rectangle.classList.toggle('autre-couleur');
}

function onKeyDown(event)
{   
    let keyBoard=event.keyCode;
    console.log(keyBoard);
    let rectangle=document.getElementById('rectangle');
    console.log(keyBoard);
    switch (keyBoard){
        case TOUCHE_BAS:
            positionY++
            rectangle.style.top=`${positionY}px`;
            break;
        case TOUCHE_DROITE:
            positionX++;
            rectangle.style.left=`${positionX}px`;
            break;
        case TOUCHE_GAUCHE:
            positionX--;
            rectangle.style.left=`${positionX}px`;
            break;
        case TOUCHE_HAUT:
            positionY--;
            rectangle.style.top=`${positionY}px`;
            break;
    }

    // Les gestionnaires d'évènements reçoivent un objet event avec les informations sur ce qu'il s'est passé.

    // Par exemple pour les souris : https://developer.mozilla.org/fr/docs/Web/API/MouseEvent
    // Dans notre cas c'est pour le clavier : https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent

    // 1- Rechercher le rectangle.

    // 2- Gérer les 4 touches du clavier fléchées pour déplacer en pixels le rectangle, en utilisant la propriété CSS left ou top.
    // 2-1 Pour chaque touche il faut récupérer la position avec https://developer.mozilla.org/fr/docs/Web/API/Window/getComputedStyle
    // 2-2 Il faut ajouter ou soustraire à chaque fois quelques pixels supplémentaires, en utilisant la propriété DOM style du rectangle.
}


// 1- Rechercher le bouton
const button = document.getElementById('changement-couleur');

// 2- Installer un gestionnaire d'évènements clic dessus, qui emmène vers onClickButton
button.addEventListener('click', onClickButton);

// 3- Installer un gestionnaire d'évènements sur toute la page, pour détecter les touches du clavier
document.addEventListener('keydown', onKeyDown);