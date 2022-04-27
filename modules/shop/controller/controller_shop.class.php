<?php
    class controller_shop {

        function view() {
            common::load_view('top_page_shop.php', VIEW_PATH_SHOP . 'home_shop.html');
        }

        function shopAll() {
            echo json_encode(common::load_model('shop_model', 'get_shopAll', [$_POST['total_prod'],$_POST['items_page']]));
        }

        function details() {
            echo json_encode(common::load_model('shop_model', 'get_details', [$_POST['id']]));
        }

        function filter() {
            echo json_encode(common::load_model('shop_model', 'get_filter', $_POST['filter'], $_POST['total_prod'],$_POST['items_page']));
        }
        
        function count() {
            echo json_encode(common::load_model('shop_model', 'get_count'));
        }

        function count_filter() {
            echo json_encode(common::load_model('shop_model', 'get_count_filter', [$_POST['filter']]));
        }

        function filters_search() {
            echo json_encode(common::load_model('shop_model', 'get_search', $_POST['filters_search'], $_POST['total_prod'],$_POST['items_page']));
        }

        function count_search() {
            echo json_encode(common::load_model('shop_model', 'get_count_search', $_POST['filters_search']));
        }
    }
?>
