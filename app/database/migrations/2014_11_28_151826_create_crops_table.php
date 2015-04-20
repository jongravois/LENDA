<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCropsTable extends Migration {

	public function up()
	{
		Schema::create('crops', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('crop');
            $table->string('name');
            $table->double('tea');
            $table->double('arm_default_price');
            $table->double('arm_default_ins_price');
            $table->double('arm_default_yield');
            $table->string('measurement')->default('bu');
            $table->string('rebate_measurement')->default('bu');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('crops');
	}

}
