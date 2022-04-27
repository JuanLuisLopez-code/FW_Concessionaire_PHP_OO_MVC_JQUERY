<?php
    class search_dao {
        static $_instance;

        private function __construct() {
        }

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function select_load_brands($db) {
                $sql = "SELECT * FROM brand";
                $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_search_category_null($db) {
            $sql = "SELECT DISTINCT * FROM categoria";
            $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        }

        public function select_search_category($db, $args) {
            $sql = "SELECT ca.*
            FROM car c, categoria ca
            WHERE ca.id_categoria = c.categoria AND c.marca = '$args'";
            $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        }

        public function select_only_brand($db, $complete, $brand) {
            $sql = "SELECT *
            FROM car c
            WHERE marca = '$brand' AND city LIKE '$complete%'";
            $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        }
        
        public function select_brand_category($db, $complete, $brand, $category) {
            $sql = "SELECT *
            FROM car c
            WHERE c.marca = '$brand' AND c.categoria = '$category' AND c.city LIKE '$complete%'";
            $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        }

        public function select_only_category($db, $category, $complete) {
            $sql = "SELECT *
            FROM car c
            WHERE categoria = '$category' AND city LIKE '$complete%'";
            $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        }

        public function select_city($db, $complete) {
            $sql = "SELECT *
            FROM car c
            WHERE c.city LIKE '$complete%'";
            $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        }
}

