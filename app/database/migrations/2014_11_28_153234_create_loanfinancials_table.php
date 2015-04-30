<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLoanfinancialsTable extends Migration {

	public function up()
	{
		Schema::create('loanfinancials', function(Blueprint $table)
		{
            $table->increments('id');
            $table->integer('loan_id');
            $table->double('amount_requested')->default(0);
            $table->double('guaranty')->default(0); //calc
            $table->double('prod')->default(0); //calc
            $table->double('adj_prod')->default(0); //calc
            $table->double('disc_prod_percent')->default(50);
            $table->double('non_rp_percent')->default(20);
            $table->double('claims_percent')->default(20);
            $table->double('supplement_insurance_discount_percent')->default(20);
            $table->double('other_discount_percent')->default(100);
            $table->double('fsa_assignment_percent')->default(20);
            $table->double('collateral_equipment')->default(0);
            $table->double('equipment_percent')->default(20);
            $table->double('collateral_realestate')->default(0);
            $table->double('realestate_percent')->default(40);
            $table->double('disc_prod')->default(0); //calc
            $table->double('disc_adj_prod')->default(0); //calc
            $table->double('ins_disc_prod')->default(0); //calc
            $table->double('disc_ins_percent')->default(20);
            $table->double('disc_ins')->default(0); //calc
            $table->double('commit_arm')->default(0);
            $table->double('commit_dist')->default(0);
            $table->double('commit_other')->default(0);
            $table->double('commit_total')->default(0);
            $table->double('fee_processing')->default(0);
            $table->double('proc_fee')->default(0); //calc
            $table->double('proc_fee_arm_only')->default(0);
            $table->boolean('fee_processing_onTotal')->default(1);
            $table->double('fee_service')->default(0);
            $table->double('srvc_fee')->default(0); //calc
            $table->double('srvc_fee_arm_only')->default(0);
            $table->boolean('fee_service_onTotal')->default(1);
            $table->double('total_fee_percent')->default(0); //calc
            $table->double('fee_total')->default(0); //calc
            $table->double('total_fsa_payment')->default(0); //calc
            $table->double('total_claims')->default(0); //calc
            $table->double('principal_arm')->default(0); //calc
            $table->double('principal_dist')->default(0); //calc
            $table->double('principal_other')->default(0); //calc
            $table->double('principal')->default(0); //calc
            $table->double('int_percent_arm')->default(0);
            $table->double('int_arm')->default(0); //calc
            $table->double('int_percent_dist')->default(0);
            $table->double('int_dist')->default(0); //calc
            $table->double('int_percent_other')->default(0);
            $table->double('int_other')->default(0); //calc
            $table->double('interest')->default(0); //calc
            $table->double('total_revenue')->default(0); //calc
            $table->double('arm_and_dist')->default(0); //calc
            $table->double('collateral')->default(0);
            $table->double('total_balance')->default(0);
            $table->double('remaining_balance')->default(0); //calc
            $table->double('balance_paid')->default(0);
            $table->double('cash_flow')->default(0); //calc
            $table->double('risk')->default(0); //calc
            $table->double('risk_adj')->default(0); //calc
            $table->double('max_loan')->default(0);
            $table->double('max_rate')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('loanfinancials');
	}

}
