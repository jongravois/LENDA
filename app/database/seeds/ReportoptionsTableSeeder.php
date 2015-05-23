<?php

class ReportoptionsTableSeeder extends Seeder{

    public function run()
    {
        $users = User::all();

        foreach($users as $user){
            Reportoptions::create([
                'user_id' => $user->id
            ]);
        }
    }
}