<?php

class ReferencesTableSeeder extends Seeder {

  public function run()
  {
    Reference::create([
      'loan_id' => 1,
      'creditor' => 'Galaxy Credit',
      'city_state' => 'Delhi, LA',
      'contact' => 'Joan London',
      'phone' => '3183455294',
      'email' => 'joan@london.com'
    ]);
  }

}