<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGlobalsTable extends Migration {

	public function up()
	{
		Schema::create('globals', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('crop_year')->default(2015);
      $table->string('season')->default('S');
			$table->double('int_percent_arm')->default(9);
			$table->double('int_percent_dist')->default(7.5);
			$table->double('proc_fee_rate')->default(1);
			$table->double('svc_fee_rate')->default(1.5);
			$table->double('current_bs_constraint')->default(85);
			$table->double('intermediate_bs_constraint')->default(60);
			$table->double('fixed_bs_constraint')->default(75);
		});
	}


	public function down()
	{
		Schema::drop('globals');
	}

}
