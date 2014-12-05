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
      $table->string('measurement')->nullable();
      $table->string('rebate_measurement')->nullable();
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('crops');
	}

}
