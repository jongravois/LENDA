<?php

class AddendumTypesTableSeeder extends Seeder {

    public function run()
    {
        Addendumtype::create([
            'type' => 'original'
        ]);

        Addendumtype::create([
            'type' => 'nameicantremember'
        ]);

        Addendumtype::create([
            'type' => 'reconciliation'
        ]);
    }

}