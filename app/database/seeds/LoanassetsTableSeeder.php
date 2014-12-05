<?php

class LoanassetsTableSeeder extends Seeder {

	public function run()
	{
		Loanassets::create([
			'loan_id' => 1,
			'total_arm' => 123379.80,
			'total_dist' => 109218.25,
			'total_other' => 87223.42,
			'total_total' => 1430239.67
		]);
	}

}