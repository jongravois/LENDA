<?php

class SystemicsTableSeeder extends Seeder{

	public function run()
	{

		Systemics::create([
			"loan_id"	=>	"1",
      "user"		=>	"Jonathan Gravois",
      "action"	=>	"Created loan",
			"created_at"	=>	"2014-06-30 09:10:00"
		]);

		Systemics::create([
			"loan_id"	=>	"2",
			"user"		=>	"Jonathan Gravois",
			"action"	=>	"Created loan"
		]);

		Systemics::create([
			"loan_id"	=>	"3",
			"user"		=>	"Jonathan Gravois",
			"action"	=>	"Created loan"
		]);

		Systemics::create([
			"loan_id"	=>	"4",
			"user"		=>	"Jonathan Gravois",
			"action"	=>	"Created loan"
		]);

		Systemics::create([
			"loan_id"	=>	"5",
			"user"		=>	"Jonathan Gravois",
			"action"	=>	"Created loan"
		]);

		Systemics::create([
			"loan_id"	=>	"6",
			"user"		=>	"Jonathan Gravois",
			"action"	=>	"Created loan"
		]);

		Systemics::create([
			"loan_id"	=>	"7",
			"user"		=>	"Jonathan Gravois",
			"action"	=>	"Created loan"
		]);

		Systemics::create([
			"loan_id"	=>	"8",
			"user"		=>	"Jonathan Gravois",
			"action"	=>	"Created loan"
		]);
	}

}