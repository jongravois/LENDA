<?php

class AffiliateTableSeeder extends Seeder {

  public function run()
  {
    Affiliate::create([
      'loan_id' => 1,
      'entity_name' => 'MoreBetterCrops',
      'percent_owned' => 10.5
    ]);
  }

}