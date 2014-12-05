<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('email')->unique();
      $table->string('password', 60);
      $table->boolean('active')->default(1);
      $table->boolean('is_staff')->default(0);
      $table->string('remember_token', 60)->nullable();
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('users');
	}

}
