<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAgentsTable extends Migration {

	public function up()
	{
		Schema::create('agents', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('agency_id');
			$table->string('agent')->nullable();
			$table->string('agent_phone')->nullable();
			$table->string('agent_email')->nullable();
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('agents');
	}

}
