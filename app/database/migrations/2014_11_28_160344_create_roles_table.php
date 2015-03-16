<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRolesTable extends Migration {

	public function up()
	{
		Schema::create('roles', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('abr');
            $table->string('role');
            $table->double('employment_status')->default(100);
            $table->boolean('matrix')->default(0);
		});
	}


	public function down()
	{
		Schema::drop('roles');
	}

}
