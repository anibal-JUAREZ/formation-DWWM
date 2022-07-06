<?php
// 01 *** ICI : IL FAUT DÉMARRER LA SESSION (TOUJOURS)
session_start();


// VARIABLES (PAS TOUCHE)
$message = ''; // <= MESSAGE À DESTINATION DE L'UTILISATEUR (PAS TOUCHE)

/***************************************************************************************
*                  02 - DEMANDE D'AJOUT D'UNE VARIABLE VIA LE FORMULAIRE               *
****************************************************************************************/

// SI $_POST['varName'] EST DÉFINI ET $_POST['varValue'] EST DÉFINI ALORS
    if(isset($_POST['varName'])&& isset($_POST['varValue']) && !empty($_POST['varName']) &&! empty($_POST['varValue'])){
    // RÉCUPÉRER $_POST['varName'] DANS UNE VARIABLE
    $nomVariable= $_POST['varName'];
    // RÉCUPÉRER $_POST['varValue'] DANS UNE VARIABLE
    $valeurVariable= $_POST['varValue'];
    // ENREGISTRER varValue EN SESSION (EN UTILISANT LE varName)
    $_SESSION[$nomVariable] = $valeurVariable;
    // CRÉER UN MESSAGE DE CONFIRMATION POUR L'UTILISATEUR
    $message = "La variable <strong>$nomVariable</strong> a été ajoutée à la session, sa valeur est <strong>$valeurVariable</strong>";

// FIN SI
    }
/***************************************************************************************
*                      03 - DEMANDE DE VIDAGE COMPLET DE LA SESSION                    *
****************************************************************************************/

// SI $_GET['action'] EST DÉFINI ET ÉGAL À "destroy" ALORS
    if(isset ($_GET['action']) && $_GET['action']=="destroy"){
    // VIDER LA SESSION
    session_unset();
    session_destroy();
    // CRÉER UN MESSAGE DE CONFIRMATION POUR L'UTILISATEUR
    $message = 'Session destroyed';

// FIN SI
    }
/***************************************************************************************
*                 04 - DEMANDE DE SUPPRESSION D'UNE VARIABLE DE SESSION                *
****************************************************************************************/

// SI $_GET['action'] EST DÉFINI ET ÉGAL À "remove" ET QUE $_GET['varName'] EST DÉFINIE ALORS
    if(isset ($_GET['action']) && $_GET['action']=="remove" && isset($_GET['varName'])){
    // RÉCUPÉRER $_GET['varName'] DANS UNE VARIABLE
    $varName=$_GET['varName'];
    // SI LA VARIABLE DEMANDÉE EST BIEN DANS LA SESSION ALORS
        if(isset($_SESSION[$varName])){
        // DÉTRUIRE LA VARIABLE DE SESSION
            unset($_SESSION[$varName]);
        // CRÉER UN MESSAGE DE CONFIRMATION POUR L'UTILISATEUR
        $message = 'Variable destroyed';
        }
    // FIN SI
// FIN SI
}

// CHARGEMENT DU TEMPLATE (PAS TOUCHE)
require_once './templates/index.phtml';