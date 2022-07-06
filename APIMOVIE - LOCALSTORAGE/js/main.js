let inputMovies=document.getElementById("input_movies");
let showMovies=document.getElementById("show_movies");
let threePoints;
inputMovies.value="";
function getMovies(){
    const keyApi= "f33cd318f5135dba306176c13104506a";
    let moviesSelection=inputMovies.value.toLowerCase();
    if(moviesSelection){
        if(moviesSelection.length>=3){
            window.fetch( `https://api.themoviedb.org/3/search/tv?api_key=${keyApi}&language=en-US&page=1&include_adult=false&query=${moviesSelection}`)
            .then(function(httpResponse)
            {
                return httpResponse.json();
            })
           
            .then(function (resultat){
                let moviesInfo=resultat.results;
                console.log(resultat.results);
                showMovies.innerHTML="";
                moviesInfo.forEach(movie=>
                showMovies.innerHTML+=` 
                
                <div class="card">
                    <div>
                         <img id="img_main" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                    </div>
                <div>
                     <p>${movie.original_name}</p>
                    <p class="card_show_${movie.id}">${movie.overview.substring(0,100)}<span data-id=${movie.id} class="threePoints"><i class="fas fa-angle-down"></i></span></p>
                    <p class="cache card_hide_${movie.id}">${movie.overview}<br><span data-id=${movie.id} class="threePoints"><i class="fas fa-angle-up"></i></span></p>
                    <a href="detail.html?id=${movie.id}">Details</a>
                 </div>
               

                
              
                `)
                threePoints=document.querySelectorAll(".threePoints"); 
                console.log(threePoints);

                threePoints.forEach((element)=>{
                element.addEventListener("click",showDescription);
                })
            }) 
                
                
    }else{
        showMovies.innerHTML="";
    }
}
}


 



function showDescription(e){
    let id=e.currentTarget.dataset.id;
    console.log(id);
    if(document.querySelector('.card_show_'+id).style.display=="none"){
        document.querySelector('.card_show_'+id).style.display="block";
        document.querySelector('.card_hide_'+id).style.display="none";
    }else{
        document.querySelector('.card_show_'+id).style.display="none";
        document.querySelector('.card_hide_'+id).style.display="block";
    }
    
    
}
inputMovies.addEventListener("keyup", getMovies);