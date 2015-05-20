<?php

class PriorlienTableSeeder extends Seeder {

  public function run()
  {
    Priorliens::create([
      'loan_id' => 1,
      'lien_holder' => 'Mason Dixon Loans',
      'city_state' => 'Richland, LA',
      'contact' => 'Dixon Mason',
      'phone' => '3184659221',
      'email' => 'dixon@mason.org',
      'projected_crops' => 120000,
      'fsa_payments' => 1500
    ]);

    Priorliens::create([
        'loan_id' => 1,
        'lien_holder' => 'Mason Dixon Loans',
        'city_state' => 'Richland, LA',
        'contact' => 'Dixon Mason',
        'phone' => '3184659221',
        'email' => 'dixon@mason.org',
        'projected_crops' => 0,
        'fsa_payments' => 35000,
    ]);
  }

}