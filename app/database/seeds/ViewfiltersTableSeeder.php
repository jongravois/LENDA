<?php

class ViewfiltersTableSeeder extends Seeder{

    public function run()
    {
        $users = User::all();

        foreach($users as $user){
            Viewfilters::create([
                'user_id' => $user->id
            ]);
        }
    }
}