<?php
$database=null; //Notre B.D.D
function connect(){
    global $database; //on utilise la variable globale
    $dsn = 'mysql:dbname=classicmodels;host=127.0.0.1;port=8889';
    $user = 'root';
    $password = 'root';
    //on charge l'objet PDO dans $database
    $database = new PDO($dsn, $user, $password);
   
}

connect();