<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProfilesTable extends Migration {

	public function up()
	{
		Schema::create('profiles', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('user_id');
			$table->string('homepage')->default('ll');
			$table->boolean('cbCommentLenda')->default(1);
			$table->boolean('cbCommentCommittee')->default(1);
			$table->boolean('cbCommentAnalyst')->default(1);
			$table->boolean('cbCommentAccount')->default(1);
			$table->boolean('cbStatusInProgress')->default(1);
			$table->boolean('cbStatusRecommended')->default(1);
			$table->boolean('cbStatusWithdrawn')->default(0);
			$table->boolean('cbStatusApproved')->default(1);
			$table->boolean('cbStatusDenied')->default(0);
			$table->boolean('cbStatusPaid')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('profiles');
	}

}
