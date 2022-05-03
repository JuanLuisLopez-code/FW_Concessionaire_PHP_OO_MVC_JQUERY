<?php
    class shop_model {
        private $bll;
        static $_instance;

        function __construct() {
            $this -> bll = shop_bll::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function get_shopAll($args) {
            return $this -> bll -> get_shopAll_BLL($args);
        }

        public function get_details($args) {            
            return $this -> bll -> get_details_BLL($args);
        }

        public function get_filter($args, $total_prod, $items_page) {     
            return $this -> bll -> get_filter_BLL($args, $total_prod, $items_page);
        }
        
        public function get_count() {
            return $this -> bll -> get_count_BLL();
        }

        public function get_count_filter($args) {            
            return $this -> bll -> get_count_filter_BLL($args);
        }

        public function get_search($args, $total_prod, $items_page) {     
            return $this -> bll -> get_search_BLL($args, $total_prod, $items_page);
        }

        public function get_count_search($args) {          
            return $this -> bll -> get_count_search_BLL($args);
        }

        public function get_visitas($args) {          
            return $this -> bll -> get_visitas_BLL($args);
        }
    }
?>
