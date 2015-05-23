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
			$table->string('abr');
			$table->integer('sort_order');
            $table->string('default_due_date')->default('-12-15');
		});
	}


	public function down()
	{
		Schema::drop('loantypes');
	}

}
