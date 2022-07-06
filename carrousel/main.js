"use strict";
/*
 * L'objectif de l'exercice est de réaliser un diaporama de photos qui s'affichent les
 * unes après les autres, toutes les 5 secondes. Puis ensuite de revenir à la première
 * photo et de recommencer, à l'infini. C'est ce qu'on appelle un carousel de photos.
 */

// ---- VARIABLES ET CONSTANTES GLOBALES
const delayCaroussel = 1000;
let currentPhoto;       // Numéro de la photo courant affichée (indice dans le tableau ci-dessous)
let photos;// Tableau d'objets DOM représentant les balises <img>
let timer;
let btnPlay=document.getElementById('btn_play');  //obtenir la position du button play
let btnPause=document.getElementById('btn_pause');//obtenir la position du button pause
let btnPrevious=document.getElementById('btn_previous');//obtenir la position du button previous
let btnNext=document.getElementById('btn_next');//obtenir la position du button next
let btnRandom=document.getElementById('btn_random'); //obtenir la position du button random
//let multipleTimes =true; //variable pour ne pas permettre l'usager à clicquer plusieurs fois






// ---- FONCTIONS
function init() {
    photos = document.querySelectorAll('#diaporama > img');
    console.log(photos);
    currentPhoto = 1;
    timer =window.setInterval(next, delayCaroussel);



}

function next() {
    photos[currentPhoto - 1].classList.remove('visible');
    currentPhoto++;
    console.log(currentPhoto);
    if (currentPhoto > photos.length) {
        currentPhoto = 1;

    }
    photos[currentPhoto - 1].classList.add('visible');

}

/**
 * function pour redémarrer le diaporama
 */
function playDiaporama(){
    //timer =window.setInterval(next, delayCaroussel);
    if (timer==null){
        init();
        //multipleTimes=false;
    }
    
}
/**
 * function pour arrêter le diaporama
 */
function pauseDiaporama(){
    clearInterval(timer);
    timer=null;
    //multipleTimes=true;
}
/**
 * function pour passer à la photo précédente 
 * 
 */
function previousDiaporama(){
    photos[currentPhoto - 1].classList.remove('visible');
    currentPhoto--;
   // multipleTimes=true;
    if(currentPhoto<1){
        currentPhoto=photos.length;
        photos[currentPhoto - 1].classList.add('visible');
        
    }else{
        photos[currentPhoto - 1].classList.add('visible');
      
    }
    
    
}
/**
 * 
 * function pour passer à la photo suivante
 */
function nextDiaporama(){
    console.log(currentPhoto);
    photos[currentPhoto - 1].classList.remove('visible');
    currentPhoto++;
    //multipleTimes=true;
    //console.log(currentPhoto);
    if(currentPhoto>photos.length){
        currentPhoto=1;
        photos[currentPhoto - 1].classList.add('visible');
        
    }else{
        photos[currentPhoto - 1].classList.add('visible');
        
    }
    
    
}

function randomPhoto(){
    photos[currentPhoto - 1].classList.remove('visible');
    currentPhoto=Math.floor(Math.random() * photos.length)+1;
    console.log(currentPhoto);
    photos[currentPhoto-1].classList.add('visible');
    //console.log(Math.floor(Math.random() * photos.length)+1);
}


// ---- CODE PRINCIPAL
window.addEventListener('DOMContentLoaded', init)
btnPlay.addEventListener("click", playDiaporama); //ajouter l'evenement au button play
btnPause.addEventListener("click", pauseDiaporama);//ajouter l'evenement au button pause
btnPrevious.addEventListener("click", previousDiaporama);//ajouter l'evenement au button previous
btnNext.addEventListener("click", nextDiaporama);//ajouter l'evenement au button next
btnRandom.addEventListener("click",randomPhoto);
