<?php

class VotesTableSeeder extends Seeder {

	public function run()
	{
		Votes::create([
			'vote'	=>	'Approve'
		]);
		Votes::create([
			'vote'	=>	'Disapprove'
		]);
		Votes::create([
			'vote'	=>	'Abstain'
		]);
	}
}