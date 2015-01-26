<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePracticesTable extends Migration {

	public function up()
	{
		Schema::create('practices', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('practice');
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('practices');
	}

}
