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
      'ins_over_discount' => 12500,
      'fsa_payments' => 1500,
      'claims' => 6000,
      'equipment' => 10000,
      'realestate' => 20000,
      'other' => 0
    ]);

    Priorliens::create([
        'loan_id' => 1,
        'lien_holder' => 'Mason Dixon Loans',
        'city_state' => 'Richland, LA',
        'contact' => 'Dixon Mason',
        'phone' => '3184659221',
        'email' => 'dixon@mason.org',
        'projected_crops' => 0,
        'ins_over_discount' => 0,
        'fsa_payments' => 0,
        'claims' => 0,
        'equipment' => 6250,
        'realestate' => 0,
        'other' => 0
    ]);
  }

}