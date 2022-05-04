<?php
@session_start();
	class login_bll {
		private $dao;
		private $db;
		static $_instance;

		function __construct() {
			$this -> dao = login_dao::getInstance();
			$this->db = db::getInstance();
		}

		public static function getInstance() {
			if (!(self::$_instance instanceof self)) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}

		public function get_register_BLL($user, $pass, $email) {
			if ($this -> dao -> validate_user ($this->db, $user, $email)){
				echo json_encode("Usuarios existente");
				exit;
			}elseif($this -> dao -> validate_email ($this->db, $user, $email)){
				echo json_encode("Email existente");
				exit;
			}else{
				$hashed_pass = password_hash($pass, PASSWORD_DEFAULT, ['cost' => 12]);
            	$hashavatar = md5(strtolower(trim($user))); 
            	$avatar = "https://placeimg.com/400/400/$hashavatar";
				$email_token = common::generate_Token_secure(20);
				$id_user = common::generate_Token_secure(5);


				mail::send_email($user, $email, $email_token);


				return $this -> dao -> register_user ($this->db, $user, $email, $hashed_pass, $avatar, $email_token, $id_user);
			}			
		}
		
		public function get_verify_email_BLL($token_email_verify, $type) {

			if($this -> dao -> select_verify_email($this->db, $token_email_verify, $type)){
				$this -> dao -> update_verify_email($this->db, $token_email_verify, $type);
				return 'verify';
			}
			return 'ya esta verificado';
		}
		
		public function get_login_BLL($user, $pass) {
			if ($rdo = $this -> dao -> select_user ($this -> db, $user)){
				if (password_verify($pass,$rdo[0]['passwd'])) {
                    $_SESSION['username'] = $rdo[0]['username'];
					$_SESSION['tiempo'] = time();

					return middleware::midd_encode($rdo[0]['username']);
					
                }else {
                    echo json_encode("contraseña incorrecta");
                    exit;
                }
			}else{
				return "user no existe";
			}
		}
		
		public function get_token_c_BLL($token) {

			$check = middleware::midd_decode($token);
			$exp_time = json_decode($check);
			//comprobar si el token ha expirado o aun esta activo
			if($exp_time->exp == null || $exp_time->exp < time()){
				return "Tiempo excedido";
			} else {
				$user_check = json_decode($check);
				return $this -> dao -> select_user ($this->db, $user_check->name);
			}
		}
		
	}
?>