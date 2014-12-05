<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLoanpracticesTable extends Migration {

	public function up()
	{
		Schema::create('loanpractices', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('crop_year')->default(2015);
      $table->integer('loan_id');
      $table->integer('crop_id');
      $table->string('crop');
      $table->boolean('is_active')->default(0);
      $table->string('ins_type')->default('RP');
      $table->string('ins_option')->default('EU');
      $table->double('ins_price')->nullable();
      $table->double('ins_level')->default(75);
      $table->double('aph')->default(0);
      $table->double('ins_premium')->default(0);
      $table->double('acres')->default(0);
      $table->double('ins_share')->default(100);
      $table->double('guaranty')->default(0);
      $table->double('value')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('loanpractices');
	}

}
