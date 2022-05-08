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

        function actividad() {
            echo json_encode(common::load_model('login_model', 'get_actividad'));
        }

        function controluser() {
            echo json_encode(common::load_model('login_model', 'get_controluser'));
        }

        function refresh_token() {
            echo json_encode(common::load_model('login_model', 'get_refresh_token'));
        }

        function refresh_session() {
            echo json_encode(common::load_model('login_model', 'get_refresh_session'));
        }

        function delete_session() {
            echo json_encode(common::load_model('login_model', 'get_delete_session'));
        }
        
        function recovery_pass() {
            echo json_encode(common::load_model('login_model', 'get_recovery_pass', $_POST['email_recovery'], $_POST['passwd_recovery']));
        }
    }
?>