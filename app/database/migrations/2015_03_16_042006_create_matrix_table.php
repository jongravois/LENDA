<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateMatrixTable extends Migration {

	public function up()
	{
		Schema::create('matrix', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('group_heading')->nullable();
            $table->string('responsibility')->nullable();
            $table->string('CEO')->nullable();
            $table->string('ABM')->nullable();
            $table->string('MGR')->nullable();
            $table->string('OAS')->nullable();
            $table->string('LBM')->nullable();
            $table->string('LOF')->nullable();
            $table->string('LAN')->nullable();
            $table->string('CON')->nullable();
            $table->string('HRM')->nullable();
            $table->string('IBM')->nullable();
            $table->string('IAS')->nullable();
            $table->string('COM')->nullable();
		});
	}


	public function down()
	{
		Schema::drop('matrix');
	}

}
