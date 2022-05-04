<?php
require_once(MODEL_PATH . 'JWT.class.php');
class middleware{
    public static function midd_encode($user){

        $jwt = parse_ini_file($_SERVER['DOCUMENT_ROOT'] . '/FW_PHP_OO_JQuery/model/jwt.ini');
        $header = $jwt['header'];
        $secret = $jwt['secret'];
        $payload = '{"iat":"'.time().'","exp":"'.time() + (610).'","name":"'.$user.'"}';
        
        $JWT = new JWT;
        $token = $JWT->encode($header, $payload, $secret);
    
        return $token;
    }
    
    public static function midd_decode($token){

        $jwt = parse_ini_file($_SERVER['DOCUMENT_ROOT'] . '/FW_PHP_OO_JQuery/model/jwt.ini');
        $secret = $jwt['secret'];

        $JWT = new JWT;
        $check = $JWT->decode($token, $secret);

        return $check;
    }
}