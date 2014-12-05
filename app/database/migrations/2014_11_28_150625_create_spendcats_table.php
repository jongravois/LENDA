<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSpendcatsTable extends Migration {

	public function up()
	{
		Schema::create('spendcats', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('category');
		});
	}


	public function down()
	{
		Schema::drop('spendcats');
	}

}
