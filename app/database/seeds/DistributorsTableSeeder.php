<?php

class DistributorsTableSeeder extends Seeder {

	public function run()
	{
		Distributor::create([
			'distributor' => "Don't Know",
			'name' => "Unsure / Don't Know"
		]);

		Distributor::create([
			'distributor' => 'Other',
			'name' => 'Other'
		]);

		Distributor::create([
			'distributor' => 'CPS',
			'name' => 'Crop Production Services',
			'locale' => 'Dallas, TX',
			'email' => 'cps@distributor.com',
			'phone' => '7775551212'
		]);

		Distributor::create([
			'distributor' => 'GPA',
			'name' => 'Greenpoint Agency',
			'locale' => 'Akiapa, Greenland',
			'email' => 'gpa@distributor.com',
			'phone' => '8885551212'
		]);

		Distributor::create([
			'distributor' => 'HEL',
			'name' => 'Helena',
			'locale' => 'Helena, AR',
			'email' => 'hel@distributor.com',
			'phone' => '9995551212'
		]);

		Distributor::create([
			'distributor' => 'JSI',
			'name' => 'Sanders Inc',
			'address' => '5 Ellis Lane',
			'city' => 'Rayville',
			'state_id' => 19,
			'state' => 'LA',
			'zip' => 71269,
			'locale' => 'Rayville, LA',
			'phone' => '3187283235',
			'email' => 'jsi@distributor.com'
		]);
	}

}