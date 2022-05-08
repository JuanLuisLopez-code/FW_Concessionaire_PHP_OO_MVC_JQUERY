<?php
    class login_dao {
        static $_instance;

        private function __construct() {
        }

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function validate_user($db, $user, $email) {
            $sql = "SELECT * FROM users WHERE username = '$user'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function validate_email($db, $email) {
            $sql = "SELECT * FROM users WHERE email = '$email'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function register_user($db, $user, $email, $hashed_pass, $avatar, $email_token, $id_user) {
            $sql = "INSERT INTO users (id_user, active, username, passwd, email, token_email, avatar, type) VALUES ('$id_user', 0, '$user', '$hashed_pass', '$email', '$email_token', '$avatar', 'client')";
            return $stmt = $db->ejecutar($sql);
        }

        public function select_verify_email($db, $token_email_verify, $type) {
            $sql = "SELECT active FROM users WHERE token_email = '$token_email_verify'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function update_verify_email($db, $token_email_verify, $type) {
            $sql = "UPDATE users SET active = 1 WHERE token_email = '$token_email_verify'";
            return $stmt = $db->ejecutar($sql);
        }

        public function update_use_email($db, $email) {
            $sql = "UPDATE users SET active = 0 WHERE email = '$email'";
            return $stmt = $db->ejecutar($sql);
        }

        public function select_user($db, $user) {
            $sql = "SELECT * FROM users WHERE username = '$user'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function recovery_password($db, $email, $hashed_pass) {
            $sql = "UPDATE users SET passwd = '$hashed_pass' WHERE email = '$email' ";
            return $stmt = $db->ejecutar($sql);
        }

        public function take_token($db, $email) {
            $sql = "SELECT token_email FROM users WHERE email = '$email'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

    }
?>