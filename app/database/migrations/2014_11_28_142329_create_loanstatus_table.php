<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLoanstatusTable extends Migration {

	public function up()
	{
		Schema::create('loanstatus', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('status');
      $table->string('iconClass');
      $table->string('iconColor');
		});
	}


	public function down()
	{
		Schema::drop('loanstatus');
	}

}
