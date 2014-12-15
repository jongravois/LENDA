<?php

class StaffTableSeeder extends Seeder{

  public function run()
  {
    Staff::create([
      'user_id' => 1,
      'username' => 'LENDA',
      'nick' => 'LENDA',
      'email' => 'lenda@armlend.com',
      'loc_id' => '4',
      'region_id' => '2',
      'manager_id'  => 1,
      'is_admin'    => 0,
      'is_approver' => 0,
      'is_manager'  => 0,
      'role_id' => 8
    ]);

    Staff::create([
      'user_id' => 2,
      'username' => 'Jonathan Gravois',
      'nick' => 'JWG',
      'email' => 'jongravois@gmail.com',
      'phone'	=> '9012870209',
      'loc_id' => '5',
      'region_id' => '1',
      'manager_id' => 2,
      'is_admin' => 1,
      'is_approver' => 1,
      'is_manager' => 1,
      'role_id' => 7
    ]);

    Staff::create([
      'user_id' => 3,
      'username' => 'Brad Terral',
      'nick' => 'TBT',
      'email' => 'bterral@armlend.com',
      'phone' => '3182824037',
      'loc_id' => '4',
      'region_id' => '2',
      'manager_id' => 3,
      'is_admin' => 1,
      'is_approver' => 1,
      'is_manager' => 1,
      'role_id' => 1
    ]);

    Staff::create([
      'user_id' => 4,
      'username' => 'Mark Branch',
      'nick' => 'MIB',
      'email' => 'mbranch@armlend.com',
      'phone' => '3187285770',
      'region_id' => '2',
      'loc_id' => '4',
      'manager_id' => 3,
      'is_admin' => 0,
      'is_approver' => 1,
      'is_manager' => 1,
      'role_id' => 2
    ]);

    Staff::create([
      'user_id' => 5,
      'username' => 'Robby Miller',
      'nick' => 'RAM',
      'email' => 'rmiller@armlend.com',
      'phone' => '3187285770',
      'loc_id' => '4',
      'region_id' => '2',
      'manager_id' => 4,
      'is_admin' => 0,
      'is_approver' => 1,
      'is_manager' => 1,
      'role_id' => 5
    ]);

    Staff::create([
      'user_id' => 6,
      'username' => 'Mason Williams',
      'nick' => 'MAW',
      'email' => 'mwilliams@armlend.com',
      'phone' => '3187285770',
      'loc_id' => '4',
      'region_id' => '2',
      'manager_id' => 5,
      'is_admin' => 0,
      'is_approver' => 0,
      'is_manager' => 0,
      'role_id' => 5
    ]);

    Staff::create([
      'user_id' => 7,
      'username' => 'Katie Williams',
      'nick' => 'KWW',
      'email' => 'kwilliams@armlend.com',
      'phone' => '3187285770',
      'loc_id' => '4',
      'region_id' => '2',
      'manager_id' => 4,
      'is_admin' => 0,
      'is_approver' => 0,
      'is_manager' => 0,
      'role_id' => 6
    ]);
  }
}