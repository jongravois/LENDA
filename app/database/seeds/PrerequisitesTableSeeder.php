<?php

class PrerequisitesTableSeeder extends Seeder {
	public function run()
	{
		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "DriversLicense",
			'title' => "Driver's License",
			'date_requested' => '2014-09-02',
			'date_received' => '2014-09-02',
			'path' => '2015_1/',
			'filename' => 'driversLicense.pdf'
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "Financials",
			'title' => "Financials",
			'date_requested' => '2014-09-02',
			'reason_pending' => 'Client unprepared'
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "EquipmentList",
			'title' => "Equipment List",
			'date_requested' => '2014-09-02',
			'date_received' => '2014-09-02',
			'path' => '2015_1/',
			'filename' => 'equipmentList.pdf'
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "Leases",
			'title' => "Leases"
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "FSAInformation",
			'title' => "FSA Information"
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "InsuranceInformation",
			'title' => "Insurance Information"
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "CropInsuranceInfoDatabase",
			'title' => "Crop Insurance Info & Database"
		]);

		Prerequisites::create([
			'loan_id'	=>	1,
			'document' => "GrainContracts",
			'title' => "Grain Contracts"
		]);

		Prerequisites::create([
			'loan_id'	=>	2,
            'document' => "DriversLicense",
            'title' => "Driver's License",
            'path' => '2015_2/'
		]);

	}
}