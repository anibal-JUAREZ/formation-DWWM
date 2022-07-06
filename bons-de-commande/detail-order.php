<?php


// Chargement des modèles

require_once './lib/debug.php';
require_once './lib/models/database.php';
require_once './lib/models/orders.php';


// Code de la moulinette
//On récupère le detail de chaque commande
$orderNumber=$_GET['orderNumber'];
$ordersInformation= getOrderByOrderNumber($orderNumber);
$customerInformation=(getCustomerInformation($orderNumber));





// Charge le template à la fin

include 'templates/detail-order.phtml';
