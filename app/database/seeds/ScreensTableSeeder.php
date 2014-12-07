<?php

class ScreensTableSeeder extends Seeder {

  public function run()
  {
    Screen::create([
      'loantype_id' => 1,
      'screen' => 'farmer',
      'sort_order' => 1
    ]);

    Screen::create([
      'loantype_id' => 1,
      'screen' => 'applicant',
      'sort_order' => 2
    ]);

    Screen::create([
      'loantype_id' => 1,
      'screen' => 'quests',
      'sort_order' => 3
    ]);

    Screen::create([
      'loantype_id' => 1,
      'screen' => 'crops',
      'sort_order' => 4
    ]);

    Screen::create([
      'loantype_id' => 1,
      'screen' => 'yield',
      'sort_order' => 5
    ]);

    Screen::create([
      'loantype_id' => 1,
      'screen' => 'farms',
      'sort_order' => 6
    ]);

    Screen::create([
      'loantype_id' => 1,
      'screen' => 'insurance',
      'sort_order' => 7
    ]);

    Screen::create([
      'loantype_id' => 1,
      'screen' => 'expenses',
      'sort_order' => 8
    ]);

    Screen::create([
      'loantype_id' => 1,
      'screen' => 'financials',
      'sort_order' => 8
    ]);

    Screen::create([
      'loantype_id' => 2,
      'screen' => 'farmer',
      'sort_order' => 1
    ]);

    Screen::create([
      'loantype_id' => 2,
      'screen' => 'applicant',
      'sort_order' => 2
    ]);

    Screen::create([
      'loantype_id' => 2,
      'screen' => 'distributor',
      'sort_order' => 3
    ]);

    Screen::create([
      'loantype_id' => 2,
      'screen' => 'quests',
      'sort_order' => 4
    ]);

    Screen::create([
      'loantype_id' => 2,
      'screen' => 'crops',
      'sort_order' => 5
    ]);

    Screen::create([
      'loantype_id' => 2,
      'screen' => 'yield',
      'sort_order' => 6
    ]);

    Screen::create([
      'loantype_id' => 2,
      'screen' => 'farms',
      'sort_order' => 7
    ]);

    Screen::create([
      'loantype_id' => 2,
      'screen' => 'insurance',
      'sort_order' => 8
    ]);

    Screen::create([
      'loantype_id' => 2,
      'screen' => 'expenses',
      'sort_order' => 9
    ]);

    Screen::create([
      'loantype_id' => 2,
      'screen' => 'financials',
      'sort_order' => 10
    ]);

    Screen::create([
      'loantype_id' => 3,
      'screen' => 'farmer',
      'sort_order' => 1
    ]);

    Screen::create([
      'loantype_id' => 3,
      'screen' => 'applicant',
      'sort_order' => 1
    ]);

    Screen::create([
      'loantype_id' => 4,
      'screen' => 'farmer',
      'sort_order' => 1
    ]);

    Screen::create([
      'loantype_id' => 4,
      'screen' => 'applicant',
      'sort_order' => 1
    ]);

    Screen::create([
      'loantype_id' => 5,
      'screen' => 'farmer',
      'sort_order' => 1
    ]);

    Screen::create([
      'loantype_id' => 5,
      'screen' => 'applicant',
      'sort_order' => 1
    ]);

    Screen::create([
      'loantype_id' => 6,
      'screen' => 'farmer',
      'sort_order' => 1
    ]);

    Screen::create([
      'loantype_id' => 6,
      'screen' => 'applicant',
      'sort_order' => 1
    ]);

    Screen::create([
      'loantype_id' => 7,
      'screen' => 'farmer',
      'sort_order' => 1
    ]);

    Screen::create([
      'loantype_id' => 7,
      'screen' => 'applicant',
      'sort_order' => 1
    ]);
  }

}