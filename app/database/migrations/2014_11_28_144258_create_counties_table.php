<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCountiesTable extends Migration {

	public function up()
	{
		Schema::create('counties', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('state_id');
      $table->integer('location_id')->default(4);
      $table->string('county');
      $table->string('label')->unique();
      $table->string('locale')->unique();
		});
	}

	public function down()
	{
		Schema::drop('counties');
	}

}
