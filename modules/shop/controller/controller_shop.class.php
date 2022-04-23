<?php
    class controller_shop {

        function view() {
            common::load_view('top_page_shop.php', VIEW_PATH_SHOP . 'home_shop.html');
        }

        function shopAll() {
            echo json_encode(common::load_model('shop_model', 'get_shopAll'));
        }

        // function filters() {
        //     echo json_encode(common::load_model('shop_model', 'get_filters'));
        // }

        // function list_products() {
        //     echo json_encode(common::load_model('shop_model', 'get_list_products', [$_POST['items_page'], $_POST['total_prod']]));
        // }

        // function list_filters_products() {
        //     echo json_encode(common::load_model('shop_model', 'get_list_filters_products', [$_POST['items_page'], $_POST['total_prod'], $_POST['filters']]));
        // }
    }
?>
