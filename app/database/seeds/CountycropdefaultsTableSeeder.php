<?php

class CountycropdefaultsTableSeeder extends Seeder {

  public function run()
  {
    for($c=1; $c<3240; $c++){
      Countycropdefault::create([
        'county_id' => $c
      ]);
    } // end for
  }

}