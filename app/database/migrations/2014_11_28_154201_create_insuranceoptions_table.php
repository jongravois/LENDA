<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateInsuranceoptionsTable extends Migration {

	public function up()
	{
		Schema::create('insuranceoptions', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('option');
		});
	}


	public function down()
	{
		Schema::drop('insuranceoptions');
	}

}
