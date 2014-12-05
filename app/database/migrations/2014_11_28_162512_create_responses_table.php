<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateResponsesTable extends Migration {

	public function up()
	{
		Schema::create('responses', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loan_id');
      $table->integer('comment_id');
      $table->integer('user_id');
      $table->text('body');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('responses');
	}

}
