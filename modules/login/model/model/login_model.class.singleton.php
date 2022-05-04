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
    }
?>


