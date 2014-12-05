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
		});
	}


	public function down()
	{
		Schema::drop('globals');
	}

}
