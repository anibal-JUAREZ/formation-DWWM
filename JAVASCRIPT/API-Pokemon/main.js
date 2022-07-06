/*
 * L'objectif de l'exercice est de se connecter à un serveur à distance (ce qu'on
 * appelle une API) en HTTP GET, et de récupérer une liste d'utilisateurs et une 
 * liste de tâches qui leur sont attribuées.
 * Ces données sont dans un format brut, en JSON. Il faut donc construire 
 * l'affichage final HTML en se basant sur ces données, dans la balise <ul> : chaque
 * entrée dans la liste représente une tâche, avec les informations sur la tâche et
 * sur l'utilisateur qui doit effectuer la tâche en question.
 * 
 * La documentation pour se connecter au serveur à distance :
 * https://jsonplaceholder.typicode.com/
 * Se servir de l'exemple de la documentation pour tester l'API et comprendre ce qu'elle renvoie.
 */

// ---- VARIABLES ET CONSTANTES GLOBALES

let users;      // Le tableau des utilisateurs
let toDoList=document.getElementById("todo-list");
let img=document.getElementById("img-pokemon");

// ---- FONCTIONS
function showList(liste){
    toDoList.innerHTML="";
    for(let i=0;i<liste.length;i++){
        //const todoItem=liste[i];
        let pokemonUrl=liste[i].url;
        window.fetch(pokemonUrl)
    // Première fonction : s'occupe d'analyser la réponse HTTP (gestion des erreurs etc.)
    .then(function(httpResponse)
    {
        // Demande à récupérer les données de la réponse HTTP en JSON.
        return httpResponse.json();
    })
    // Deuxième fonction : s'occupe de traiter les données de la réponse HTTP
    .then(function(result) // results = les données JSON, grâce au httpResponse.json() ci-dessus
    {   
        let pokemon=result;
      
        toDoList.innerHTML += `<li>${pokemon.name}
        <img src="${pokemon.sprites.front_default}" alt="">
        </li>`;
        
    });
       
        
    }
}


// ---- CODE PRINCIPAL

// Au départ il n'y a pas d'utilisateurs connus.
users = [];

// Utilisation de window.fetch() pour effectuer des requêtes HTTP.
// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

/* 
window.fetch("https://jsonplaceholder.typicode.com/todos")
    // Première fonction : s'occupe d'analyser la réponse HTTP (gestion des erreurs etc.)
    .then(function(httpResponse)
    {
        // Demande à récupérer les données de la réponse HTTP en JSON.
        return httpResponse.json();
    })
    // Deuxième fonction : s'occupe de traiter les données de la réponse HTTP
    .then(function(results) // results = les données JSON, grâce au httpResponse.json() ci-dessus
    {   
        console.log(results);
        showList(results);
        
    }); */

    window.fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    // Première fonction : s'occupe d'analyser la réponse HTTP (gestion des erreurs etc.)
    .then(function(httpResponse)
    {
        // Demande à récupérer les données de la réponse HTTP en JSON.
        return httpResponse.json();
    })
    // Deuxième fonction : s'occupe de traiter les données de la réponse HTTP
    .then(function(results) // results = les données JSON, grâce au httpResponse.json() ci-dessus
    {   
       
        showList(results.results);
        
    });