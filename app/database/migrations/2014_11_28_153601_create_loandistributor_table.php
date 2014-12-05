<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLoandistributorTable extends Migration {

	public function up()
	{
		Schema::create('loandistributor', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loan_id');
      $table->integer('distributor_id');
      $table->string('contact');
      $table->string('phone');
      $table->string('email');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('loandistributor');
	}

}
