<?php
    class shop_dao {
        static $_instance;

        private function __construct() {
        }

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function select_shopAll($db) {
                $sql = 'SELECT c.*, ct.cat_name, t.type_name, b.brand_name
                FROM car c, categoria ct, type t, brand b
                WHERE c.categoria=ct.id_categoria AND c.combustible=t.id_type AND c.marca = b.id_brand 
                ORDER BY c.visitas DESC';
                $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
}

