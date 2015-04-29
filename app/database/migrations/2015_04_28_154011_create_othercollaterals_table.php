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
			$table->string('source');
			$table->text('description')->nullable();
			$table->double('amount')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('othercollaterals');
	}

}
