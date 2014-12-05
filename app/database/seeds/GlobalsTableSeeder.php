<?php

class GlobalsTableSeeder extends Seeder {

	public function run()
	{
		Globals::create([
			'crop_year' => '2015',
			'season' => 'S'
		]);
	}

}