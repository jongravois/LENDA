<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDefaultexpensesTable extends Migration {

	public function up()
	{
		Schema::create('defaultexpenses', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('crop_id');
      $table->double('fertilizer_arm_acre')->default(0);
      $table->double('fertilizer_dist_acre')->default(0);
      $table->double('fertilizer_other_acre')->default(0);
      $table->double('seed_arm_acre')->default(0);
      $table->double('seed_dist_acre')->default(0);
      $table->double('seed_other_acre')->default(0);
      $table->double('fungicide_arm_acre')->default(0);
      $table->double('fungicide_dist_acre')->default(0);
      $table->double('fungicide_other_acre')->default(0);
      $table->double('herbicide_arm_acre')->default(0);
      $table->double('herbicide_dist_acre')->default(0);
      $table->double('herbicide_other_acre')->default(0);
      $table->double('insecticide_arm_acre')->default(0);
      $table->double('insecticide_dist_acre')->default(0);
      $table->double('insecticide_other_acre')->default(0);
      $table->double('custom_arm_acre')->default(0);
      $table->double('custom_dist_acre')->default(0);
      $table->double('custom_other_acre')->default(0);
      $table->double('fuel_arm_acre')->default(0);
      $table->double('fuel_dist_acre')->default(0);
      $table->double('fuel_other_acre')->default(0);
      $table->double('labor_arm_acre')->default(0);
      $table->double('labor_dist_acre')->default(0);
      $table->double('labor_other_acre')->default(0);
      $table->double('repairs_arm_acre')->default(0);
      $table->double('repairs_dist_acre')->default(0);
      $table->double('repairs_other_acre')->default(0);
      $table->double('insurance_arm_acre')->default(0);
      $table->double('insurance_dist_acre')->default(0);
      $table->double('insurance_other_acre')->default(0);
      $table->double('harvesting_arm_acre')->default(0);
      $table->double('harvesting_dist_acre')->default(0);
      $table->double('harvesting_other_acre')->default(0);
      $table->double('misc_arm_acre')->default(0);
      $table->double('misc_dist_acre')->default(0);
      $table->double('misc_other_acre')->default(0);
		});
	}


	public function down()
	{
		Schema::drop('defaultexpenses');
	}

}
