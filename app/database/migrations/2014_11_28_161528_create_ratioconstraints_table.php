<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRatioconstraintsTable extends Migration {

	public function up()
	{
		Schema::create('ratioconstraints', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('constraint');
      $table->double('gradeA');
      $table->double('gradeB');
      $table->double('gradeC');
      $table->double('gradeD');
		});
	}


	public function down()
	{
		Schema::drop('ratioconstraints');
	}

}
