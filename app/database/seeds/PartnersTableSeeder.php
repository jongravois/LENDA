<?php

class PartnersTableSeeder extends Seeder {

	public function run()
	{
		Partners::create([
			'loan_id' => 1,
			'partner' => 'Dick Grayson',
			'ssn' => '918273645',
			'address' => '1 Bat Cave',
			'city' => 'Natural',
			'state_id' => 4,
			'zip' => '77631',
			'email' => 'robin@dccomics.com',
			'phone' => '5125551020'
		]);

		Partners::create([
			'loan_id' => 1,
			'partner' => 'Alfred Pennyworth',
			'ssn' => '991827364',
			'address' => '1 Wayne Mansion',
			'city' => 'Natural',
			'state_id' => 4,
			'zip' => '77631',
			'email' => 'alfred@dccomics.com',
			'phone' => '5125559999'
		]);
	}
}