<?php
    class controller_login {
        function view() {
            common::load_view('top_page_login.php', VIEW_PATH_LOGIN . 'login.html');
        }

        function register_c() {
            echo json_encode(common::load_model('login_model', 'get_register', $_POST['user'], $_POST['pass'], $_POST['email']));
        }

        function verify_email() {
            echo json_encode(common::load_model('login_model', 'get_verify_email', $_POST['token_email_verify'], $_POST['type']));
        }

        function login_c() {
            echo json_encode(common::load_model('login_model', 'get_login', $_POST['user_login'], $_POST['passwd']));
        }

        function token_c() {
            echo json_encode(common::load_model('login_model', 'get_token_c', $_POST['token']));
        }
    }
?>