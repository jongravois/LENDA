<?php

class LoandistributorTableSeeder extends Seeder {

	public function run()
	{
		Loandistributor::create([
			'loan_id' => 1,
			'distributor_id' => 6,
			'contact' => 'Marie Osmond',
			'phone' => '3189991212',
			'email' => 'marie@jsi.local'
		]);
	}

}