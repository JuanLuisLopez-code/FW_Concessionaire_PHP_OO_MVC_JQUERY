<?php
    define('PROJECT', '/FW_PHP_OO_JQuery/');

    //SITE_ROOT
    define('SITE_ROOT', $_SERVER['DOCUMENT_ROOT'] . PROJECT);
    
    //SITE_PATH
    define('SITE_PATH', 'http://' . $_SERVER['HTTP_HOST'] . PROJECT);
    
    //PRODUCTION
    define('PRODUCTION', true);
    
    //MODEL
    define('MODEL_PATH', SITE_ROOT . 'model/');
    
    //MODULES
    define('MODULES_PATH', SITE_ROOT . 'modules/');
    
    //RESOURCES
    define('RESOURCES', SITE_ROOT . 'resources/');
    
    //UTILS
    define('UTILS', SITE_ROOT . 'utils/');

    //VIEW
    define('VIEW_PATH_INC', SITE_ROOT . 'view/inc/');

    //CSS
    define('CSS_PATH', SITE_ROOT . 'view/css/');
    
    //JS
    define('JS_PATH', SITE_ROOT . 'view/js/');
    
    //IMG
    define('IMG_PATH', SITE_ROOT . 'view/img/');

    //MODEL_HOME
    define('UTILS_HOME', SITE_ROOT . 'modules/home/utils/');
    define('DAO_HOME', SITE_ROOT . 'modules/home/model/DAO/');
    define('BLL_HOME', SITE_ROOT . 'modules/home/model/BLL/');
    define('MODEL_HOME', SITE_ROOT . 'modules/home/model/model/');
    define('JS_VIEW_HOME', SITE_PATH . 'modules/home/view/js/');
    define ('VIEW_PATH_HOME', SITE_ROOT . 'modules/home/view/inc/');
    
    //MODEL_CONTACT
    define('JS_VIEW_CONTACT', SITE_PATH . 'modules/contact/view/js/');
    define ('VIEW_PATH_CONTACT', SITE_ROOT . 'modules/contact/view/');
    
    define('URL_FRIENDLY', TRUE);
