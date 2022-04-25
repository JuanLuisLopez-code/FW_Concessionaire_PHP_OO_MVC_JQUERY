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

        public function select_shopAll($db, $args) {
                $sql = 'SELECT c.*, ct.cat_name, t.type_name, b.brand_name
                FROM car c, categoria ct, type t, brand b
                WHERE c.categoria=ct.id_categoria AND c.combustible=t.id_type AND c.marca = b.id_brand 
                ORDER BY c.visitas DESC
                LIMIT ' . $args[0] . ', ' . $args[1] . '';
                $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_details($db, $args) {
            $sql = 'SELECT c.*, i.img, b.brand_name, t.type_name, ca.*
            FROM car c, car_img i, brand b, type t, categoria ca
            WHERE c.id = i.car AND c.marca = b.id_brand AND c.combustible = t.id_type AND c.id = ' . $args[0] . ' AND c.categoria = ca.id_categoria';
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_filter($db, $args, $total_prod, $items_page) {
            $sql = "SELECT c.*, i.img, ca.cat_name, t.type_name, b.brand_name
            FROM car c INNER JOIN car_img i INNER JOIN categoria ca INNER JOIN type t INNER JOIN brand b
            ON c.id = i.car AND  i.img LIKE ('%1%') AND c.categoria = ca.id_categoria AND c.combustible = t.id_type AND c.marca = b.id_brand";

                for ($i=0; $i < count($args); $i++){
                    if ($i==0){
                        if ($args[$i][0] == 'orden'){
                            $sql.= " ORDER BY " . $args[$i][1] . " ASC";

                        }else{
                        $sql.= " WHERE c." . $args[$i][0] . "=" . $args[$i][1];
                        }
                    }else {
                        if ($args[$i][0] == 'orden'){
                            $sql.= " ORDER BY " . $args[$i][1] . " ASC";

                        }else{$sql.= " AND c." . $args[$i][0] . "=" . $args[$i][1];}
                    }        
                }
                $sql.= " LIMIT $total_prod, $items_page";

            $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        }

        public function select_count($db) {
            $sql = 'SELECT COUNT(*) contador
            FROM car';
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_count_filter($db, $args) {
            $sql = "SELECT COUNT(*) contador
            FROM car c INNER JOIN car_img i INNER JOIN categoria ca INNER JOIN type t INNER JOIN brand b
            ON c.id = i.car AND  i.img LIKE ('%1%') AND c.categoria = ca.id_categoria AND c.combustible = t.id_type AND c.marca = b.id_brand";

                for ($i=0; $i < count($args); $i++){
                    if ($i==0){
                        if ($args[0][$i][0] == 'orden'){
                            $sql.= " ORDER BY " . $args[0][$i][1] . " ASC";

                        }else{
                        $sql.= " WHERE c." . $args[0][$i][0] . "=" . $args[0][$i][1];
                        }
                    }else {
                        if ($args[$i][0] == 'orden'){
                            $sql.= " ORDER BY " . $args[0][$i][1] . " ASC";

                        }else{$sql.= " AND c." . $args[0][$i][0] . "=" . $args[0][$i][1];}
                    }        
                }

            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
    }

