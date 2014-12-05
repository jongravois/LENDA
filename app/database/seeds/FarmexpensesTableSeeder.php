<?php

class FarmexpensesTableSeeder extends Seeder {

	public function run()
	{
		Farmexpense::create([
			'crop_year'	=> 	2015,
			'loan_id'	=>	1,
			'expense'	=> 	'Equipment',
			'cost'		=>	23196
		]);
	}
}