<?php

class CommentstatusTableSeeder extends Seeder {

  public function run()
  {
    Commentstatus::create([
      'loan_id' =>	1,
      'comment_id' => 1,
      'user_id' => 2,
      'status' =>	'confirmed'
    ]);

    Commentstatus::create([
      'loan_id' =>	5,
      'comment_id' => 3,
      'user_id' => 2,
      'status' =>	'pending'
    ]);

    Commentstatus::create([
      'loan_id' =>	1,
      'comment_id' => 2,
      'user_id' => 2,
      'status' =>	'pending'
    ]);

    Commentstatus::create([
      'loan_id' =>	1,
      'comment_id' => 1,
      'user_id' => 3,
      'status' =>	'confirmed'
    ]);

    Commentstatus::create([
      'loan_id' =>	1,
      'comment_id' => 2,
      'user_id' => 3,
      'status' =>	'pending'
    ]);
  }

}