<?php

// Chargement des autres programmes PHP dont on dépend.
require_once './lib/database.php';
require_once './models/cocktail.php';

// Récupération du cocktail stocké en base de données
$cocktail=$_GET['id'];
$detailCocktail=getOneCocktail($cocktail); 
$cocktailIngredients=cocktailIngredient($cocktail);


// Chargement du template
include './templates/details_cocktail.phtml';