<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCropdetailsTable extends Migration {

	public function up()
	{
		Schema::create('cropdetails', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('crop_year')->default(2015);
      $table->integer('loan_id');
      $table->integer('crop_id');
      $table->boolean('is_active')->default(0);
      $table->double('total_acres')->default(0);
      $table->boolean('irr')->default(0);
      $table->boolean('ni')->default(0);
      $table->boolean('faci')->default(0);
      $table->boolean('facni')->default(0);
      $table->string('towhom_market')->nullable();
      $table->double('bkqty')->default(0);
      $table->double('bkprice')->default(0);
      $table->string('gin_mill')->nullable();
      $table->double('rebates')->default(0);
      $table->double('harvest')->default(0);
      $table->double('prod_yield')->default(0);
      $table->double('prod_price')->default(0);
      $table->double('prod_share')->default(0);
      $table->double('disc_prod_percent')->default(50);
      $table->double('disc_ins_percent')->default(20);
      $table->double('break_even')->default(0);
      $table->double('p1_yield')->nullable();
      $table->double('p2_yield')->nullable();
      $table->double('p3_yield')->nullable();
      $table->double('p4_yield')->nullable();
      $table->double('p5_yield')->nullable();
      $table->double('p6_yield')->nullable();
      $table->double('percent_irrigated')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('cropdetails');
	}

}
