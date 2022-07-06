<?php


function getAllCocktails(){
    global $database;

    // DEMANDE À LA DATABASE DE CRÉER UNE REQUÊTE SQL
    $query = $database->prepare("SELECT * 
    FROM `Cocktail`"); 

    // DEMANDE À LA DATABASE D'ÉXÉCUTER LA REQUÊTE
    $success = $query->execute();
    
    // DEMANDE À LA REQUÊTE DE NOUS DONNER LE RESULTAT (tous)
    $resultat = $query->fetchAll(PDO::FETCH_ASSOC);    

    // RENVOIE LA LISTE DES COMMANDES
    return $resultat;
 }

 function getOneCocktail($detailCocktail){
    global $database;

    // DEMANDE À LA DATABASE DE CRÉER UNE REQUÊTE SQL
    $query = $database->prepare("SELECT *
    FROM `Cocktail`
    INNER JOIN Famille on Famille.id=Cocktail.idFamille
    WHERE  Cocktail.id= :oneCocktail"); 

    // DEMANDE À LA DATABASE D'ÉXÉCUTER LA REQUÊTE
    $success = $query->execute([":oneCocktail" => $detailCocktail]);
    
    // DEMANDE À LA REQUÊTE DE NOUS DONNER LE RESULTAT (tous)
    $resultat = $query->fetch(PDO::FETCH_ASSOC);    

    // RENVOIE LA LISTE DES COMMANDES
    return $resultat;
 }

 function ajouterUnCocktail($nom,$description,$urlPhoto,$dateConception,$prixMoyen,$idFamille){
   global $database;

    // DEMANDE À LA DATABASE DE CRÉER UNE REQUÊTE SQL
    $query = $database->prepare("INSERT INTO Cocktail(nom,description,urlPhoto,dateConception,prixMoyen,idFamille)
    values(:nom,:description,:urlPhoto,:dateConception,:prixMoyen,:idFamille)
    "); 

    // DEMANDE À LA DATABASE D'ÉXÉCUTER LA REQUÊTE
    $success = $query->execute([":nom" => $nom,":description" => $description,":urlPhoto"=>$urlPhoto,":dateConception" => $dateConception,":prixMoyen" => $prixMoyen,":idFamille" => $idFamille ]);

    $id = $database->lastInsertId(); 
    return $id;
   

 }

 function getAllFamilies(){
   global $database;

   // DEMANDE À LA DATABASE DE CRÉER UNE REQUÊTE SQL
   $query = $database->prepare("SELECT * FROM `Famille`"); 

   // DEMANDE À LA DATABASE D'ÉXÉCUTER LA REQUÊTE
   $success = $query->execute();
   
   // DEMANDE À LA REQUÊTE DE NOUS DONNER LE RESULTAT (tous)
   $resultat = $query->fetchAll(PDO::FETCH_ASSOC);    

   // RENVOIE LA LISTE DES COMMANDES
   return $resultat;
}

function modifyOneCocktail($nom,$description,$urlPhoto,$dateConception,$prixMoyen,$idFamille,$id){
   global $database;

   // DEMANDE À LA DATABASE DE CRÉER UNE REQUÊTE SQL
   $query = $database->prepare("UPDATE `Cocktail` 
   SET `nom`=:nom,`description`=:description,`urlPhoto`=:urlPhoto,`dateConception`=:dateConception,`prixMoyen`=:prixMoyen,`idFamille`=:idFamille
   WHERE id=:id"); 

   // DEMANDE À LA DATABASE D'ÉXÉCUTER LA REQUÊTE
   $success = $query->execute([":nom" => $nom, ":description"=>$description,":urlPhoto"=>$urlPhoto,":dateConception"=>$dateConception, ":prixMoyen"=>$prixMoyen,":idFamille"=>$idFamille,":id"=>$id]);
   
  
}


function deleteOneCocktail($id){
   global $database;

   // DEMANDE À LA DATABASE DE CRÉER UNE REQUÊTE SQL
   $query = $database->prepare("DELETE FROM `Cocktail` WHERE id=:id"); 

   // DEMANDE À LA DATABASE D'ÉXÉCUTER LA REQUÊTE
   $success = $query->execute([":id"=>$id]);
   
  
}

function cocktailIngredient($idCocktail){
   global $database;

    // DEMANDE À LA DATABASE DE CRÉER UNE REQUÊTE SQL
    $query = $database->prepare("SELECT *
    FROM Cocktail_Ingredient
    INNER JOIN Ingredient on Cocktail_Ingredient.idIngredient=Ingredient.id
    WHERE Cocktail_Ingredient.idCocktail=:idCocktail"); 

    // DEMANDE À LA DATABASE D'ÉXÉCUTER LA REQUÊTE
    $success = $query->execute([":idCocktail" => $idCocktail]);
    
    // DEMANDE À LA REQUÊTE DE NOUS DONNER LE RESULTAT (tous)
    $resultat = $query->fetchAll(PDO::FETCH_ASSOC);    

    // RENVOIE LA LISTE DES COMMANDES
    return $resultat;

}

function getAllIngredients(){
   global $database;

    // DEMANDE À LA DATABASE DE CRÉER UNE REQUÊTE SQL
    $query = $database->prepare("SELECT * FROM `Ingredient`"); 

    // DEMANDE À LA DATABASE D'ÉXÉCUTER LA REQUÊTE
    $success = $query->execute();
    
    // DEMANDE À LA REQUÊTE DE NOUS DONNER LE RESULTAT (tous)
    $resultat = $query->fetchAll(PDO::FETCH_ASSOC);    

    // RENVOIE LA LISTE DES COMMANDES
    return $resultat;

}

function ajouterUnIngredient($idCocktail,$ingredients){
   global $database;

    // DEMANDE À LA DATABASE DE CRÉER UNE REQUÊTE SQL
    $query = $database->prepare("INSERT INTO Cocktail_Ingredient(idCocktail,idIngredient)
    values(:idCocktail,:idIngredient)
    "); 

    // DEMANDE À LA DATABASE D'ÉXÉCUTER LA REQUÊTE
    $success = $query->execute([":idCocktail" => $idCocktail,":idIngredient" => $ingredients ]);

    
    
   

 }

 function deleteIngredients($idCocktail){
   global $database;

   // DEMANDE À LA DATABASE DE CRÉER UNE REQUÊTE SQL
   $query = $database->prepare("DELETE FROM `Cocktail_Ingredient` WHERE idCocktail=:id"); 

   // DEMANDE À LA DATABASE D'ÉXÉCUTER LA REQUÊTE
   $success = $query->execute([":id"=>$idCocktail]);

}