//array localStorage
let episodeChosen=[];
//get the id dans l'URL
let valueId=new URLSearchParams(document.location.search);
let idSerie= valueId.get('id');

//get the elements HTML
let image=document.getElementById("img_principal");
let gender=document.getElementById('gender');
let title=document.getElementById('title');
let creator=document.getElementById('creator');
let seasons=document.getElementById('seasons');




//fetch to get tvshow information
    let keyApi= "f33cd318f5135dba306176c13104506a";
    window.fetch( `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${keyApi}&language=en-US`)
          
            
        
    // Première fonction : s'occupe d'analyser la réponse HTTP (gestion des erreurs etc.)
            .then(function(httpResponse)
            {
                // Demande à récupérer les données de la réponse HTTP en JSON.
                
                return httpResponse.json();
            })
    // Deuxième fonction : s'occupe de traiter les données de la réponse HTTP
            .then(function (resultat){
                let tvShow=resultat;
                title.innerText=tvShow.original_name;
                image.src=`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`;
                tvShow.created_by.forEach(element => {
                    creator.innerText += `${element.name} -  `
                });
                tvShow.genres.forEach(element => {
                    gender.innerText += `${element.name} -  `
                });
                let season=tvShow.number_of_seasons;
                //show every season
                for(let i=1; i<=season;i++){
                    console.log(i);
                    window.fetch( `https://api.themoviedb.org/3/tv/${idSerie}/season/${i}?api_key=${keyApi}&language=en-US`)
                    .then(function(reponse){
                        return reponse.json();
                    })
                    .then (function(resultat){
                        console.log(resultat);
                        seasons.innerHTML+=`<p class="season" data-idseason="season_${resultat.season_number}">${resultat.name}</p>`
                                           
                        for(let j=0;j<resultat.episodes.length;j++){
                            
                            
                            seasons.innerHTML+=` 
                            <div class="season_${resultat.season_number}">
                            <input type="checkbox" id="s_${resultat.season_number}e_${resultat.episodes[j].episode_number}" name="">
                            <label  for="s_${resultat.season_number}e_${resultat.episodes[j].episode_number}">${resultat.episodes[j].name}</label>
                          </div>
                          
                            `;
                            
                        
                        }
                        //create the functions hide and show the episodes in all the paragraphs
                        let paragraphs=document.querySelectorAll('.season');
                        console.log(paragraphs);
                        paragraphs.forEach((paragraph)=>{
                            paragraph.addEventListener("click",hideShow);
                        })

                        //get all the checkbox and create the function to chose
                        let allEpisodes=document.querySelectorAll('input');
                        console.log(allEpisodes);
                        allEpisodes.forEach((episode)=>{
                            episode.addEventListener("click",addDeleteArrayEpisode);
                        })

                        //load the local storage
                        if(JSON.parse(localStorage.getItem("serie_id")) == idSerie){

                            //getting the localStorage values
                            episodeChosen=JSON.parse(localStorage.getItem("episodes"));
                            loadLocalStorage(allEpisodes);
                        }else{
                            localStorage.setItem("serie_id",idSerie);
                            let episodeChosen=[];
                            localStorage.setItem("episodes", JSON.stringify(episodeChosen));
                        }

                    })
                    
                }
            });

//function to hide and show episodes
function hideShow(e){
    let id=e.currentTarget.dataset.idseason;
    let episodesSeason=document.querySelectorAll(`.${id}`);
    episodesSeason.forEach((episode)=>{
        if(episode.style.display=="none"){
            
            episode.style.display="block";
        }else{
         
            episode.style.display="none";
        }

    })
   
    
}

//function addDelete from episodeChosen array

function addDeleteArrayEpisode(e){
    let currentCheckBox =e.currentTarget.getAttribute('id');
    if(episodeChosen.includes(currentCheckBox)){
        let index=episodeChosen.indexOf(currentCheckBox);
        if(index !=-1){
            episodeChosen.splice(index,1);
        }
    }else{
        episodeChosen.push(currentCheckBox);
    }
    //save to localstorage the series's id
    localStorage.setItem("serie_id",idSerie);

    //save to localStorage the array that includes all the chosen episodes
    localStorage.setItem("episodes", JSON.stringify(episodeChosen));
    console.log(episodeChosen);
}

//function loadLocalStorage 
function loadLocalStorage(allInputs){
    let localStorageEpisodes=JSON.parse(localStorage.getItem("episodes"));
     for(let i=0;i<allInputs.length;i++){
         for (let j = 0; j < localStorageEpisodes.length; j++) {
             if(allInputs[i].getAttribute('id')==localStorageEpisodes[j]){
                allInputs[i].setAttribute("checked","true");

             }
             
         }
     }

    console.log(localStorageEpisodes);
    console.log(allInputs);

}