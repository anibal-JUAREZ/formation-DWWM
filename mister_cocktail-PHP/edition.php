<?php

// Chargement des autres programmes PHP dont on dépend.
require_once './lib/database.php';
require_once './models/cocktail.php';

// Récupération du cocktail stocké en base de données
$cocktail=$_GET['id'];
$detailCocktail=getOneCocktail($cocktail); 
$cocktailIngredients=cocktailIngredient($cocktail);
$errorFile="";
if(isset($_POST['nom']) && !empty($_POST['nom']) &&
    isset($_POST['description']) && !empty($_POST['description']) &&
    isset($_POST['dateConception']) && !empty($_POST['dateConception']) &&
    isset($_POST['prixMoyen']) && !empty($_POST['prixMoyen']) &&
    isset($_POST['idFamille']) && !empty($_POST['idFamille'])){


        if($_FILES["urlPhoto"]["size"]<=200000){
            $array=["image/png","image/jpeg"];
            if(in_array($_FILES["urlPhoto"]["type"],$array)){
               //ICI upload photo
               $uploads_dir = 'www/images/cocktails/';
               if ($_FILES['urlPhoto']['error'] == UPLOAD_ERR_OK) {
                    $tmp_name = $_FILES["urlPhoto"]["tmp_name"];
                   
                    unlink("www/images/cocktails/".$detailCocktail['urlPhoto']);
                    $namePhoto = uniqid();
                    move_uploaded_file($tmp_name, $uploads_dir.$namePhoto);
                    
                    $nom=$_POST['nom'];
                    $description=$_POST['description'];
                    $dateConception=$_POST['dateConception'];
                    $prixMoyen=$_POST['prixMoyen'];
                    $idFamille=$_POST['idFamille'];
                    $id=$_GET['id'];
                    $urlPhoto=$namePhoto;
                    $ingredients=$_POST['ingredients'];
                    deleteIngredients($cocktail);
                    modifyOneCocktail($nom,$description,$urlPhoto,$dateConception,$prixMoyen,$idFamille,$id);
                    foreach ($ingredients as $ingredient){
                        ajouterUnIngredient($cocktail,$ingredient);
                    }
                    header("Location:details_cocktail.php?id=".$_GET['id']); 
                }
            
      
            
            }else{
                $errorFile="Mauvais type de fichier";
                
            }
        }else{
            $errorFaile="Fichier trop volumineux";
            
        }   
    }
    
 

    
    

    
    



$allIngredients=getAllIngredients();
$cocktailIngredients=cocktailIngredient($cocktail);
$array_ingredient=[];
foreach($cocktailIngredients as $cocktailIngredient){
    array_push($array_ingredient,$cocktailIngredient['id']);
}
$allFamilies= getAllFamilies();

// Chargement du template
include './templates/edition.phtml';