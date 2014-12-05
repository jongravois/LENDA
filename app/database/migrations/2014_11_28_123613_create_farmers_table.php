<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFarmersTable extends Migration {

	public function up()
	{
		Schema::create('farmers', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('user_id');
      $table->string('farmer')->unique();
      $table->string('nick')->nullable();
      $table->string('ssn')->unique();
      $table->string('address')->nullable();
      $table->string('city')->nullable();
      $table->integer('state_id')->nullable();
      $table->string('zip', 10)->nullable();
      $table->string('email')->nullable();
      $table->string('phone')->nullable();
      $table->date('dob')->nullable();
      $table->integer('farm_exp')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('farmers');
	}

}
