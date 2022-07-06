<?php


// Chargement des autres programmes PHP dont on dépend.
require_once './lib/database.php';
require_once './models/cocktail.php';

$errorName="";
if(isset($_POST['nom'])&&empty($_POST['nom'])){
    $errorName="Attention";
}
$errorFile="";
if(isset($_POST['nom']) && !empty($_POST['nom']) &&
    isset($_POST['description']) && !empty($_POST['description']) &&
    isset($_POST['dateConception']) && !empty($_POST['dateConception']) &&
    isset($_POST['prixMoyen']) && !empty($_POST['prixMoyen']) &&
    isset($_POST['idFamille']) && !empty($_POST['idFamille']) &&
    isset($_POST['ingredients']) && !empty($_POST['ingredients'])){
    if($_FILES["urlPhoto"]["size"]<=200000){
        $array=["image/png","image/jpeg"];
        if(in_array($_FILES["urlPhoto"]["type"],$array)){
           //ICI upload photo
           $uploads_dir = 'www/images/cocktails/';
           if ($_FILES['urlPhoto']['error'] == UPLOAD_ERR_OK) {
                $tmp_name = $_FILES["urlPhoto"]["tmp_name"];
                // basename() puede evitar ataques de denegación de sistema de ficheros;
                // podría ser apropiada más validación/saneamiento del nombre del fichero
                //$namePhoto = basename($_FILES["urlPhoto"]["name"]);
                $namePhoto = uniqid();
       
                move_uploaded_file($tmp_name, $uploads_dir.$namePhoto);
                $name=$_POST['nom'];
                $description=$_POST['description']; 
                $dateConception=$_POST['dateConception'];
                $price=$_POST['prixMoyen'];
                $idFamille=$_POST['idFamille'];
                $urlPhoto=$namePhoto;
                $ingredients=$_POST['ingredients'];
                
                //appel la function
                $ajouterunCocktail=ajouterUnCocktail($name,$description,$urlPhoto,$dateConception,$price,$idFamille);
                foreach ($ingredients as $ingredient){
                    ajouterUnIngredient($ajouterunCocktail,$ingredient);
                }
                //redirection
                header("Location:index.php"); 
        }
            
      
            
        }else{
            $errorFile="Mauvais type de fichier";
            
        }
    }else{
        $errorFaile="Fichier trop volumineux";
        
    }   
}

  $allFamilies= getAllFamilies();
  $allIngredients=getAllIngredients();





// Chargement du template
include './templates/ajouter_cocktail.phtml';