<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSupplementalinsurancesTable extends Migration {

	public function up()
	{
		Schema::create('supplementalinsurances', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('insurance_id')->unsigned();
			$table->string('supplement')->default('STAX');
			$table->boolean('harvest_price_exclusion')->default(0);
			$table->double('loss_trigger')->default(86);
			$table->double('desired_range')->nullable();
			$table->double('protection_factor')->nullable();
			$table->double('expected_yield')->default(0);
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('supplementalinsurances');
	}

}
