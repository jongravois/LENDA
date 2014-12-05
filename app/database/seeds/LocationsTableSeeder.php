<?php

class LocationsTableSeeder extends Seeder{

  public function run()
  {
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
      'location' =>  'Memphis',
      'loc_abr' =>  'MEM',
      'address' =>  '7247 Rose Trail Drive',
      'city' =>  'Memphis',
      'state' =>  'TN',
      'zip'=>  '38133',
      'phone' =>  '9012870209',
      'manager_id' =>  2,
      'region_id' =>	3
    ]);
  }

}