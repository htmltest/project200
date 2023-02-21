<?php
    define('SMARTCAPTCHA_SERVER_KEY', 'uahGSHTKJqjaJ0ezlhjrfZKjhzY871dK1h769WCz');

    function check_captcha($token) {
        $ch = curl_init();
        $args = http_build_query([
            "secret" => SMARTCAPTCHA_SERVER_KEY,
            "token" => $token,
            "ip" => $_SERVER['REMOTE_ADDR'], // Нужно передать IP-адрес пользователя.
                                             // Способ получения IP-адреса пользователя зависит от вашего прокси.
        ]);
        curl_setopt($ch, CURLOPT_URL, "https://captcha-api.yandex.ru/validate?$args");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 1);

        $server_output = curl_exec($ch);
        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpcode !== 200) {
            echo '{"status":false, "message":"Сервис временно недоступен"}';
            return true;
        }
        $resp = json_decode($server_output);
        return $resp->status === "ok";
    }

    $token = $_POST['smart-token'];
    if (check_captcha($token)) {
        echo '{"status":true, "title": "Sucess", "message":"Required fields not filled. File not loaded.<br /> An internal server error has occurred"}';
    } else {
        echo '{"status":false, "title": "Failed", "message":"Required fields not filled. File not loaded.<br /> An internal server error has occurred"}';
    }
?>