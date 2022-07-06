<?php


/**
 * returne le nombre de commandes dans la Base de Donnés 
 *
 * @return int le nombre de commandes
 */
function getOrdersCount(){
    global $database;
    //demande à la database de créer une requête SQL
    $query=$database->prepare("SELECT COUNT(*) FROM orders");

    //demande à la database d'éxecuter la requête
    $success = $query->execute();
    //demande à la requête de nous donner le resultat (1 seul)
    $resultat = $query->fetch();

    return $resultat=$resultat['COUNT(*)'];

}

function getAllOrders(){
    global $database;
     //demande à la database de créer une requête SQL
     //$query=$database->prepare("SELECT * FROM orders");
     $query=$database->prepare(" SELECT `orderNumber`,`orderDate`,`status`,customers.customerName FROM `orders`INNER JOIN customers on (orders.customerNumber=customers.customerNumber)");
    
    //demande à la database d'éxecuter la requête
    $success = $query->execute();

     //demande à la requête de nous donner le resultat (tous)
     $resultat = $query->fetchAll(PDO::FETCH_ASSOC);
     return $resultat;
}

function getOrderByOrderNumber($orderNumber){

    global $database;
     //demande à la database de créer une requête SQL
     $query=$database->prepare(" SELECT `quantityOrdered`,`priceEach`,products.productName,ROUND((`quantityOrdered`*`priceEach`),2) as TOTAL
     FROM `orderdetails` 
     INNER JOIN products on (orderdetails.productCode=products.productCode)
     WHERE `orderNumber`=:orderNumber");
    
    //demande à la database d'éxecuter la requête
    $success = $query->execute([':orderNumber'=>$orderNumber]);

     //demande à la requête de nous donner le resultat (tous)
     $resultat = $query->fetchAll(PDO::FETCH_ASSOC);
     return $resultat;
}

function getCustomerInformation($orderNumber){

    global $database;
     //demande à la database de créer une requête SQL
     $query=$database->prepare(" SELECT *
     FROM orders
     JOIN customers ON orders.customerNumber = customers.customerNumber
     WHERE orderNumber=:orderNumber");
    
    //demande à la database d'éxecuter la requête
    $success = $query->execute([':orderNumber'=>$orderNumber]);

     //demande à la requête de nous donner le resultat (1 seul)
     $resultat = $query->fetch(PDO::FETCH_ASSOC);
     return $resultat;
}

