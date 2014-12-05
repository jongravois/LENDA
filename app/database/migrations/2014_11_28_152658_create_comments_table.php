<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCommentsTable extends Migration {

	public function up()
	{
		Schema::create('comments', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loan_id');
      $table->string('type');
      $table->string('user_id');
      $table->text('comment');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('comments');
	}

}
