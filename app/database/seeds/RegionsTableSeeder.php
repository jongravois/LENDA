<?php

class RegionsTableSeeder extends Seeder {

  public function run()
  {
    Region::create([
      'region'	=>	'Corporate'
    ]);
    Region::create([
      'region'	=>	'East'
    ]);
    Region::create([
      'region'	=>	'West'
    ]);
    Region::create([
        'region'	=>	'Mid-West'
    ]);
  }
}