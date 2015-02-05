<?php

class FarmersTableSeeder extends Seeder{

  public function run()
  {
    Farmer::create([
      'user_id' => 8,
      'farmer' => 'Stark, Tony',
      'nick'	 =>	'Ironman',
      'ssn'	 =>	'123456799',
      'address' => '1 Stark Towers',
      'city'	=>	'Delhi',
      'state_id'	=>	19,
      'zip' => '71232',
      'email'	=>	'ironman@marvel.com',
      'phone'	=>	'9995550001',
      'dob'	=>	'1960-07-15',
      'first_year_farmer' => 1979,
      'farm_exp' => 36,
      'new_client' => 0
    ]);

    Farmer::create([
      'user_id' => 9,
      'farmer' => 'Wayne, Bruce',
      'nick' => 'Batman',
      'ssn'	=>	'123456798',
      'address' => '1 Bat Cave',
      'city'	=> 'Gotham',
      'state_id'	=>	4,
      'zip'	=>	'33773',
      'email'	=>	'batman@dccomics.com',
      'phone'	=>	'9995550002',
      'dob'	=>	'1961-07-15',
      'first_year_farmer' => 1976,
      'farm_exp' => 39
    ]);

    Farmer::create([
      'user_id' => 10,
      'farmer' => 'Kent, Clark',
      'nick'	=>	'Superman',
      'ssn'	=>	'123456797',
      'address' => '1 Daily Planet',
      'city'	=> 'Metropolis',
      'state_id'	=>	25,
      'zip'	=>	'01011',
      'email'	=>	'superman@dccomics.com',
      'phone'	=>	'9995550003',
      'dob'	=>	'1962-07-15',
      'first_year_farmer' => 2006,
      'farm_exp' => 9
    ]);

    Farmer::create([
      'user_id' => 11,
      'farmer' => 'Parker, Peter S',
      'nick'	=>	'Spider-Man',
      'ssn'	=>	'123456796',
      'address' => '1 Daily Bugle',
      'city'	=> 'New York',
      'state_id'	=>	4,
      'zip'	=>	'32155',
      'email'	=>	'spiderman@marvel.com',
      'phone'	=>	'9995550004',
      'dob'	=>	'1963-07-15',
      'first_year_farmer' => 2001,
      'farm_exp' => 14
    ]);

    Farmer::create([
      'user_id' => 12,
      'farmer' => 'Barton, Clint',
      'nick'	=>	'Hawkeye',
      'ssn'	=>	'123456795',
      'address' =>	'55 Nested Drive',
      'city'	=> 'Feathering',
      'state_id'	=>	25,
      'zip'	=>	'43534',
      'email'	=>	'hawkeye@marvel.com',
      'phone'	=>	'9995550005',
      'dob'	=>	'1964-07-15',
      'first_year_farmer' => 2012,
      'farm_exp' => 3
    ]);

    Farmer::create([
      'user_id' => 13,
      'farmer' => 'Roth, Rachel',
      'nick'	=>	'Raven',
      'ssn'	=>	'123456794',
      'address'	=>	'1 Teen Titan Way',
      'city'	=> 'Natural',
      'state_id'	=>	4,
      'zip'	=>	'10401',
      'email'	=>	'raven@dccomics.com',
      'phone'	=>	'9995550006',
      'dob'	=>	'1965-07-15',
      'first_year_farmer' => 2004,
      'farm_exp' => 11
    ]);

    Farmer::create([
      'user_id' => 14,
      'farmer' => 'Prince, Diana',
      'nick'	=>	'Wonder Woman',
      'ssn'	=>	'123456793',
      'address' =>	'The Palace',
      'city'	=> 'Amazonia',
      'state_id'	=>	25,
      'zip'	=>	'99440',
      'email'	=>	'wonderwoman@marvel.com',
      'phone'	=>	'9995550007',
      'dob'	=>	'1966-07-15',
      'first_year_farmer' => 1984,
      'farm_exp' => 31
    ]);

    Farmer::create([
      'user_id' => 15,
      'farmer' => 'Allen, Barry',
      'nick'	=>	'Flash',
      'ssn'	=>	'123456792',
      'address'	=>	'1 Speedline Road',
      'city'	=> 'Natural',
      'state_id'	=>	4,
      'zip'	=>	'43555',
      'email'	=>	'flash@dccomics.com',
      'phone'	=>	'9995550008',
      'dob'	=>	'1967-07-15',
      'first_year_farmer' => 2001,
      'farm_exp' => 14
    ]);

    Farmer::create([
      'user_id' => 16,
      'farmer' => 'Murdock, Jack',
      'nick'	=>	'Daredevil',
      'ssn'	=>	'123456791',
      'address'	=>	'3 Blind Mouse Drive',
      'city'	=> 'Monroe',
      'state_id'	=>	19,
      'zip'	=>	'32568',
      'email'	=>	'daredevil@marvel.com',
      'phone'	=>	'9995550009',
      'dob'	=>	'1968-07-15',
      'first_year_farmer' => 2009,
      'farm_exp' => 6
    ]);

    Farmer::create([
      'user_id' => 17,
      'farmer' => 'Blake, Donald',
      'nick'	=>	'Thor',
      'ssn'	=>	'123546790',
      'address'	=>	'1 Shield',
      'city'	=> 'Asgard',
      'state_id'	=>	19,
      'zip'	=>	'10401',
      'email'	=>	'thor@marvel.com',
      'phone'	=>	'9995550010',
      'dob'	=>	'1969-07-15',
      'first_year_farmer' => 2013,
      'farm_exp' => 2
    ]);

    Farmer::create([
      'user_id' => 18,
      'farmer' => 'Banner, Bruce',
      'nick'	=>	'Hulk',
      'ssn'	=>	'123456789',
      'address'	=>	'1 Shield',
      'city'	=> 'Natural',
      'state_id'	=>	4,
      'zip'	=>	'10401',
      'email'	=>	'hulk@marvel.com',
      'phone'	=>	'9995550011',
      'dob'	=>	'1970-07-15',
      'first_year_farmer' => 1996,
      'farm_exp' => 19
    ]);

    Farmer::create([
      'user_id' => 19,
      'farmer' => 'Rogers, Steve',
      'nick'	=>	'Captain America',
      'ssn'	=>	'123456788',
      'address'	=>	'1 Shield',
      'city'	=> 'Natural',
      'state_id'	=>	4,
      'zip'	=>	'10401',
      'email'	=>	'cptam@marvel.com',
      'phone'	=>	'9995550012',
      'dob'	=>	'1971-07-15',
      'first_year_farmer' => 2001,
      'farm_exp' => 14
    ]);

    Farmer::create([
      'user_id' => 20,
      'farmer' => 'Batson, Billy',
      'nick'	=>	'Shazam',
      'ssn'	=>	'123456787',
      'address'	=>	'1 Magic Avenue',
      'city'	=> 'Jackson',
      'state_id'	=>	25,
      'zip'	=>	'44335',
      'email'	=>	'shazam@dccomics.com',
      'phone'	=>	'9995550013',
      'dob'	=>	'1972-07-15',
      'first_year_farmer' => 1999,
      'farm_exp' => 16
    ]);

    Farmer::create([
      'user_id' => 21,
      'farmer' => 'Manzer, Kate',
      'nick'	=>	'Hawkgirl',
      'ssn'	=>	'123456786',
      'address'	=>	'1 Nest on the Bayou',
      'city'	=> 'St. Roch',
      'state_id'	=>	19,
      'zip'	=>	'73543',
      'email'	=>	'hawkgirl@dccomics.com',
      'phone'	=>	'9995550014',
      'dob'	=>	'1973-07-15',
      'first_year_farmer' => 2010,
      'farm_exp' => 4
    ]);
  }
}