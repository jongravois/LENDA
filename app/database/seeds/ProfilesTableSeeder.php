<?php

class ProfilesTableSeeder extends Seeder{

  public function run()
  {
    Profile::create([
      'user_id' => 1,
      'homepage' => 'll'
    ]);

    Profile::create([
      'user_id' => 2,
      'homepage' => 'll'
    ]);

    Profile::create([
      'user_id' => 3,
      'homepage' => 'll'
    ]);

    Profile::create([
      'user_id' => 4,
      'homepage' => 'll'
    ]);

    Profile::create([
      'user_id' => 5,
      'homepage' => 'll'
    ]);

    Profile::create([
      'user_id' => 6,
      'homepage' => 'll'
    ]);
  }
}