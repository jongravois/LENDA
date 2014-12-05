<?php

class JointventuresTableSeeder extends Seeder {

	public function run()
	{
		Jointventure::create([
			'loan_id' => 1,
			'partner' => 'Loki',
			'ssn' => '432123456',
			'address' => 'Royal Dungeon',
			'city' => 'Rainbow Bridge',
			'state_id' => 4,
			'zip' => '77631',
			'email' => 'loki@asgard.com',
			'phone' => '5125551212'
		]);
	}
}