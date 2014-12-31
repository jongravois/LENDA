<?php

class PracticesTableSeeder extends Seeder {

  public function run()
  {
    Practices::create([
      'practice' => 'IRR'
    ]);

    Practices::create([
      'practice' => 'NI'
    ]);

    Practices::create([
      'practice' => 'FACIR'
    ]);

    Practices::create([
      'practice' => 'FACNI'
    ]);
  }

}