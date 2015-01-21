<?php

class SpendcatsTableSeeder extends Seeder {

	public function run()
	{
		Spendcat::create([
			'category'	=> 'fertilizer'
		]);
		Spendcat::create([
			'category'	=> 'seed'
		]);
		Spendcat::create([
			'category'	=> 'fungicide'
		]);
		Spendcat::create([
			'category'	=> 'herbicide'
		]);
		Spendcat::create([
			'category'	=> 'insecticide'
		]);
		Spendcat::create([
			'category'	=> 'custom'
		]);
		Spendcat::create([
			'category'	=> 'fuel'
		]);
		Spendcat::create([
			'category'	=> 'labor'
		]);
		Spendcat::create([
			'category'	=> 'repairs'
		]);
		Spendcat::create([
			'category'	=> 'insurance'
		]);
		Spendcat::create([
			'category'	=> 'harvesting'
		]);
		Spendcat::create([
			'category'	=> 'misc_acres'
		]);
	}

}