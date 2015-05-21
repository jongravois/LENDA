<?php

class LocationsTableSeeder extends Seeder{

  public function run()
  {
    Location::create([
      'location' =>  'ARM Corporate',
      'loc_abr' =>  'ARM',
      'address' =>  '',
      'city' =>  '',
      'state' =>  '',
      'zip' =>  '',
      'phone' =>  '',
      'manager_id' =>  3,
      'region_id' =>	1
    ]);

    Location::create([
      'location' =>  'Cleveland',
      'loc_abr' =>  'CLE',
      'address' =>  '201 E. Sunflower Road, Suite 10',
      'city' =>  'Cleveland',
      'state' =>  'MS',
      'zip' =>  '38732',
      'phone' =>  '6628430944',
      'manager_id' =>  3,
      'region_id' =>	1
    ]);

    Location::create([
      'location' =>  'Crowley',
      'loc_abr'  =>  'CRO',
      'address' =>  '121 East Fifth Street',
      'city' =>  'Crowley',
      'state' =>  'LA',
      'zip' =>  '70526',
      'phone' =>  '3372504488',
      'manager_id' =>  3,
      'region_id' =>	2
    ]);

    Location::create([
      'location' =>  'Jonesboro',
      'loc_abr' =>  'JON',
      'address' =>  '2524 Alexander Drive, Suite D',
      'city'=>  'Jonesboro',
      'state' =>  'AR',
      'zip' =>  '72401',
      'phone' =>  '8703362620',
      'manager_id' =>  4,
      'region_id' =>	3
    ]);

    Location::create([
      'location' =>  'Rayville',
      'loc_abr' =>  'RAY',
      'address' =>  '2222 Louisa Street',
      'city' =>  'Rayville',
      'state' =>  'LA',
      'zip' =>  '71269',
      'phone' =>  '3187285770',
      'manager_id' =>  3,
      'region_id'=>	2
    ]);

    Location::create([
      'location' =>  'Dexter',
      'loc_abr' =>  'DEX',
      'address' =>  'address',
      'city' =>  'Dexter',
      'state' =>  'MO',
      'zip'=>  '99999',
      'phone' =>  '9999999999',
      'manager_id' =>  2,
      'region_id' =>	3
    ]);

    Location::create([
        'location' =>  'Amarillo',
        'loc_abr' =>  'AMA',
        'address' =>  'address',
        'city' =>  'Amarillo',
        'state' =>  'TX',
        'zip'=>  '99999',
        'phone' =>  '9999999999',
        'manager_id' =>  2,
        'region_id' =>	3
    ]);

    Location::create([
        'location' =>  'Victoria',
        'loc_abr' =>  'VIC',
        'address' =>  'address',
        'city' =>  'Victoria',
        'state' =>  'TX',
        'zip'=>  '99999',
        'phone' =>  '9999999999',
        'manager_id' =>  2,
        'region_id' =>	3
    ]);
  }

}