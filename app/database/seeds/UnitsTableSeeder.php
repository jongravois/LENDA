<?php

class UnitsTableSeeder extends Seeder {

	public function run()
	{
		//60lbs -> bushel
		Units::create([
			'unit' => 'bushel',
			'abr' => 'bu',
			'toPounds' => 60,
			'fromPounds' => .000018
		]);

		//1lb -> pound
		Units::create([
			'unit' => 'pound',
			'abr' => 'lb',
			'toPounds' => 1,
			'fromPounds' => 1
		]);

		Units::create([
			'unit' => 'hundredweight',
			'abr' => 'cwt',
			'toPounds' => 100,
			'fromPounds' => .01
		]);

		Units::create([
			'unit' => 'ton',
			'abr' => 'ton',
			'toPounds' => 2000,
			'fromPounds' => .005
		]);

		Units::create([
			'unit' => 'barrel',
			'abr' => 'bbl',
			'toPounds' => 162,
			'fromPounds' => .00357
		]);

		//500 lbs -> bale
		Units::create([
			'unit' => 'bale',
			'abr' => 'bl',
			'toPounds' => 500,
			'fromPounds' => .002
		]);
	}

}