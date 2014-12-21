<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCommentstatusTable extends Migration {

	public function up()
	{
		Schema::create('commentstatus', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('loan_id');
			$table->integer('comment_id');
			$table->integer('user_id');
			$table->string('status');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('commentstatus');
	}

}
