<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStaffTable extends Migration {

	public function up()
	{
		Schema::create('staff', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('user_id');
      $table->string('username')->unique();
      $table->string('nick')->nullable();
      $table->string('email')->unique();
      $table->string('phone')->nullable();
      $table->integer('loc_id')->nullable();
      $table->integer('manager_id');
      $table->boolean('is_admin')->default(0);
      $table->boolean('is_approver')->default(0);
      $table->boolean('is_manager')->default(0);
      $table->integer('role_id')->default(5);
      $table->timestamps();
		});
	}

  public function down()
	{
		Schema::drop('staff');
	}

}
