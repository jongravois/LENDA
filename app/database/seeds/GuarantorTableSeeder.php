<?php

class GuarantorTableSeeder extends Seeder {

  public function run()
  {
    Guarantor::create([
      'loan_id' => 1,
      'guarantor' => 'Bo Gwin'
    ]);

    Guarantor::create([
      'loan_id' => 1,
      'guarantor' => 'Sharon Gwin'
    ]);
  }

}