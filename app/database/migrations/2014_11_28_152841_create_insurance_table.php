<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateInsuranceTable extends Migration {

	public function up()
	{
		Schema::create('insurance', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('crop_year');
      $table->integer('loan_id');
      $table->string('agency')->nullable();
      $table->string('agent')->nullable();
      $table->string('agent_phone')->nullable();
      $table->string('agent_email')->nullable();
      $table->string('policy')->nullable();
      $table->integer('loancounty_id')->nullable();
      $table->integer('loancrop_id')->nullable();
      $table->integer('croppractice_id')->nullable();
      $table->string('type')->nullable();
      $table->string('option')->nullable();
      $table->double('acres')->nullable();
      $table->double('price')->nullable();
      $table->double('aph')->nullable();
      $table->double('level')->nullable();
      $table->double('guaranty')->nullable();
      $table->double('premium')->nullable();
      $table->double('share')->nullable();
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('insurance');
	}

}
