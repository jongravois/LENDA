<?php

class GrainstorageTableSeeder extends Seeder {

  public function run()
  {
    Grainstorage::create([
      'loan_id' => 7,
      'contract_number' => 'Jazzman',
      'contract_date' => '2015-09-01',
      'delivery_date' => '2016-04-30',
      'commodity' => 'rice',
      'grain_buyer' => 'Holly Ridge Rice & Grain',
      'lien_holder' => 'Ag Resource Management',
      'contract_amount' => 11000,
      'contract_price' => 17.9000,
      'owner_share' => 20.0,
      'revenue' => 157520,
      'eligible_proceeds' => 118140,
      'amount_requested' => 200000
    ]);

    Grainstorage::create([
      'loan_id' => 7,
      'contract_number' => 'Hybrid',
      'contract_date' => '2015-09-01',
      'delivery_date' => '2016-04-30',
      'commodity' => 'rice',
      'grain_buyer' => 'Holly Ridge Rice & Grain',
      'lien_holder' => 'Ag Resource Management',
      'contract_amount' => 28000,
      'contract_price' => 15.5500,
      'owner_share' => 20.0,
      'revenue' => 348320,
      'eligible_proceeds' => 261240,
      'amount_requested' => 200000
    ]);
  }

}