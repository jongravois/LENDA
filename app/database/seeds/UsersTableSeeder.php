<?php

class UsersTableSeeder extends Seeder{

  public function run()
  {
    User::create([
      'email' => 'lenda@armlend.com',
      'password' => 'gluestick'
    ]);

    User::create([
      'email' => 'jongravois@gmail.com',
      'password' => 'password',
      'is_staff' => 1
    ]);

    User::create([
      'email' => 'bterral@armlend.com',
      'password' => 'changeme',
      'is_staff' => 1
    ]);

    User::create([
      'email' => 'mbranch@armlend.com',
      'password' => 'changeme',
      'is_staff' => 1
    ]);

    User::create([
      'email' => 'rmiller@armlend.com',
      'password' => 'changeme',
      'is_staff' => 1
    ]);

    User::create([
      'email' => 'mwilliams@armlend.com',
      'password' => 'changeme',
      'is_staff' => 1
    ]);

    User::create([
      'email' => 'kwilliams@armlend.com',
      'password' => 'changeme',
      'is_staff' => 1
    ]);

    User::create([
      'email'	=>	'ironman@marvel.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'batman@dccomics.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'superman@dccomics.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'spiderman@marvel.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'hawkeye@marvel.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'blackwidow@marvel.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'wonderwoman@marvel.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'flash@dccomics.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'daredevil@marvel.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'thor@marvel.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'hulk@marvel.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'cptam@marvel.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'shazam@dccomics.com',
      'password' => 'changeme'
    ]);

    User::create([
      'email'	=>	'hawkgirl@dccomics.com',
      'password' => 'changeme'
    ]);
  }
}