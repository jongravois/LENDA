<?php

class NotificationTableSeeder extends Seeder {

  public function run()
  {
    Notification::create([
      'user_id' => 2,
      'loan_id' => 1,
      'notification_type' => 'report',
      'report_id' => 1,
      'task' => 'Confirm Activity Detail Report'
    ]);

    Notification::create([
        'user_id' => 2,
        'loan_id' => 1,
        'report_id' => 2,
        'notification_type' => 'report',
        'task' => 'Confirm Customer Budget Report'
    ]);

    Notification::create([
        'user_id' => 2,
        'loan_id' => 1,
        'report_id' => 3,
        'notification_type' => 'report',
        'task' => 'Confirm Account Reconciliation Report'
    ]);

    Notification::create([
        'user_id' => 2,
        'loan_id' => 1,
        'report_id' => 9,
        'notification_type' => 'report',
        'task' => 'Confirm Crop Mix Report'
    ]);

    Notification::create([
        'user_id' => 8,
        'loan_id' => 1,
        'notification_type' => 'report',
        'report_id' => 1,
        'task' => 'Confirm Activity Detail Report'
    ]);

    Notification::create([
        'user_id' => 8,
        'loan_id' => 1,
        'report_id' => 2,
        'notification_type' => 'report',
        'task' => 'Confirm Customer Budget Report'
    ]);

    Notification::create([
        'user_id' => 8,
        'loan_id' => 1,
        'report_id' => 3,
        'notification_type' => 'report',
        'task' => 'Confirm Account Reconciliation Report'
    ]);

    Notification::create([
        'user_id' => 8,
        'loan_id' => 1,
        'report_id' => 9,
        'notification_type' => 'report',
        'task' => 'Confirm Crop Mix Report'
    ]);

    Notification::create([
      'user_id' => 2,
      'loan_id' => 1,
      'notification_type' => 'vote',
      'task' => 'Review Loan: Tony Stark - Glass Towers'
    ]);

    Notification::create([
      'user_id' => 2,
      'loan_id' => 5,
      'notification_type' => 'vote',
      'task' => 'Review Loan: Clint Barton - Nested Row'
    ]);

    Notification::create([
      'user_id' => 2,
      'notification_type' => 'office',
      'task' => 'Staff Meeting on Wednesday, Dec. 10, 2014',
      'status' => 'acknowledged'
    ]);

    Notification::create([
      'user_id' => 8,
      'notification_type' => 'office',
      'task' => 'Review Site'
    ]);

    Notification::create([
      'user_id' => 8,
      'notification_type' => 'office',
      'task' => 'Report Progress'
    ]);

    Notification::create([
      'user_id' => 8,
      'notification_type' => 'office',
      'task' => 'Enjoy life!'
    ]);
  }

}