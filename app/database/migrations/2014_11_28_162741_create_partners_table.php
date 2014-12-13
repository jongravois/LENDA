<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePartnersTable extends Migration {

	public function up()
	{
		Schema::create('partners', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loan_id');
      $table->string('partner');
      $table->string('title');
      $table->double('percent_owned');
      $table->string('ssn');
      $table->string('address');
      $table->string('city');
      $table->string('state_id');
      $table->string('zip');
      $table->string('email');
      $table->string('phone');
      $table->integer('age');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('partners');
	}

}
