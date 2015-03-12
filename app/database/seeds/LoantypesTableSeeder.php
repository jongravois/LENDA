<?php

class LoantypesTableSeeder extends Seeder {

  public function run()
  {
    Loantype::create([
      'loantype' => 'All-In'
    ]);
    Loantype::create([
      'loantype' => 'Ag-Input'
    ]);
    Loantype::create([
      'loantype' => 'Ag-Pro'
    ]);
    Loantype::create([
      'loantype' => 'Ag-Pro Fasttrack'
    ]);
    Loantype::create([
      'loantype' => 'Capital Bridge',
      'default_due_date' => '-3-15'
    ]);
    Loantype::create([
      'loantype' => 'Ag-Vest',
      'default_due_date' => '-3-15'
    ]);
    Loantype::create([
      'loantype' => 'Grain Storage',
      'default_due_date' => '-3-15'
    ]);
  }

}