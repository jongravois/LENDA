<?php

class LoantypesTableSeeder extends Seeder {

  public function run()
  {
    Loantype::create([
      'loantype' => 'All-In',
      'ltPath'   => 'ali'
    ]);
    Loantype::create([
      'loantype' => 'Ag-Input',
      'ltPath'   => 'agi'
    ]);
    Loantype::create([
      'loantype' => 'Ag-Pro',
      'ltPath'   => 'agp'
    ]);
    Loantype::create([
      'loantype' => 'Ag-Pro fasttrack',
      'ltPath'   => 'apf'
    ]);
    Loantype::create([
      'loantype' => 'Capital Bridge',
      'ltPath'   => 'cbr',
      'default_due_date' => '-3-15'
    ]);
    Loantype::create([
      'loantype' => 'Ag-Vest',
      'ltPath'   => 'agv',
      'default_due_date' => '-3-15'
    ]);
    Loantype::create([
      'loantype' => 'Grain Storage',
      'ltPath'   => 'grs',
      'default_due_date' => '-3-15'
    ]);
  }

}