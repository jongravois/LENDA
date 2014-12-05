<?php

class InsuranceoptionsTableSeeder extends Seeder {

	public function run()
	{
		Insuranceoption::create([
			'option' => 'EUBUPT'
		]);

		Insuranceoption::create([
			'option' => 'BU'
		]);

		Insuranceoption::create([
			'option' => 'RP'
		]);

		Insuranceoption::create([
			'option' => 'PT'
		]);

		Insuranceoption::create([
			'option' => 'PF'
		]);
	}

}