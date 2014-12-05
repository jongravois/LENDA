<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSystemicsTable extends Migration {

	public function up()
	{
		Schema::create('systemics', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loan_id');
      $table->string('user');
      $table->string('action');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('systemics');
	}

}
