<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOptimizerviewoptionsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('optimizerviewoptions', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('user_id')->unsigned();
            $table->boolean('optim_rent_per_acre_ARM')->default(1);
            $table->boolean('optim_rent_per_acre_dist')->default(1);
            $table->boolean('optim_rent_per_acre_other')->default(1);
            $table->boolean('optim_fsa_per_acre_other')->default(1);
            $table->boolean('optim_ins_share')->default(1);
            $table->boolean('optim_ins_price')->default(1);
            $table->boolean('optim_ins_level')->default(1);
            $table->boolean('optim_ins_guarantee')->default(1);
            $table->boolean('optim_ins_premium')->default(1);
            $table->boolean('optim_ins_value')->default(1);
            $table->boolean('optim_ins_type')->default(1);
            $table->boolean('optim_sco_max')->default(1);
            $table->boolean('optim_prod_yield')->default(1);
            $table->boolean('optim_prod_share')->default(1);
            $table->boolean('optim_prod_price')->default(1);
            $table->boolean('optim_var_harvest')->default(1);
            $table->boolean('optim_rebate')->default(1);
            $table->boolean('optim_prod_rev')->default(1);
            $table->boolean('optim_prod_rev_adj')->default(1);
            $table->boolean('optim_budget_ARM')->default(1);
            $table->boolean('optim_budget_dist')->default(1);
            $table->boolean('optim_budget_other')->default(1);
            $table->boolean('optim_fee_ARM')->default(1);
            $table->boolean('optim_commit_ARM')->default(1);
            $table->boolean('optim_commit_dist')->default(1);
            $table->boolean('optim_interest_ARM')->default(1);
            $table->boolean('optim_interest_dist')->default(1);
            $table->boolean('optim_interest_other')->default(1);
            $table->boolean('optim_percent_disc_crop')->default(1);
            $table->boolean('optim_percent_disc_fsa')->default(1);
            $table->boolean('optim_percent_disc_cropins')->default(1);
            $table->boolean('optim_percent_disc_nonrp')->default(1);
            $table->boolean('optim_percent_disc_sco')->default(1);
            $table->boolean('optim_disc_crop')->default(1);
            $table->boolean('optim_optim_disc_collateral')->default(1);
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
		Schema::drop('optimizerviewoptions');
	}

}
