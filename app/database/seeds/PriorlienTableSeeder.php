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
      'projected_crops' => 120000.50,
      'ins_over_discount' => 42450,
      'fsa_payments' => 12500.25,
      'claims' => 6000.25,
      'other' => 0,
      'total' => 72951
    ]);
  }

}