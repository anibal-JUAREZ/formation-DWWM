<?php
$database=null;
function connexionMySQL()
{
    // Création d'une fonction de connexion à MySQL.

    // Cette fonction appelle PDO puis **renvoie** l'objet PDO représentant la connexion.
    // Cela permet alors aux autres fonctions de faires des requêtes SQL.

    global $database; //on utilise la variable globale
    $dsn = 'mysql:dbname=MisterCocktail;host=127.0.0.1;port=8889';
    $user = 'root';
    $password = 'root';
    //on charge l'objet PDO dans $database
    $database = new PDO($dsn, $user, $password);
   
}

connexionMySQL();