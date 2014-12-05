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
			'role'	=>	'CEO'
		]);
		Role::create([
			'abr'	=>	'REG',
			'role'	=>	'Regional'
		]);
		Role::create([
			'abr'	=>	'MGR',
			'role'	=>	'Manager'
		]);
		Role::create([
			'abr'	=>	'ANL',
			'role'	=>	'Analyst'
		]);
		Role::create([
			'abr'	=>	'SUP',
			'role'	=>	'Support'
		]);
		Role::create([
			'abr'	=>	'IT',
			'role'	=>	'IT'
		]);
		Role::create([
			'abr'	=>	'SYS',
			'role'	=>	'System'
		]);
	}
}