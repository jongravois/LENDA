<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateInsurancetypesTable extends Migration {

	public function up()
	{
		Schema::create('insurancetypes', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('type');
		});
	}


	public function down()
	{
		Schema::drop('insurancetypes');
	}

}
