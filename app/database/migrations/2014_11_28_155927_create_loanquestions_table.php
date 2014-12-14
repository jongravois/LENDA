<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLoanquestionsTable extends Migration {

	public function up()
	{
		Schema::create('loanquestions', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loan_id');
      //QUESTS
      $table->double('amount_requested')->default(0);
      $table->boolean('plant_own')->default(1);
      $table->string('plant_own_details')->nullable();
      $table->boolean('harvest_own')->default(1);
      $table->string('harvest_own_details')->nullable();
      $table->boolean('equip_obligations')->default(1);
      $table->string('equip_obligations_details')->nullable();
      $table->boolean('other_cash')->default(1);
      $table->string('other_cash_details')->nullable();
      $table->boolean('insInPlace')->default(1);
      $table->string('insInPlace_details')->nullable();
      $table->boolean('fsa_good')->default(1);
      $table->string('fsa_good_details')->nullable();
      $table->boolean('fci_good')->default(1);
      $table->string('fci_good_details')->nullable();
      $table->boolean('premiums_past')->default(0);
      $table->string('premiums_details')->nullable();
      $table->boolean('legal_defendant')->default(0);
      $table->string('defendant_details')->nullable();
      $table->boolean('judgements')->default(0);
      $table->string('judgement_details')->nullable();
      $table->boolean('bankruptcy')->default(0);
      $table->string('bankruptcy_details')->nullable();
      $table->boolean('bankruptcy_order')->default(0);
      $table->boolean('liens')->default(0);
      $table->string('liens_details')->nullable();
      $table->boolean('fsa_direct_pay')->default(0);
      $table->string('fsa_direct_pay_details')->nullable();
      $table->boolean('future_liabilities')->default(0);
      $table->boolean('credit_3p_available')->default(0);
      $table->string('credit_3p_details')->nullable();
      $table->float('income_percent')->default(100);
      $table->text('income_distribution_details')->nullable();
      $table->string('distributor')->nullable();
      $table->integer('agency')->nullable();
      $table->string('pesticide_number', 20)->nullable();
      $table->integer('credit_score')->default(0);
      $table->boolean('cpa_financials')->default(0);
      $table->text('affiliated_entities')->nullable();
      $table->text('farm_supplier_creditors')->nullable();
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('loanquestions');
	}

}
