<?php
    class controller_search {

        function load_brands() {
            echo json_encode(common::load_model('search_model', 'get_load_brands'));
        }

        function search_category_null() {
            echo json_encode(common::load_model('search_model', 'get_search_category_null'));
        }

        function search_category() {
            echo json_encode(common::load_model('search_model', 'get_search_category', $_POST['brand']));
        }
        
        function autocomplete() {
            echo json_encode(common::load_model('search_model', 'get_autocomplete', [$_POST['brand'], $_POST['category'], $_POST['complete']]));
        }
    }
?>
