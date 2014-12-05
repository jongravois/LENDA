<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUnitsTable extends Migration {

	public function up()
	{
		Schema::create('units', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('unit');
      $table->string('abr');
		});
	}


	public function down()
	{
		Schema::drop('units');
	}

}
