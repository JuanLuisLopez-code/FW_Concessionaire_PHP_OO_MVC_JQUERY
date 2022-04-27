<?php
	class search_bll {
		private $dao;
		private $db;
		static $_instance;

		function __construct() {
			$this -> dao = search_dao::getInstance();
			$this->db = db::getInstance();
		}

		public static function getInstance() {
			if (!(self::$_instance instanceof self)) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}

		public function get_load_brands_BLL() {
			return $this -> dao -> select_load_brands($this->db);
		}

		public function get_search_category_null_BLL() {
			return $this -> dao -> select_search_category_null($this->db);
		}

		public function get_search_category_BLL($args) {
			return $this -> dao -> select_search_category($this->db, $args);
		}

		public function get_autocomplete_BLL() {
			if (!empty($_POST['brand']) && empty($_POST['category'])){
				return $this -> dao -> select_only_brand($this->db, $_POST['complete'], $_POST['brand']);
			}else if(!empty($_POST['brand']) && !empty($_POST['category'])){
				return $this -> dao -> select_brand_category($this->db, $_POST['complete'], $_POST['brand'], $_POST['category']);
			}else if(empty($_POST['brand']) && !empty($_POST['category'])){
				return $this -> dao -> select_only_category($this->db, $_POST['category'], $_POST['complete']);
			}else {
				return $this -> dao -> select_city($this->db, $_POST['complete']);
			}
		}
	}
?>