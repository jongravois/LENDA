<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLocationsTable extends Migration {

	public function up()
	{
		Schema::create('locations', function(Blueprint $table)
		{
            $table->increments('id');
            $table->string('location');
            $table->string('loc_abr');
            $table->integer('region_id')->nullable();
            $table->string('address');
            $table->string('city');
            $table->string('state');
            $table->string('zip');
            $table->string('phone', 10);
            $table->integer('manager_id')->nullable();
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('locations');
	}

}
