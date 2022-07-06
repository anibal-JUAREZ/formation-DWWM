<?php

// Chargement des autres programmes PHP dont on dépend.
require_once './lib/database.php';
require_once './models/cocktail.php';

$cocktail=getOneCocktail($_GET['id']);
deleteOneCocktail($_GET['id']);
if(is_file("www/images/cocktails/".$cocktail['urlPhoto'])){
    unlink("www/images/cocktails/".$cocktail['urlPhoto']);
}


header("Location:back_office.php"); 