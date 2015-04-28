<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOthercollateralsTable extends Migration {

	public function up()
	{
		Schema::create('othercollaterals', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('loan_id');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('othercollaterals');
	}

}
