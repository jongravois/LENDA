<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReportsTable extends Migration {

	public function up()
	{
		Schema::create('reports', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('report')->unique();
      $table->string('rptPath');
      $table->boolean('is_required')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('reports');
	}

}
