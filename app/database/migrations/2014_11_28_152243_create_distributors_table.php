<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDistributorsTable extends Migration {

	public function up()
	{
		Schema::create('distributors', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('distributor')->unique();
      $table->string('name');
      $table->string('address')->nullable();
      $table->string('city')->nullable();
      $table->string('state_id')->nullable();
      $table->string('zip')->nullable();
      $table->string('phone')->nullable();
      $table->string('email')->nullable();
		});
	}


	public function down()
	{
		Schema::drop('distributors');
	}

}
