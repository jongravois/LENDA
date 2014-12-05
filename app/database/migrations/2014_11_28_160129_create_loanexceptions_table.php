<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLoanexceptionsTable extends Migration {

	public function up()
	{
		Schema::create('loanexceptions', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loan_id');
      $table->integer('exception_id');
      $table->text('msg');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('loanexceptions');
	}

}
