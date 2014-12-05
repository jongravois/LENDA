<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateVotestatusTable extends Migration {

	public function up()
	{
		Schema::create('votestatus', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('status');
		});
	}


	public function down()
	{
		Schema::drop('votestatus');
	}

}
