<?php

class LoanexceptionsTableSeeder extends Seeder {
	public function run()
	{
		Loanexceptions::create([
			'loan_id'	=>	1,
			'exception_id'	=>	1,
			'msg'	=>	'This is an Ag-Input loan where ARM and JSI are partnering on the total commitment.'
		]);

		Loanexceptions::create([
			'loan_id'	=>	1,
			'exception_id'	=>	2,
			'msg'	=>	"Applicant is rated 'B'."
		]);

		Loanexceptions::create([
			'loan_id'	=>	1,
			'exception_id'	=>	9,
			'msg'	=>	"Cash Rent waivers were utilized"
		]);

		Loanexceptions::create([
			'loan_id'	=>	1,
			'exception_id'	=>	11,
			'msg'	=>	'Variable harvesting expenses was utilized.'
		]);
	}
}