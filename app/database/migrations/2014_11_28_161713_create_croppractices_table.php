<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCroppracticesTable extends Migration {

	public function up()
	{
		Schema::create('croppractices', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('crop_id');
      $table->string('croppractice');
      $table->string('crop');
      $table->string('practice');
      $table->string('measurement');
      $table->string('rebate_measurement');
		});
	}


	public function down()
	{
		Schema::drop('croppractices');
	}

}
