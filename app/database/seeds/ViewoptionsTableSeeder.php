<?php

class ViewoptionsTableSeeder extends Seeder{

  public function run()
  {
    Viewoptions::create([
      'user_id' => 1
    ]);

    Viewoptions::create([
      'user_id' => 2,
      'view_commit_arm' =>  1,
      'view_acres_total' => 1,
      'view_distributor' => 1
    ]);

    Viewoptions::create([
      'user_id' => 3
    ]);

    Viewoptions::create([
      'user_id' => 4
    ]);

    Viewoptions::create([
      'user_id' => 5
    ]);

    Viewoptions::create([
      'user_id' => 6
  ]);

      Viewoptions::create([
          'user_id' => 7
      ]);

      Viewoptions::create([
          'user_id' => 8
      ]);

      Viewoptions::create([
          'user_id' => 9
      ]);
  }
}