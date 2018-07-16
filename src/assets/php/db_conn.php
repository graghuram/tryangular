<?php
header ('Access-Control-Allow-Origin: http://localhost:4200');

class Db {
    function __construct() {
        try {
               $this->conn = new PDO('mysql:host=locahost;'.'dbname=employee', 'root', 'root');
               $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
             //  return $this->conn;
        } catch (PDOException $e) {
            die('an error ecoured' . $e->getMessage());
        }
    }
}