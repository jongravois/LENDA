<?php

class LoantypesTableSeeder extends Seeder
{

    public function run()
    {
        Loantype::create([
            'loantype' => 'All-In',
            'abr' => 'ALL',
            'sort_order' => 2
        ]);
        Loantype::create([
            'loantype' => 'Ag-Input',
            'abr' => 'AGI',
            'sort_order' => 1
        ]);
        Loantype::create([
            'loantype' => 'Ag-Pro',
            'abr' => 'AGP',
            'sort_order' => 3
        ]);
        Loantype::create([
            'loantype' => 'Ag-Pro Fasttrack',
            'abr' => 'AGF',
            'sort_order' => 4
        ]);
        Loantype::create([
            'loantype' => 'Capital Bridge',
            'default_due_date' => '-3-15',
            'abr' => 'CAP',
            'sort_order' => 5
        ]);
        Loantype::create([
            'loantype' => 'Ag-Vest',
            'default_due_date' => '-3-15',
            'abr' => 'VST',
            'sort_order' => 7
        ]);
        Loantype::create([
            'loantype' => 'Grain Storage',
            'default_due_date' => '-3-15',
            'abr' => 'STO',
            'sort_order' => 6
        ]);
    }

}