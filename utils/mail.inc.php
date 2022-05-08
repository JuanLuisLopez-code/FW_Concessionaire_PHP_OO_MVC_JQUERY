<?php
require 'vendor/autoload.php';
use \Mailjet\Resources;
    class mail {
        public static function send_email($user, $email, $email_token_register) {
            $email_token = parse_ini_file(UTILS . 'mail.ini');
            $mj = new \Mailjet\Client($email_token['e_1'],$email_token['e_2'],true,['version' => 'v3.1']);
            $body = [
              'Messages' => [
                [
                  'From' => [
                    'Email' => "juanluislopezdaw@gmail.com",
                    'Name' => "Juan Luis"
                  ],
                  'To' => [
                    [
                      'Email' => "$email",
                      'Name' => "$user"
                    ]
                  ],
                  'Subject' => "Greetings from Mailjet.",
                  'TextPart' => "My first Mailjet email",
                  'HTMLPart' => "<h3>'Registro'</h3><br/>
                                 <p>
                                 <a href=http://localhost/FW_PHP_OO_JQuery/index.php?page=login&op=view&$email_token_register&verify> Pulse aqui para validar su registro </a>
                                 </p>",
                  'CustomID' => "AppGettingStartedTest"
                ]
              ]
            ];
            $response = $mj->post(Resources::$Email, ['body' => $body]);
            $response->success();
            return $response->getData();
        }

        public static function recovery_email($email, $email_token_register) {
          $email_token = parse_ini_file(UTILS . 'mail.ini');
          $mj = new \Mailjet\Client($email_token['e_1'],$email_token['e_2'],true,['version' => 'v3.1']);
          $body = [
            'Messages' => [
              [
                'From' => [
                  'Email' => "juanluislopezdaw@gmail.com",
                  'Name' => "Juan Luis"
                ],
                'To' => [
                  [
                    'Email' => "$email",
                    'Name' => "$email"
                  ]
                ],
                'Subject' => "Greetings from Mailjet.",
                'TextPart' => "My first Mailjet email",
                'HTMLPart' => "<h3>'Cambio contraseña'</h3><br/>
                               <p>
                               <a href=http://localhost/FW_PHP_OO_JQuery/index.php?page=login&op=view&$email_token_register&recovery> Pulse aqui para validar su cambio de contraseña </a>
                               </p>",
                'CustomID' => "AppGettingStartedTest"
              ]
            ]
          ];
          $response = $mj->post(Resources::$Email, ['body' => $body]);
          $response->success();
          return $response->getData();
      }
    }