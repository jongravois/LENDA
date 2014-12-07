<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateClientprofilesTable extends Migration {

	public function up()
	{
		Schema::create('clientprofiles', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('user_id')->nullable();
      $table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('clientprofiles');
	}

}
