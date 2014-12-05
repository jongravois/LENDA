<?php

class EntitytypesTableSeeder extends Seeder {

  public function run()
  {
    Entitytype::create([
      'entitytype' => 'Corporation'
    ]);

    Entitytype::create([
      'entitytype' => 'Individual'
    ]);

    Entitytype::create([
      'entitytype' => 'JointVenture'
    ]);
    Entitytype::create([
      'entitytype' => 'Partnership'
    ]);
    Entitytype::create([
      'entitytype' => 'Spousal'
    ]);
  }

}
