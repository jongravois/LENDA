<?php

return array(
	'driver' => 'mandrill',
	'host' => 'smtp.gmail.com',
	'port' => 465,
	'from' => array(
		'address' => 'lenda@arm-lenda.com',
		'name' => 'LENDA'
	),
	'encryption' => 'ssl',
	'username' => 'jongravois@gmail.com',
	'password' => 'joshjeni1',
	'sendmail' => '/usr/sbin/sendmail -bs',
	'pretend' => false,
);
