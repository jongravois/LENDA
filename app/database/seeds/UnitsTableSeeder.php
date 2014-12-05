<?php

class UnitsTableSeeder extends Seeder {

	public function run()
	{
		Units::create([
			'unit' => 'bushel',
			'abr' => 'bu'
		]);

		Units::create([
			'unit' => 'pound',
			'abr' => 'lb'
		]);

		Units::create([
			'unit' => 'hundredweight',
			'abr' => 'cwt'
		]);

		Units::create([
			'unit' => 'ton',
			'abr' => 'ton'
		]);

		Units::create([
			'unit' => 'barrel',
			'abr' => 'bbl'
		]);

		Units::create([
			'unit' => 'bale',
			'abr' => 'bl'
		]);
	}

}