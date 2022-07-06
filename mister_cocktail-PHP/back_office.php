<?php

// Chargement des autres programmes PHP dont on dépend.
require_once './lib/database.php';
require_once './models/cocktail.php';

// Récupération du cocktail stocké en base de données
$allCocktails=getAllCocktails();


// Chargement du template
include './templates/back_office.phtml';