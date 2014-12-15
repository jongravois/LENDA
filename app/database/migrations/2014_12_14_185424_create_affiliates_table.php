<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAffiliatesTable extends Migration {

	public function up()
	{
		Schema::create('affiliates', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('loan_id');
			$table->string('entity_name');
			$table->double('percent_owned');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('affiliates');
	}

}
