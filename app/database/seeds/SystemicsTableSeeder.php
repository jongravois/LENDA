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
			"loan_id"	=>	"1",
			"user"		=>	"Jonathan Gravois",
			"action"	=>	"Uploaded driver's license",
			"created_at"	=>	"2014-06-30 09:16:00"
		]);

		Systemics::create([
			"loan_id" => "1",
            "user" => "Jonathan Gravois",
            "created_at" => "2014-06-30 09:17:00",
            "action" => "Uploaded prepared financials"
		]);

		Systemics::create([
			"loan_id" => "1",
			"user" => "Jonathan Gravois",
			"created_at" => "2014-06-30 09:19:00",
			"action" => "Uploaded equipment listing"
		]);

		Systemics::create([
			"loan_id" => "1",
			"user" => "Vinny Barbarino",
			"created_at" => "2014-07-02 10:09:35",
			"action" => "Modified applicant phone number"
		]);

		Systemics::create([
			"loan_id" => "1",
			"user" => "Jonathan Gravois",
			"created_at" => "2014-07-04 16:25:08",
			"action" => "Verified ITS List"
		]);

		Systemics::create([
			"loan_id" => "1",
			"user" => "Jonathan Gravois",
			"created_at" => "2014-07-04 16:26:18",
			"action" => "Verified FSA Eligibility"
		]);

		Systemics::create([
			"loan_id" => "1",
			"user" => "Jonathan Gravois",
			"created_at" => "2014-07-04 16:27:00",
			"action" => "Verified prior lien"
		]);

		Systemics::create([
			"loan_id" => "1",
			"user" => "Jonathan Gravois",
			"created_at" => "2014-07-04 16:28:20",
			"action" => "Uploaded lease"
		]);

		Systemics::create([
			"loan_id" => "1",
			"user" => "LENDA",
			"created_at" => "2014-07-04 16:28:20",
			"action" => "Verified lease"
		]);

		Systemics::create([
			"loan_id" => 1,
			"user" => "Jonathan Gravois",
			"created_at" => "2014-07-05 09:01:02",
			"action" => "Sent loan to distributor for approval"
		]);
	}

}