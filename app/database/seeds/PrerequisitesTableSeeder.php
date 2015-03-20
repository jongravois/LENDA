<?php

class PrerequisitesTableSeeder extends Seeder {
	public function run()
	{
		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "Driver's License",
			'date_requested' => '2014-09-02',
			'date_received' => '2014-09-02',
			'path' => '2015_1/',
			'filename' => 'driversLicense.pdf'
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "Financials",
			'date_requested' => '2014-09-02',
			'reason_pending' => 'Client unprepared'
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "Equipment List",
			'date_requested' => '2014-09-02',
			'date_received' => '2014-09-02',
			'path' => '2015_1/',
			'filename' => 'equipmentList.pdf'
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "Leases"
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "FSA Information"
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "Insurance Information"
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "Crop Insurance Info & Database"
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "Grain Contracts"
		]);

	}
}