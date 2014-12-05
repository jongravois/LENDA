<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCommitteeTable extends Migration {

	public function up()
	{
		Schema::create('committee', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loan_id');
      $table->integer('role_id');
      $table->integer('user_id');
      $table->integer('vote_status_id');
      $table->integer('vote_id')->nullable();
      $table->date('vote_request_date')->nullable();
      $table->date('vote_received_date')->nullable();
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('committee');
	}

}
