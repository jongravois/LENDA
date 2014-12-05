<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRequireddocumentsTable extends Migration {

	public function up()
	{
		Schema::create('requireddocuments', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loantype_id');
      $table->string('document');
		});
	}


	public function down()
	{
		Schema::drop('requireddocuments');
	}

}
