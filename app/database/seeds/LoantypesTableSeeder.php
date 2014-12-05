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
      'ltPath'   => 'cbr'
    ]);
    Loantype::create([
      'loantype' => 'Ag-Vest',
      'ltPath'   => 'agv'
    ]);
    Loantype::create([
      'loantype' => 'Grain Storage',
      'ltPath'   => 'grs'
    ]);
  }

}