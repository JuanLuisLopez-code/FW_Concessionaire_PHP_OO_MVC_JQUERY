<?php
    class controller_home {
        function view() {
            common::load_view('top_page_home.php', VIEW_PATH_HOME . 'homepage.html');
        }

        function carousel() { 
            echo json_encode(common::load_model('home_model', 'get_carousel'));
        }

        function categoria() {
            echo json_encode(common::load_model('home_model', 'get_categoria'));
        }

        function type() {
            echo json_encode(common::load_model('home_model', 'get_type'));
        }

        // function load_more() {
        //     echo json_encode(common::load_model('home_model', 'get_load_more'));
        // }

    }
?>