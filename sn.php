<?php

$action = $_POST['action'];

$email = $_POST['email'];
$pass = $_POST['password'];
$token = $_POST['token'];

$mark = $_POST['mark'];
$since = $_POST['since'];
$length = $_POST['length'];

$notekey = $_POST['notekey'];
$notebody = $_POST['notebody'];
$noteversion = $_POST['noteversion'];

function default_curl_settings(){
	global $handle;
	curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($handle, CURLOPT_HTTPHEADER, array("User-Agent: Notestack/v0.8.2"));
	curl_setopt($handle, CURLOPT_HEADER, false);
};

if($action=='login'){
	$data = base64_encode('email='.$email.'&password='.$pass); // encode data as base64
	$url = 'https://simple-note.appspot.com/api/login'; // set URL
	$handle = curl_init($url); // initiate CURL
	curl_setopt($handle, CURLOPT_POST, true); // set as POST request
	curl_setopt($handle, CURLOPT_POSTFIELDS, $data); // set POST data as encoded username/password
	default_curl_settings();
	$token = curl_exec($handle); // execute POST request, return $token
	echo '{ "token": "'.$token.'" }'; // return data
	exit();
}
elseif($action=='index'){
	$data = 'email='.$email.'&auth='.$token.'&mark='.$mark.'&since='.$since.'&length='.$length;
	$url = 'http://simple-note.appspot.com/api2/index?'.$data;
	$handle = curl_init($url); // initiate CURL
	default_curl_settings();
	$index = curl_exec($handle);
	$http_status = curl_getinfo($handle, CURLINFO_HTTP_CODE);
	if($http_status=='401'){
		echo '401';
	}
	else{
		echo $index;
	};
	exit();
}
elseif($action=='tagIndex'){
	$data = 'email='.$email.'&auth='.$token;
	$url = 'http://simple-note.appspot.com/api2/tags?'.$data;
	$handle = curl_init($url); // initiate CURL
	default_curl_settings();
	$index = curl_exec($handle);
	echo $index;
	exit();
}
elseif($action=='note'){
	$data = '/'.$notekey.'?email='.$email.'&auth='.$token;
	$url = 'http://simple-note.appspot.com/api2/data'.$data;
	$handle = curl_init($url); // initiate CURL
	default_curl_settings();
	$note = curl_exec($handle);
	echo $note;
	exit();
}
elseif($action=='noteversion'){
	$data = '/'.$notekey.'/'.$noteversion.'?email='.$email.'&auth='.$token;
	$url = 'http://simple-note.appspot.com/api2/data'.$data;
	$handle = curl_init($url); // initiate CURL
	default_curl_settings();
	$note = curl_exec($handle);
	echo $note;
	exit();
}
elseif($action=='sendnote'){
	if($notekey!=""){
		$data = '/'.$notekey;
	};
	$data = $data.'?email='.$email.'&auth='.$token;
	$url = 'http://simple-note.appspot.com/api2/data'.$data;
	$handle = curl_init($url); // initiate CURL
	curl_setopt($handle, CURLOPT_POST, true); // set as POST request
	curl_setopt($handle, CURLOPT_POSTFIELDS, $notebody); 
	default_curl_settings();
	$note = curl_exec($handle); // execute POST request, return $token
	echo $note;
	exit();
};
	
?>