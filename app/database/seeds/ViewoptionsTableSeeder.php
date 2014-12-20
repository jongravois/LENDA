<?php

class ViewoptionsTableSeeder extends Seeder{

  public function run()
  {
    Viewoptions::create([
      'user_id' => 1
    ]);

    Viewoptions::create([
      'user_id' => 2
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
  }
}