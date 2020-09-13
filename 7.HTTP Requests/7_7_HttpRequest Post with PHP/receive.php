<?php  

//Simpy read the request body and covert it to a PHP object
// file_get_contents("php://input") is how you actually gets the request body
$requestPayload = file_get_contents("php://input");
//you can see it under XHR section in the Chrome inspect. We have received a PHP and inside of header of PHP we can see Request Payload
#var_dump($requestPayload); //JSON String format

//Convert that string we sent through to an actual native PHP object
$phpObject = json_decode($requestPayload);
var_dump($phpObject);

// If you wnat to change the native PHP object into an araay, add 'true' as second arguement
$object1 = json_decode($requestPayload,true);
var_dump($object1);

?>