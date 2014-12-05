<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLoantypesTable extends Migration {

	public function up()
	{
		Schema::create('loantypes', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('loantype');
      $table->string('ltPath');
		});
	}


	public function down()
	{
		Schema::drop('loantypes');
	}

}
