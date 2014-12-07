<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateScreensTable extends Migration {

	public function up()
	{
		Schema::create('screens', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('loantype_id');
      $table->string('screen');
			$table->integer('sort_order');
		});
	}


	public function down()
	{
		Schema::drop('screens');
	}

}
