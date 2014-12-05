<?php

class LoanstatusTableSeeder extends Seeder{

  public function run()
  {
    Loanstatus::create([
      'status'  =>  'In-Progress',
      'iconClass'	=> 'glyphicon-wrench',
      'iconColor'	=>	'#000099'
    ]);

    Loanstatus::create([
      'status'  =>  'Paid',
      'iconClass'	=> 'glyphicon-ok',
      'iconColor'	=>	'#009900'
    ]);

    Loanstatus::create([
      'status'  =>  'Recommended',
      'iconClass'	=> 'glyphicon-wrench',
      'iconColor'	=>	'#000099'
    ]);

    Loanstatus::create([
      'status'  =>  'Approved',
      'iconClass'	=> 'glyphicon-thumbs-up',
      'iconColor'	=>	'#009900'
    ]);

    Loanstatus::create([
      'status'  =>  'Denied',
      'iconClass'	=> 'glyphicon-thumbs-down',
      'iconColor'	=>	'#990000'
    ]);
  }

}