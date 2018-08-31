<?php

require_once 'db_conn.php';

$sql = "select * from city";
$obj = new Db();
$result = $obj->conn->prepare($sql);
$result->execute();

$ret_res = $result->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($ret_res);
