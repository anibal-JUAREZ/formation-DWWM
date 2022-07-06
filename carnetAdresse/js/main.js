// --- Constantes et variables globales
const ADDRESS_BOOK = "addressBook";
// Objets DOM.
let buttonSaveContact = document.querySelector("#save-contact");
let buttonDelete = document.querySelector("#delete-address-book");

// Le carnet d'adresses (tableau d'objets représentant chacun un contact).
let contacts = new Array();

// --- Fonctions du carnet d'adresses

/* Etape Intermédiaire */

// 1) Fonction qui permet d'ajouter un contact à notre carnet d'adresses

function createContact(prenom, nom, tel, mail) {
    let contact = {
        firstName: prenom,
        lastName: nom,
        tel: tel,
        email: mail
    };
    contacts.push(contact);
}

function editContact(index, prenom, nom, tel, mail) {
    let contact = {
        firstName: prenom,
        lastName: nom,
        tel: tel,
        email: mail
    };

    contacts.splice(index, 1, contact);
}

// 2) Fonction refresh
function refresh() {
    // récupérer en Javascript le carnet d'adresses
    let liste = document.querySelector("ul");
    // Vider la liste
    liste.innerHTML = '';
    // Pour chaque contact de notre tableau Javascript contacts
    for (let i = 0; i < contacts.length; i++) {
        // J'ajoute au HTML de mon carnet d'adresses un nouveau li, qui contient les informations du contact
        liste.innerHTML += `
        <li class="card">
                <div class="card-body">
                    <i class="fa-solid fa-edit edit-contact" data-index="${i}"></i>
                    <h5>${contacts[i].lastName} ${contacts[i].firstName}</h5>
                    <p class="card-text">${contacts[i].tel}</p>
                    <p class="card-text">${contacts[i].email}</p>
                </div>
            </li>
        `;
    }

    let editIcons = document.querySelectorAll(".edit-contact");
    for (let i = 0; i < editIcons.length; i++) {
        let icon = editIcons[i];
        icon.addEventListener("click", editMode);
    }
}

function editMode(event) {
    // Récupérer la cible de l'évènement
    let clickedIcon = event.currentTarget;
    // Récupérer l'attribut data "index" de cette cible
    let index = clickedIcon.dataset.index;
    // let index = clickedIcon.getAttribute("data-index");

    setFormFieldValue("#lastName", contacts[index].lastName);
    setFormFieldValue("#firstName", contacts[index].firstName);
    setFormFieldValue("#email", contacts[index].email);
    setFormFieldValue("#tel", contacts[index].tel);

    buttonSaveContact.dataset.mode ="edit";
    // buttonSaveContact.setAttribute("data-mode", "edit");

    buttonSaveContact.dataset.index = index;
    // buttonSaveContact.setAttribute("data-index", index);
}

// 3) Fonction de sauvegarde de contact (déclenchée au clic)
function saveContact(){
    // récupérer les valeurs du formulaire
    let prenom = getFormFieldValue("#firstName");
    let nom = getFormFieldValue("#lastName");
    let tel = getFormFieldValue("#tel");
    let email = getFormFieldValue("#email");


    if (buttonSaveContact.dataset.mode == "add"){
        // créer un nouveau contact
        createContact(prenom, nom, tel, email);

    }
    else {
        editContact(buttonSaveContact.dataset.index ,prenom, nom, tel, email);
        buttonSaveContact.dataset.mode ="add";
    }

    // Sauvegarde le contact dans le local storage
    saveToLocalStorage(ADDRESS_BOOK, contacts);

    // mettre à jour le HTML
    refresh();

    // réinitialiser le formulaire
    document.querySelector("#contact-form").reset();
}

function deleteAddressBook() {
    if(window.confirm("Êtes vous sur de vouloir supprimer votre carnet d'adresses ?")){
        // vider la liste de contacts
    contacts = [];
    // sauvegarder cette modification dans le local Storage
    saveToLocalStorage(ADDRESS_BOOK, contacts);
    // rafraichir l'affichage HTML
    refresh();
    }
    
}

// --- Code principal.
// Si le carnet d'adresse n'existe pas dans le local storage
if (loadFromLocalStorage(ADDRESS_BOOK) == null) {
    // créer une liste vide
    contacts = new Array();
    //sinon
} else {
    // récupérer les contacts depuis le local Storage dans notre tableau JS
    contacts = loadFromLocalStorage(ADDRESS_BOOK);
    // Mettre à jour l'affichage HTML
    refresh();
}

// ajout de l'écouteur d'évenements
buttonSaveContact.addEventListener("click", saveContact);
buttonDelete.addEventListener("click", deleteAddressBook);