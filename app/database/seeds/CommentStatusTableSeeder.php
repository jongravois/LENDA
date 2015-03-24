<?php

class CommentstatusTableSeeder extends Seeder {

  public function run()
  {
    Commentstatus::create([
        'loan_id' =>	1,
        'comment_id' => 1,
        'user_id' => 2,
        'recipient_id' => 2,
        'status' =>	'confirmed'
    ]);

    Commentstatus::create([
        'loan_id' =>	5,
        'comment_id' => 3,
        'user_id' => 2,
        'recipient_id' => 2,
        'status' =>	'pending'
    ]);

    Commentstatus::create([
        'loan_id' =>	1,
        'comment_id' => 2,
        'user_id' => 2,
        'recipient_id' => 2,
        'status' =>	'confirmed'
    ]);

    Commentstatus::create([
        'loan_id' =>	1,
        'comment_id' => 1,
        'user_id' => 3,
        'recipient_id' => 2,
        'status' => 'confirmed'
    ]);

    Commentstatus::create([
        'loan_id' =>	1,
        'comment_id' => 2,
        'user_id' => 3,
        'recipient_id' => 2,
        'status' => 'confirmed'
    ]);

      Commentstatus::create([
          'loan_id' =>	1,
          'comment_id' => 9,
          'user_id' => 3,
          'recipient_id' => 2,
          'status' => 'pending'
      ]);

      Commentstatus::create([
          'loan_id' =>	7,
          'comment_id' => 7,
          'user_id' => 3,
          'recipient_id' => 2,
          'status' =>	'confirmed'
    ]);

      Commentstatus::create([
          'loan_id' =>	1,
          'comment_id' => 4,
          'user_id' => 1,
          'recipient_id' => 2,
          'status' =>	'confirmed'
      ]);

      Commentstatus::create([
          'loan_id' =>	1,
          'comment_id' => 5,
          'user_id' => 3,
          'recipient_id' => 2,
          'status' =>	'confirmed'
      ]);

      Commentstatus::create([
          'loan_id' =>	1,
          'comment_id' => 6,
          'user_id' => 7,
          'recipient_id' => 2,
          'status' =>	'confirmed'
      ]);


      Commentstatus::create([
          'loan_id' =>	1,
          'comment_id' => 1,
          'user_id' => 2,
          'recipient_id' => 8,
          'status' =>	'confirmed'
      ]);

      Commentstatus::create([
          'loan_id' =>	5,
          'comment_id' => 3,
          'user_id' => 2,
          'recipient_id' => 8,
          'status' =>	'pending'
      ]);

      Commentstatus::create([
          'loan_id' =>	1,
          'comment_id' => 2,
          'user_id' => 2,
          'recipient_id' => 8,
          'status' =>	'confirmed'
      ]);

      Commentstatus::create([
          'loan_id' =>	1,
          'comment_id' => 1,
          'user_id' => 3,
          'recipient_id' => 2,
          'status' => 'confirmed'
      ]);

      Commentstatus::create([
          'loan_id' =>	1,
          'comment_id' => 2,
          'user_id' => 3,
          'recipient_id' => 8,
          'status' => 'confirmed'
      ]);

      Commentstatus::create([
          'loan_id' =>	1,
          'comment_id' => 9,
          'user_id' => 3,
          'recipient_id' => 8,
          'status' => 'pending'
      ]);

      Commentstatus::create([
          'loan_id' =>	7,
          'comment_id' => 7,
          'user_id' => 3,
          'recipient_id' => 8,
          'status' =>	'confirmed'
      ]);

      Commentstatus::create([
          'loan_id' =>	1,
          'comment_id' => 4,
          'user_id' => 1,
          'recipient_id' => 8,
          'status' =>	'confirmed'
      ]);

      Commentstatus::create([
          'loan_id' =>	1,
          'comment_id' => 5,
          'user_id' => 3,
          'recipient_id' => 8,
          'status' =>	'confirmed'
      ]);

      Commentstatus::create([
          'loan_id' =>	1,
          'comment_id' => 6,
          'user_id' => 7,
          'recipient_id' => 8,
          'status' =>	'confirmed'
      ]);
  }

}