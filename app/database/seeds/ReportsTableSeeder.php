<?php

class ReportsTableSeeder extends Seeder {

	public function run()
	{
		Report::create([
            'report' => 'Activity Detail',
            'rptPath' => 'actdet',
            'is_required' => 1
		]);

        Report::create([
            'report' => 'Customer Budget',
            'rptPath' => 'cusbud',
            'is_required' => 1
        ]);

        Report::create([
            'report' => 'Account Reconcilliation',
            'rptPath' => 'accrecon',
            'is_required' => 1
        ]);

        Report::create([
            'report' => 'Loan Management',
            'rptPath' => 'lnman',
            'is_required' => 0
        ]);

        Report::create([
            'report' => 'Activity Summary',
            'rptPath' => 'actsum',
            'is_required' => 0
        ]);

        Report::create([
            'report' => 'Available Credit',
            'rptPath' => 'avcred',
            'is_required' => 0
        ]);

        Report::create([
            'report' => 'Cash Flow & (Risk)/Margin',
            'rptPath' => 'cfarm',
            'is_required' => 0
        ]);

        Report::create([
            'report' => 'Farmer History',
            'rptPath' => 'fmrhis',
            'is_required' => 0
        ]);

        Report::create([
            'report' => 'Crop Mix',
            'rptPath' => 'crpmix',
            'is_required' => 1
        ]);

        Report::create([
            'report' => 'Committee Approval',
            'rptPath' => 'comapp',
            'is_required' => 0
        ]);

        Report::create([
            'report' => 'Committee Comment',
            'rptPath' => 'comcom',
            'is_required' => 0
        ]);

        Report::create([
            'report' => 'Repeat Customer',
            'rptPath' => 'repcus',
            'is_required' => 0
        ]);

        Report::create([
            'report' => 'User Audit',
            'rptPath' => 'usradt',
            'is_required' => 0
        ]);
	}

}