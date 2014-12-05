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
			'email' => 'cps@distributor.com'
		]);

        Distributor::create([
            'distributor' => 'GPA',
            'name' => 'Greenpoint Agency',
			'email' => 'gpa@distributor.com'
        ]);

        Distributor::create([
            'distributor' => 'HEL',
            'name' => 'Helena',
			'email' => 'hel@distributor.com'
        ]);

        Distributor::create([
            'distributor' => 'JSI',
            'name' => 'Sanders Inc',
			'address' => '5 Ellis Lane',
			'city' => 'Rayville',
			'state_id' => 19,
			'state' => 'LA',
			'zip' => 71269,
			'phone' => '3187283235',
			'email' => 'jsi@distributor.com'
        ]);
	}

}