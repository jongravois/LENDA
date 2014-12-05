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
			'exception_id'	=>	12,
			'msg'	=>	'Applicant does not plant his own crops.'
		]);
	}
}