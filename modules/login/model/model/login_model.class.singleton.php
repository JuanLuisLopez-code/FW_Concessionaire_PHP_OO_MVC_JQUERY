<?php
    class login_model {
        private $bll;
        static $_instance;
        
        function __construct() {
			$this -> bll = login_bll::getInstance();
		}
 
        public static function getInstance() {
            if (!(self::$_instance instanceof self)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function get_register($user, $pass, $email) {
            return $this -> bll -> get_register_BLL($user, $pass, $email);
        }

        public function get_verify_email($token_email_verify, $type) {
            return $this -> bll -> get_verify_email_BLL($token_email_verify, $type);
        }

        public function get_login($user, $pass) {
            
            return $this -> bll -> get_login_BLL($user, $pass);
        }

        public function get_token_c($token) {
            return $this -> bll -> get_token_c_BLL($token);
        }

        public function get_actividad() {
            return $this -> bll -> get_actividad_BLL();
        }

        public function get_controluser() {
            return $this -> bll -> get_controluser_BLL();
        }

        public function get_refresh_token() {
            return $this -> bll -> get_refresh_token_BLL();
        }

        public function get_refresh_session() {
            return $this -> bll -> get_refresh_session_BLL();
        }

        public function get_delete_session() {
            return $this -> bll -> get_delete_session_BLL();
        }

        public function get_recovery_pass($email, $password) {
            return $this -> bll -> get_recovery_pass_BLL($email, $password);
        }

        public function get_social_singin($args) {
            return $this -> bll -> get_social_singin_BLL($args);
        }
    }
?>


