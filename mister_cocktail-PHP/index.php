<?php

// Chargement des autres programmes PHP dont on dépend.
require_once './lib/database.php';
require_once './models/cocktail.php';


// Récupération de tous les cocktails stockés en base de données
$getcocktails = getAllCocktails();

// Chargement du template
include './templates/index.phtml';