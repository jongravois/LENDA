<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateVoteTable extends Migration {

	public function up()
	{
		Schema::create('vote', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('vote');
		});
	}


	public function down()
	{
		Schema::drop('vote');
	}

}
