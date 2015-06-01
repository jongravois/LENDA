<?php

class ViewoptionsTableSeeder extends Seeder{

  public function run()
  {
    Viewoptions::create([
      'user_id' => 1
    ]);

    Viewoptions::create([
        'user_id' => 2,
        'voCommitDistributor' => 1,
        'voCommitArm' =>  1,
        'voAcresTotal' => 1,
        'voBalanceDue' => 1
    ]);

    Viewoptions::create([
        'user_id' => 3,
        'voCommitDistributor' => 1,
        'voCommitArm' =>  1,
        'voAcresTotal' => 1,
        'voBalanceDue' => 1
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
          'user_id' => 8,
          'voCommitDistributor' => 1,
          'voCommitArm' =>  1,
          'voAcresTotal' => 1,
          'voBalanceDue' => 1
      ]);

      Viewoptions::create([
          'user_id' => 9
      ]);
  }
}