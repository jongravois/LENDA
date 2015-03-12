<?php

class CommitteeSpecsTableSeeder extends Seeder {

    public function run()
    {
        Committeespec::create([
            'loantype_id' => 1,
            'min_amount' => 500,
            'max_amount' => 50000,
            'member_count' => 5
        ]);
    }

}