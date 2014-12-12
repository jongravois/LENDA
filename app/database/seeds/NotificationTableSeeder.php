<?php

class NotificationTableSeeder extends Seeder {

  public function run()
  {
    Notification::create([
      'user_id' => 2,
      'notification_type' => 'report',
      'task' => 'Activity Detail Report'
    ]);

    Notification::create([
      'user_id' => 2,
      'notification_type' => 'report',
      'task' => 'Customer Budget Report'
    ]);

    Notification::create([
      'user_id' => 2,
      'notification_type' => 'report',
      'task' => 'Account Reconciliation Report'
    ]);

    Notification::create([
      'user_id' => 2,
      'loan_id' => 1,
      'notification_type' => 'vote',
      'task' => 'Tony Stark - Glass Towers'
    ]);

    Notification::create([
      'user_id' => 2,
      'notification_type' => 'office',
      'task' => 'Staff Meeting on Wednesday, Dec. 10, 2014',
      'status' => 'acknowledged'
    ]);
  }

}