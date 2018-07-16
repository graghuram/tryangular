<?php

echo getenv('OPENSHIFT_MYSQL_DB_HOST');
die();

header('Content-Type: application/json');

$json = array();
$json[] = array ("id" => 1, "name" => "Batman", "score" => 10);
$json[] = array ("id" => 2, "name" => "IronMan", "score" => 10);
$json[] = array ("id" => 3, "name" => "Cap America", "score" => 9);
$json[] = array ("id" => 4, "name" => "Ant", "score" => 8);
$json[] = array ("id" => 5, "name" => "Thor", "score" => 8);
$json[] = array ("id" => 6, "name" => "Loki", "score" => 9);
$json[] = array ("id" => 7, "name" => "Hulk", "score" => 7);
$json[] = array ("id" => 8, "name" => "SHEILD", "score" => 6);
$json[] = array ("id" => 9, "name" => "Spider Man", "score" => 3);
$json[] = array ("id" => 10, "name" => "Wolvorine", "score" => 5);
$json[] = array ("id" => 11, "name" => "DeadPool", "score" => 4);
$json[] = array ("id" => 12, "name" => "Speed", "score" => 3);
$json[] = array ("id" => 13, "name" => "Green", "score" => 2);

echo json_encode($json);