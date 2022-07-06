// ------- FONCTIONS

function onClickItem(event)
{
   
  let currentItem=event.currentTarget;
    currentItem.classList.toggle('selected');
    liste=document.querySelectorAll('.selected');
    paragraphe.textContent=`${liste.length} fichier(s) sélectionné(s)`;

 
    
    
    /*
     * event.currentTarget représente la balise qui a déclenché l'évènement
     * sur lequel on a installé le gestionnaire d'évènement de clic.
     */

    // 1- Récupération du fichier (le <li>) qui a déclenché l'évènement.
    // 2- Activation ou désactivation de la classe CSS de sélection.
    // 3- Recherche de tous les éléments sélectionnés.
    // 4- Mise à jour du message indiquant le nombre de fichiers sélectionnés.
}


// ------- CODE PRINCIPAL -------

// 1- Recherche de tous les <li> de la liste de fichiers.
let liste=document.querySelectorAll('li');
// 2- Recherche du paragraphe <p> affichant le nombre d'éléments sélectionnés.
let paragraphe=document.querySelector('p');
// 3- Boucle sur la liste de fichiers pour installer un gestionnaire d'évènement de clic (fonction onClickItem).
for(let i=0; i<liste.length;i++){
    
    liste[i].addEventListener("click", onClickItem);
}