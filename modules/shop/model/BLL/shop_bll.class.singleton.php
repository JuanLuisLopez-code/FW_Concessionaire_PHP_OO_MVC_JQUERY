<?php
	class shop_bll {
		private $dao;
		private $db;
		static $_instance;

		function __construct() {
			$this -> dao = shop_dao::getInstance();
			$this->db = db::getInstance();
		}

		public static function getInstance() {
			if (!(self::$_instance instanceof self)) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}

		public function get_shopAll_BLL($args) {
			return $this -> dao -> select_shopAll($this->db, $args);
		}

		public function get_details_BLL($args) {
			return $this -> dao -> select_details($this->db, $args);
		}

		public function get_filter_BLL($args, $total_prod, $items_page) {
			return $this -> dao -> select_filter($this->db, $args, $total_prod, $items_page);
		}

		public function get_count_BLL() {
			return $this -> dao -> select_count($this->db);
		}
		
		public function get_count_filter_BLL($args) {
			return $this -> dao -> select_count_filter($this->db, $args);
		}

		public function get_search_BLL($args, $total_prod, $items_page) {
			return $this -> dao -> select_search($this->db, $args, $total_prod, $items_page);
		}

		public function get_count_search_BLL($args) {
			return $this -> dao -> select_count_search($this->db, $args);
		}

		public function get_visitas_BLL($args) {
			return $this -> dao -> select_visitas($this->db, $args);
		}

		public function get_control_likes_BLL($args) {
			$token=$args[0];
			$id=$args[1];
			if ($token){
				
				$check_control = middleware::midd_decode($token);
				$name_token = json_decode($check_control);

				if ($rdo_id_user = $this -> dao ->select_user($this->db, $name_token->name)){
					$rdo = $this -> dao ->select_one_likes($this->db, $rdo_id_user[0]['id_user'], $id);
					if (!$rdo){
						return $this -> dao -> insert_likes($this -> db, $rdo_id_user[0]['id_user'], $id);
					}else{           
						return $this -> dao -> delete_likes($this -> db, $rdo_id_user[0]['id_user'], $id);     
					}
				}
			}  
		}
		
		public function get_load_likes_BLL($token) {
			if ($token){

				$check_control = middleware::midd_decode($token);
				$name_token = json_decode($check_control);

				if ($rdo_id_user = $this -> dao ->select_user($this->db, $name_token->name)){
					return $this -> dao ->select_load_likes($this->db, $rdo_id_user[0]['id_user']);
				}

			}
		}

		public function get_load_likes_details_BLL($args) {
			$token=$args[0];
			$id=$args[1];
			if ($token){
				$check_control = middleware::midd_decode($token);
				$name_token = json_decode($check_control);
				if ($rdo_id_user = $this -> dao ->select_user($this->db, $name_token->name)){
					return $this -> dao ->select_load_likes_details($this->db, $rdo_id_user[0]['id_user'], $id);
				}
			}  
		}

		public function get_redirect_BLL($args) {
			$filtros = $args[0];
			$total_prod = $args[1];
			$items_page = $args[2];
			return $this -> dao -> redirect($this -> db, $filtros, $total_prod, $items_page);
		}

		public function get_count_home_BLL($filtros) {
			return $this -> dao -> select_count_home($this->db, $filtros);
		}

		public function get_moreCars_BLL($args) {
			return $this -> dao -> select_moreCars($this->db, $args);
		}
	}
?>