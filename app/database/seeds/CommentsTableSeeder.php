<?php

class CommentsTableSeeder extends Seeder {

	public function run()
	{
		Comment::create([
			"loan_id" =>	1,
			"type" =>	"Committee",
			'user_id' => 2,
			"comment" =>	"There are concerns about the ability to manage the reception of a large cash sum as evidenced by last year's performance of this applicant."
		]);

		Comment::create([
			'loan_id' =>	1,
			'type' =>	'Committee',
			'user_id' => 2,
			'comment' => 'I will approve provided there is a controlled disbursement.'
		]);

		Comment::create([
			'loan_id'	=>	1,
			'type'		=>	'Loan',
			'user_id' => 5,
			'comment'	=>	'The requested loan will pay off the 2014 loan and provide resources for the 2015 Crop Year. Tony has been a valued customer for 3 years and has moved his crop insurance to our subsidiary.'
		]);

		Comment::create([
			'loan_id' => 1,
			'type' => 'LENDA',
			'user_id' => 1,
			'comment' => 'Warning: Bankruptcy History Indication requires a Court Order to Incur Debt.'
		]);

		Comment::create([
			'loan_id'	=>	1,
			'type'		=>	'Analyst',
			'user_id' => 5,
			'comment'	=>	'Applicant would prefer not to tie up his third-party credit and would like to see if the loan will be approved without it. If not, he is willing to commit third-party credits.'
		]);

		Comment::create([
			'loan_id'	=>	1,
			'type'		=>	'Account',
			'user_id' => 7,
			'comment'	=>	'Transferred $30,000 from Misc to Equipment.'
		]);
	}

}