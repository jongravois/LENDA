<?php

class InsurancetypesTableSeeder extends Seeder {

	public function run()
	{
		Insurancetype::create([
			'type' => 'CAT'
		]);

		Insurancetype::create([
			'type' => 'RP'
		]);

		Insurancetype::create([
			'type' => 'YP'
		]);

		Insurancetype::create([
			'type' => 'RPHE'
		]);

		Insurancetype::create([
			'type' => 'None'
		]);
	}

}