<?php

class ResponsesTableSeeder extends Seeder {

	public function run()
	{
		Commentresponse::create([
			'loan_id' => 1,
			'comment_id' => 1,
			'user_id' => 5,
			'body' => "Applicant admitted that he was unprepared for the funds last year and made some foolish purchases early in the loan. He has learned from his mistakes and is receptive to a controlled disbursment."
		]);
	}

}