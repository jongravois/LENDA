<?php

class RatioconstraintsTableSeeder extends Seeder{

	public function run()
	{
		Ratioconstraints::create([
			'constraint' => "Debt to Asset <=",
			'gradeA' => 50,
			'gradeB' => 67,
			'gradeC' => 80,
			'gradeD' => 100
		]);
		Ratioconstraints::create([
			'constraint' => "Current Ratio >=",
			'gradeA' => 150,
			'gradeB' => 100,
			'gradeC' => 67,
			'gradeD' => 50
		]);
		Ratioconstraints::create([
			'constraint' => "Working Capital >=",
			'gradeA' => 20,
			'gradeB' => 0,
			'gradeC' => -20,
			'gradeD' => -50
		]);
		Ratioconstraints::create([
			'constraint' => "Borrowing Capacity >=",
			'gradeA' => 50,
			'gradeB' => 20,
			'gradeC' => 10,
			'gradeD' => 0
		]);
		Ratioconstraints::create([
			'constraint' => "Years Farming >=",
			'gradeA' => 5,
			'gradeB' => 5,
			'gradeC' => 3,
			'gradeD' => 2
		]);
		Ratioconstraints::create([
			'constraint' => "Credit Score",
			'gradeA' => 740,
			'gradeB' => 700,
			'gradeC' => 680,
			'gradeD' => 600
		]);
		Ratioconstraints::create([
			'constraint' => "CPA Financials",
			'gradeA' => 1,
			'gradeB' => 0,
			'gradeC' => 0,
			'gradeD' => 0
		]);
		Ratioconstraints::create([
			'constraint' => "Bankruptcy",
			'gradeA' => 0,
			'gradeB' => 0,
			'gradeC' => 0,
			'gradeD' => 1
		]);
		Ratioconstraints::create([
			'constraint' => "Judgement",
			'gradeA' => 0,
			'gradeB' => 0,
			'gradeC' => 0,
			'gradeD' => 1
		]);
		Ratioconstraints::create([
			'constraint' => "Any Type Max Loan Constraint",
			'gradeA' => 10000000,
			'gradeB' => 5000000,
			'gradeC' => 1000000,
			'gradeD' => 0
		]);
		Ratioconstraints::create([
			'constraint' => "Ag-Pro Max Loan Constraint",
			'gradeA' => 1000000,
			'gradeB' => 500000,
			'gradeC' => 0,
			'gradeD' => 0
		]);
		Ratioconstraints::create([
			'constraint' => "Capital Bridge Max Loan Constraint",
			'gradeA' => 1000000,
			'gradeB' => 500000,
			'gradeC' => 0,
			'gradeD' => 0
		]);
		Ratioconstraints::create([
			'constraint' => "Ag-Vest Max Loan Constraint",
			'gradeA' => 1000000,
			'gradeB' => 500000,
			'gradeC' => 0,
			'gradeD' => 0
		]);
		Ratioconstraints::create([
			'constraint' => "Ag-Pro Max Rate of Avg Revenue",
			'gradeA' => 50,
			'gradeB' => 50,
			'gradeC' => 0,
			'gradeD' => 0
		]);
		Ratioconstraints::create([
			'constraint' => "Capital Bridge Max Rate of Avg Revenue",
			'gradeA' => 35,
			'gradeB' => 30,
			'gradeC' => 25,
			'gradeD' => 0
		]);
		Ratioconstraints::create([
			'constraint' => "Ag-Vest Max Rate of Avg Revenue",
			'gradeA' => 35,
			'gradeB' => 30,
			'gradeC' => 25,
			'gradeD' => 0
		]);
	}

}