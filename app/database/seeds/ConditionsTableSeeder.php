<?php

class ConditionsTableSeeder extends Seeder {

	public function run()
	{
		Conditions::create([
			'condition'	=>	'Agricultural Security Agreement on Crops and Equipment'
		]);
		Conditions::create([
			'condition'	=>	'Assignment of Crop Insurance'
		]);
		Conditions::create([
			'condition'	=>	'Assignment of Rebates'
		]);
		Conditions::create([
			'condition'	=>	'Approval by Distributor'
		]);
		Conditions::create([
			'condition'	=>	'Personal Guarantee'
		]);
		Conditions::create([
			'condition'	=>	'Cross-Collateralize'
		]);
		Conditions::create([
			'condition'	=>	'Freeform Conditions'
		]);
		Conditions::create([
			'condition'	=>	'Controlled Disbursements'
		]);
		Conditions::create([
			'condition'	=>	'Assignment of FSA Direct and LDP Payment'
		]);
	}
}