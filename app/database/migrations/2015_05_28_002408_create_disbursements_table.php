<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDisbursementsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('disbursements', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('loan_id')->unsigned();
            $table->string('crop_year');
            $table->integer('cat_id')->unsigned();
            $table->string('expense');
            $table->double('arm_budget')->default(0);
            $table->double('spent')->default(0);
            $table->double('requested')->default(0);
            $table->string('status')->default('pending');
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
		Schema::drop('disbursements');
	}

}
