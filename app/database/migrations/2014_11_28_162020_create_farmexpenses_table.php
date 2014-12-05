<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFarmexpensesTable extends Migration {

	public function up()
	{
		Schema::create('farmexpenses', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('crop_year');
      $table->integer('loan_id');
      $table->string('expense');
      $table->double('cost');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('farmexpenses');
	}

}
