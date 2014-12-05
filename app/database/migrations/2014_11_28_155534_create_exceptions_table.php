<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateExceptionsTable extends Migration {

	public function up()
	{
		Schema::create('exceptions', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('message');
		});
	}


	public function down()
	{
		Schema::drop('exceptions');
	}

}
