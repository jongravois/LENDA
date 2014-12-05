<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateEntitytypesTable extends Migration {

	public function up()
	{
		Schema::create('entitytypes', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('entitytype');
		});
	}


	public function down()
	{
		Schema::drop('entitytypes');
	}

}
