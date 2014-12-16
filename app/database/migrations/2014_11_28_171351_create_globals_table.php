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
			$table->double('arm_interest_rate')->default(9);
			$table->double('dist_interest_rate')->default(7.5);
			$table->double('proc_fee_rate')->default(1);
			$table->double('svc_fee_rate')->default(1.5);
		});
	}


	public function down()
	{
		Schema::drop('globals');
	}

}
