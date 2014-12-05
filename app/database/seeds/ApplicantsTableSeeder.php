<?php

class ApplicantsTableSeeder extends Seeder {
  public function run()
  {
    Applicant::create([
      'loc_id' => 1,
      'entity_id' => 4,
      'farmer_id' => 2,
      'applicant' => 'Secret Cave',
      'grade' => 'B',
      'ssn' => '111111111',
      'email' => 'farmer@farm.org',
      'dob' => '2014-03-01',
      'address' => '123 Farmers Market',
      'phone' => '9999999999',
      'city' => 'Jonesboro',
      'state_id' => 4,
      'zip' => '99999',
      'spouse' => '',
      'spouse_ssn' => ''
    ]);

    Applicant::create([
      'loc_id' => 1,
      'entity_id' => 5,
      'farmer_id' => 1,
      'applicant' => 'Glass Towers',
      'grade' => 'A',
      'ssn' => '222222222',
      'email' => 'tony@farm.org',
      'dob' => '1987-07-01',
      'address' => '321 Farmers Dell',
      'phone' => '7777777777',
      'city' => 'Monroe',
      'state_id' => 19,
      'zip' => '99999',
      'spouse' => 'Stark, Pepper',
      'spouse_ssn' => '333333333',
      'spouse_phone' => '7777777878',
      'spouse_email'	=>	'pepper@farm.org'
    ]);

    Applicant::create([
      'loc_id' => 2,
      'entity_id' => 3,
      'farmer_id' => 12,
      'applicant' => 'Shielded Farms',
      'grade' => 'C',
      'ssn' => '333333333',
      'email' => 'steve@farm.org',
      'dob' => '2012-01-01',
      'address' => '1 Produce Cave',
      'phone' => '7777777777',
      'city' => 'Jackson',
      'state_id' => 25,
      'zip' => '99999',
      'spouse' => '',
      'spouse_ssn' => ''
    ]);

    Applicant::create([
      'loc_id' => 1,
      'entity_id' => 1,
      'farmer_id' => 5,
      'applicant' => 'Nested Row',
      'grade' => 'D',
      'ssn' => '444444444',
      'email' => 'hawkeye@farm.org',
      'dob' => '1987-07-01',
      'address' => '321 Farmers Dell',
      'phone' => '7777777777',
      'city' => 'Monroe',
      'state_id' => 19,
      'zip' => '99999',
      'spouse' => '',
      'spouse_ssn' => '',
      'spouse_phone' => '',
      'spouse_email'	=>	''
    ]);

    Applicant::create([
      'loc_id' => 2,
      'entity_id' => 2,
      'farmer_id' => 9,
      'applicant' => 'Dark World',
      'grade' => 'A',
      'ssn' => '555555555',
      'email' => 'devil@farm.org',
      'dob' => '2012-01-01',
      'address' => '1 Produce Cave',
      'phone' => '7777777777',
      'city' => 'Jackson',
      'state_id' => 25,
      'zip' => '99999',
      'spouse' => '',
      'spouse_ssn' => ''
    ]);
  }

}