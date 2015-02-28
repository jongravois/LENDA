<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGrainstorageTable extends Migration {

	public function up()
	{
		Schema::create('grainstorage', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('loan_id')->nullable();
			$table->string('contract_number')->nullable();
			$table->string('commodity')->nullable();
			$table->string('grain_buyer')->nullable();
			$table->string('lien_holder')->nullable();
			$table->date('contract_date')->nullable();
			$table->date('delivery_date')->nullable();
			$table->double('contract_amount')->default(0);
			$table->double('contract_price')->default(0);
			$table->double('owner_share')->default(0);
			$table->double('amount_requested')->default(0);
			$table->double('revenue')->default(0);
			$table->double('eligible_proceeds')->default(0);
			$table->double('advance_percent')->default(75);
			$table->double('payment_terms')->default(15);
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('grainstorage');
	}

}
