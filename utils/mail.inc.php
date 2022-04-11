<?php
require 'vendor/autoload.php';
use \Mailjet\Resources;
    class mail {
        public static function send_email($email) {
            $jwt = parse_ini_file(UTILS . 'mail.ini');
            $mj = new \Mailjet\Client($jwt['e_1'],$jwt['e_2'],true,['version' => 'v3.1']);
            $body = [
              'Messages' => [
                [
                  'From' => [
                    'Email' => "juanluislopezdaw@gmail.com",
                    'Name' => "Juan Luis"
                  ],
                  'To' => [
                    [
                      'Email' => "juanluislopezdaw@gmail.com",
                      'Name' => "Juan Luis"
                    ]
                  ],
                  'Subject' => "Greetings from Mailjet.",
                  'TextPart' => "My first Mailjet email",
                  'HTMLPart' => "<h3>''</h3><br />May the delivery force be with you!",
                  'CustomID' => "AppGettingStartedTest"
                ]
              ]
            ];
            $response = $mj->post(Resources::$Email, ['body' => $body]);
            $response->success();
            echo json_encode($response->getData());
            exit;
            return $response->getData();

        }
    }