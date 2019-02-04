<?php

header ('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');
// $response
echo '<pre>';
print_r(move_uploaded_file($_FILES['profile']['tmp_name'], '../images/'.$_FILES['profile']['name']));
die();
?>