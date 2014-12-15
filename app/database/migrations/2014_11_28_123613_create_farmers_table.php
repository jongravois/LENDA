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
      $table->string('farmer');
      $table->string('nick')->nullable();
      $table->boolean('is_repeat')->default(0);
      $table->integer('loc_id')->default('4');
      $table->string('ssn')->unique();
      $table->string('address')->nullable();
      $table->string('city')->nullable();
      $table->integer('state_id')->nullable();
      $table->string('zip', 10)->nullable();
      $table->string('email')->nullable();
      $table->string('phone')->nullable();
      $table->date('dob')->nullable();
      $table->integer('first_year_farmer')->default(0);
      $table->integer('farm_exp')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('farmers');
	}

}
