<?php
header ('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

header('Content-Type: application/json');

class Db {
    function __construct() {
        try {
               $this->conn = new PDO('mysql:host=localhost;dbname=employee', 'root', 'root');
               $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
             //  return $this->conn;
        } catch (PDOException $e) {
            die('an error ecoured' . $e->getMessage());
        }
    }
}