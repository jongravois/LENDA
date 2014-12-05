<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLoancapacityTable extends Migration {

	public function up()
	{
		Schema::create('loancapacity', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loan_id');
      $table->double('year_1_revenue')->default(0);
      $table->double('year_1_expenses')->default(0);
      $table->double('year_2_revenue')->default(0);
      $table->double('year_2_expenses')->default(0);
      $table->double('year_3_revenue')->default(0);
      $table->double('year_3_expenses')->default(0);
      $table->double('current_asset')->default(0);
      $table->double('current_discount')->default(0);
      $table->double('current_liability')->default(0);
      $table->double('intermediate_asset')->default(0);
      $table->double('intermediate_discount')->default(0);
      $table->double('intermediate_liability')->default(0);
      $table->double('fixed_asset')->default(0);
      $table->double('fixed_discount')->default(0);
      $table->double('fixed_liability')->default(0);
      $table->double('corn_acres')->default(0);
      $table->double('soybean_acres')->default(0);
      $table->double('sorghum_acres')->default(0);
      $table->double('wheat_acres')->default(0);
      $table->double('cotton_acres')->default(0);
      $table->double('rice_acres')->default(0);
      $table->double('peanut_acres')->default(0);
      $table->double('sugarcane_acres')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('loancapacity');
	}

}
