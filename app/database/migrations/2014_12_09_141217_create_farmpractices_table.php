<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFarmpracticesTable extends Migration {

	public function up()
	{
		Schema::create('farmpractices', function(Blueprint $table)
		{
      $table->increments('id');
      $table->integer('crop_year')->default(2015);
      $table->integer('loan_id');
      $table->integer('farm_id');
      $table->integer('crop_id');
      $table->string('practice');
      $table->string('ins_type')->default('RP');
      $table->string('ins_option')->default('EU');
      $table->double('ins_price')->nullable();
      $table->double('ins_level')->default(75);
      $table->double('aph')->default(0);
      $table->double('ins_premium')->default(0);
      $table->double('acres')->default(0);
      $table->double('ins_share')->default(100);
      $table->double('prod_share')->default(100);
      $table->double('mill_share')->default(0);
      $table->double('prod_yield')->default(0);
      $table->double('prod_price')->default(0);
      $table->double('bkqty')->default(0);
      $table->double('bkprice')->default(0);
      $table->double('harvest')->default(0);
      $table->double('rebates')->default(0);
      $table->double('disc_prod_percent')->default(50);
      $table->double('disc_ins_percent')->default(20);
      $table->double('disc_non_rp')->default(0);
      $table->double('percent_irrigated')->default(0);
      $table->double('break_even')->default(0);
      $table->double('margin')->default(0);
      $table->double('risk')->default(0);
      $table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('farmpractices');
	}

}
