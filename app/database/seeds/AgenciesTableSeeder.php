<?php

class AgenciesTableSeeder extends Seeder {

  public function run()
  {
    Agency::create([
      'agency' => 'Rayville State Farm',
      'address' => '1 Good Neighbor',
      'city' => 'Rayville',
      'state_id' => 19,
      'state' => 'LA',
      'zip' => 71269,
      'phone' => '3189803201',
      'email' => 'rsf@agency.com'
    ]);

    Agency::create([
      'agency' => 'Tom Collins of Jonesboro Nationwide Insurance',
      'address' => '51 Cocktails Drive',
      'city' => 'Jonesboro',
      'state_id' => 4,
      'state' => 'AR',
      'zip' => 38889,
      'phone' => '5015259210',
      'email' => 'tom@collins.com'
    ]);
  }

}