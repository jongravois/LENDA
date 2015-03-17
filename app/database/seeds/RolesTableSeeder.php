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
			'role'	=>	'Chief Executive Officer',
            'matrix' => 1
		]);
		Role::create([
			'abr'	=>	'ABM',
			'role'	=>	'Area Business Manager',
            'matrix' => 1
		]);
		Role::create([
			'abr'	=>	'MGR',
			'role'	=>	'Office Manager',
            'matrix' => 1
		]);
		Role::create([
			'abr'	=>	'OAS',
			'role'	=>	'Office Assitant',
            'matrix' => 1
		]);
		Role::create([
			'abr'	=>	'LBM',
			'role'	=>	'Loan Business Manager',
            'matrix' => 1
		]);
        Role::create([
            'abr'	=>	'LOF',
            'role'	=>	'Loan Officer',
            'matrix' => 1
        ]);
        Role::create([
            'abr'	=>	'LAN',
            'role'	=>	'Loan Analyst',
            'matrix' => 1
        ]);
        Role::create([
            'abr'	=>	'CON',
            'role'	=>	'Controller/Compliance',
            'matrix' => 1
        ]);
        Role::create([
            'abr'	=>	'HRM',
            'role'	=>	'Human Resources Manager',
            'matrix' => 1
        ]);
        Role::create([
            'abr'	=>	'IBM',
            'role'	=>	'Insurance Business Manager',
            'matrix' => 1
        ]);
        Role::create([
            'abr'	=>	'IAS',
            'role'	=>	'Insurance Assistant',
            'matrix' => 1
        ]);
        Role::create([
            'abr'	=>	'COM',
            'role'	=>	'Commissioned Agent',
            'employment_status' => 0,
            'matrix' => 1
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