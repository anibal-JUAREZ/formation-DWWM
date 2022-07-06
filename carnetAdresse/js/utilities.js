// --- Fonctions utilitaires

// 1) Fonction pour récupérer la saisie du formulaire
function getFormFieldValue(selector) {
    // Je récupère l'input qui correspond au selecteur CSS passé en paramètre
    let input = document.querySelector(selector);
    // J'extrait la valeur de ce champ de formulaire
    let valeur = input.value;
    // Je retourne la valeur
    return valeur;

    // En 1 ligne
    // return document.querySelector(selector).value
}

function setFormFieldValue(selector, value) {
    // Je récupère l'input qui correspond au selecteur CSS passé en paramètre
    let input = document.querySelector(selector);
    input.value = value;
}

// 2) Fonction pour sauvegarder dans le local storage
function saveToLocalStorage(name, addressBook) {
    // Transformation de notre carnet d'adresses en chaîne de caractères JSON
    let addressBookJSON = JSON.stringify(addressBook);
    // Ajout de notre carnet d'adresses "stringifié" au local Storage
    localStorage.setItem(name, addressBookJSON);

    // En une ligne
    // localStorage.setItem(name, JSON.stringify(addressBook));
}

function loadFromLocalStorage (name) {
    // Récupération du tableau rangé dans le local Storage (sous forme d'objet JSON)
    let objectJSON = localStorage.getItem(name);
    // "Déstringification" de notre tableau de contacts
    let object = JSON.parse(objectJSON);
    // La fonction renvoie le tableau de contacts
    return object;

    // En 1 ligne
    // return JSON.parse(localStorage.getItem(name));
}