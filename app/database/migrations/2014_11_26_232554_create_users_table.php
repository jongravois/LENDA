<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('username')->unique();
			$table->string('nick')->nullable();
            $table->string('email')->unique();
            $table->string('password', 60);
			$table->string('phone')->nullable();
			$table->integer('loc_id')->nullable();
			$table->integer('region_id')->nullable();
			$table->integer('manager_id')->nullable();
			$table->integer('closer_id')->nullable();
			$table->boolean('is_admin')->default(0);
			$table->boolean('is_approver')->default(0);
			$table->boolean('is_manager')->default(0);
			$table->integer('role_id')->default(5);
            $table->boolean('active')->default(1);
            $table->boolean('comms_email')->default(1);
            $table->boolean('comms_sms')->default(1);
            $table->boolean('comms_outlook')->default(1);
            $table->boolean('comms_online')->default(1);
            $table->string('remember_token', 100)->nullable();
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('users');
	}

}
