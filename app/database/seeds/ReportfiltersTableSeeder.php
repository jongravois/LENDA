<?php

class ReportfiltersTableSeeder extends Seeder{

    public function run()
    {
        $users = User::all();

        foreach($users as $user){
            Reportfilters::create([
                'user_id' => $user->id
            ]);
        }
    }
}