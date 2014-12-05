<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLoanassetsTable extends Migration {

	public function up()
	{
		Schema::create('loanassets', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loan_id');
      $table->double('total_arm');
      $table->double('total_dist');
      $table->double('total_other');
      $table->double('total_total');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('loanassets');
	}

}
