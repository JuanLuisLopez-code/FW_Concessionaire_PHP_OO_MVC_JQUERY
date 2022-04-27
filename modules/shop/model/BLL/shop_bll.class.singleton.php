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
	}
?>