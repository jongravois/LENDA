<?php

class StaffprofilesTableSeeder extends Seeder{

  public function run()
  {
    Staffprofile::create([
      'user_id' => 1,
      'homepage' => 'll',
      'show_commit_arm' => 1
    ]);

    Staffprofile::create([
      'user_id' => 2,
      'homepage' => 'll',
      'show_commit_arm' => 1
    ]);

    Staffprofile::create([
      'user_id' => 3,
      'homepage' => 'll',
      'show_commit_arm' => 1
    ]);

    Staffprofile::create([
      'user_id' => 4,
      'homepage' => 'll',
      'show_commit_arm' => 1
    ]);

    Staffprofile::create([
      'user_id' => 5,
      'homepage' => 'll',
      'show_commit_arm' => 1
    ]);

    Staffprofile::create([
      'user_id' => 6,
      'homepage' => 'll',
      'show_commit_arm' => 1
    ]);
  }
}