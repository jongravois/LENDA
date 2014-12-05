<?php

class VotestatusTableSeeder extends Seeder {

	public function run()
	{
		Votestatus::create([
			'status'	=>	'Pending'
		]);
		Votestatus::create([
			'status'	=>	'Received'
		]);
		Votestatus::create([
			'status'	=>	'Overdue'
		]);
	}
}