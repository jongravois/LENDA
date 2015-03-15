<?php

class RolesTableSeeder extends Seeder {

	public function run()
	{
		Role::create([
			'abr'	=>	'PRE',
			'role'	=>	'President'
		]);
		Role::create([
			'abr'	=>	'CEO',
			'role'	=>	'Chief Executive Officer'
		]);
		Role::create([
			'abr'	=>	'ABM',
			'role'	=>	'Area Business Manager'
		]);
		Role::create([
			'abr'	=>	'MGR',
			'role'	=>	'Office Manager'
		]);
		Role::create([
			'abr'	=>	'OAS',
			'role'	=>	'Office Assitant'
		]);
		Role::create([
			'abr'	=>	'LBM',
			'role'	=>	'Loan Business Manager'
		]);
        Role::create([
            'abr'	=>	'LOF',
            'role'	=>	'Loan Officer'
        ]);
        Role::create([
            'abr'	=>	'LAN',
            'role'	=>	'Loan Analyst'
        ]);
        Role::create([
            'abr'	=>	'CON',
            'role'	=>	'Controller/Compliance'
        ]);
        Role::create([
            'abr'	=>	'HRM',
            'role'	=>	'Human Resources Manager'
        ]);
        Role::create([
            'abr'	=>	'IBM',
            'role'	=>	'Insurance Business Manager'
        ]);
        Role::create([
            'abr'	=>	'IAS',
            'role'	=>	'Insurance Analyst'
        ]);
        Role::create([
            'abr'	=>	'COM',
            'role'	=>	'Commissioned Agent',
            'employment_status' => 0
        ]);
		Role::create([
			'abr'	=>	'IT',
			'role'	=>	'IT',
            'employment_status' => 0
		]);
        Role::create([
            'abr'	=>	'SUP',
            'role'	=>	'Other Support',
            'employment_status' => 0
        ]);
		Role::create([
			'abr'	=>	'SYS',
			'role'	=>	'System',
            'employment_status' => 0
		]);
	}
}