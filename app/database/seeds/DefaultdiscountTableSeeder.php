<?php

class DefaultdiscountTableSeeder extends Seeder {

  public function run()
  {
    Defaultdiscount::create([
      'constraint' => 'current',
      'discount' => 85
    ]);

    Defaultdiscount::create([
      'constraint' => 'intermediate',
      'discount' => 60
    ]);

    Defaultdiscount::create([
      'constraint' => 'fixed',
      'discount' => 75
    ]);
  }

}