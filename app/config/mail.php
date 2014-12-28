<?php

return array(
	'driver' => 'mandrill',
	'host' => 'smtp.gmail.com',
	'port' => 465,
	'from' => array(
		'address' => 'jongravois@gmail.com',
		'name' => 'Jon Gravois'
	),
	'encryption' => 'ssl',
	'username' => 'jongravois@gmail.com',
	'password' => 'joshjeni1',
	'sendmail' => '/usr/sbin/sendmail -bs',
	'pretend' => false,
);
