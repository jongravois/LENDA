<?php

class ApplicantsTableSeeder extends Seeder {
  public function run()
  {
    Applicant::create([
      'loc_id' => 1,
      'entity_id' => 4,
      'farmer_id' => 1,
      'applicant' => 'All Glass Towers',
      'grade' => 'B',
      'ssn' => '222222222',
      'email' => 'tony@farm.org',
      'dob' => '1987-07-01',
      'address' => '321 Farmers Dell',
      'phone' => '7777777777',
      'city' => 'Monroe',
      'state_id' => 19,
      'zip' => '99999'
    ]);

    Applicant::create([
      'loc_id' => 1,
      'entity_id' => 5,
      'farmer_id' => 5,
      'applicant' => 'Nested Row',
      'grade' => 'A',
      'ssn' => '444444444',
      'email' => 'hawkeye@farm.org',
      'dob' => '1987-07-01',
      'address' => '321 Farmers Dell',
      'phone' => '7777777777',
      'city' => 'Monroe',
      'state_id' => 19,
      'zip' => '99999',
      'spouse' => 'Romanoff, Natasha',
      'spouse_ssn' => '333333333',
      'spouse_phone' => '7777777878',
      'spouse_email'	=>	'blackwidow@farm.org'
    ]);

    Applicant::create([
      'loc_id' => 1,
      'entity_id' => 3,
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
      'loc_id' => 2,
      'entity_id' => 1,
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
      'loc_id' => 2,
      'entity_id' => 2,
      'farmer_id' => 9,
      'applicant' => 'Dark World',
      'grade' => 'A',
      'ssn' => '555555555',
      'email' => 'devil@farm.org',
      'dob' => '2012-01-01',
      'address' => '1 Law School',
      'phone' => '7777777777',
      'city' => 'Jackson',
      'state_id' => 25,
      'zip' => '99999',
      'spouse' => '',
      'spouse_ssn' => ''
    ]);

    Applicant::create([
      'loc_id' => 2,
      'entity_id' => 2,
      'farmer_id' => 10,
      'applicant' => 'Rainbow Bridge',
      'grade' => 'A',
      'ssn' => '666666666',
      'email' => 'thor@asgard.org',
      'dob' => '2012-12-25',
      'address' => '1 Kingdom Way',
      'phone' => '3187777777',
      'city' => 'Jackson',
      'state_id' => 25,
      'zip' => '99999',
      'spouse' => '',
      'spouse_ssn' => ''
    ]);

    Applicant::create([
      'loc_id' => 2,
      'entity_id' => 2,
      'farmer_id' => 7,
      'applicant' => 'Kingdom Plains',
      'grade' => 'C',
      'ssn' => '777777777',
      'email' => 'wonder@woman.org',
      'dob' => '2012-02-14',
      'address' => '777 Amazon Place',
      'phone' => '5017777777',
      'city' => 'Jonesboro',
      'state_id' => 4,
      'zip' => '99999',
      'spouse' => '',
      'spouse_ssn' => ''
    ]);
  }

}