<?php
require_once 'db_conn.php';


echo '<pre>';
print_r($_POST);
die();


$city_id = (int) file_get_contents("php://input");
// $city_id = 2;
$sql = "select * from city where city_id = $city_id";
$obj = new Db();
$result = $obj->conn->prepare($sql);
$result->execute();

$ret_res = $result->fetch(PDO::FETCH_ASSOC);
echo json_encode($ret_res);