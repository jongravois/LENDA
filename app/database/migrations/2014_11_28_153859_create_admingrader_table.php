<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAdmingraderTable extends Migration {

	public function up()
	{
		Schema::create('admingrader', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('grade');
      $table->double('debt2asset');
      $table->double('current_ratio');
      $table->double('working_capital');
      $table->double('borrowing_capacity');
      $table->double('years_farming');
      $table->double('credit_score');
      $table->boolean('cpa_financials');
      $table->boolean('bankruptcy');
      $table->boolean('judgement');
      $table->double('all_max_loan');
      $table->double('ag_pro_max_loan');
      $table->double('capital_bridge_max_loan');
      $table->double('ag_vest_max_loan');
      $table->double('ag_pro_max_rate');
      $table->double('capital_bridge_max_rate');
      $table->double('ag_vest_max_rate');
		});
	}


	public function down()
	{
		Schema::drop('admingrader');
	}

}
