<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReferencesTable extends Migration {

	public function up()
	{
		Schema::create('references', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('loan_id');
			$table->string('creditor');
			$table->string('city_state');
			$table->string('contact');
			$table->string('phone');
			$table->string('email');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('references');
	}

}
