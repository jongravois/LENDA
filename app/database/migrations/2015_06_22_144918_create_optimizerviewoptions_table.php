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
            $table->boolean('rent_per_acre_ARM')->default(1);
            $table->boolean('rent_per_acre_dist')->default(1);
            $table->boolean('rent_per_acre_other')->default(1);
            $table->boolean('fsa_per_acre_other')->default(1);
            $table->boolean('ins_share')->default(1);
            $table->boolean('ins_price')->default(1);
            $table->boolean('ins_level')->default(1);
            $table->boolean('ins_guarantee')->default(1);
            $table->boolean('ins_premium')->default(1);
            $table->boolean('ins_value')->default(1);
            $table->boolean('ins_type')->default(1);
            $table->boolean('sco_max')->default(1);
            $table->boolean('prod_yield')->default(1);
            $table->boolean('prod_share')->default(1);
            $table->boolean('prod_price')->default(1);
            $table->boolean('var_harvest')->default(1);
            $table->boolean('rebate')->default(1);
            $table->boolean('prod_rev')->default(1);
            $table->boolean('prod_rev_adj')->default(1);
            $table->boolean('budget_ARM')->default(1);
            $table->boolean('budget_dist')->default(1);
            $table->boolean('budget_other')->default(1);
            $table->boolean('fee_ARM')->default(1);
            $table->boolean('commit_ARM')->default(1);
            $table->boolean('commit_dist')->default(1);
            $table->boolean('interest_ARM')->default(1);
            $table->boolean('interest_dist')->default(1);
            $table->boolean('interest_other')->default(1);
            $table->boolean('percent_disc_crop')->default(1);
            $table->boolean('percent_disc_fsa')->default(1);
            $table->boolean('percent_disc_cropins')->default(1);
            $table->boolean('percent_disc_nonrp')->default(1);
            $table->boolean('percent_disc_sco')->default(1);
            $table->boolean('disc_crop')->default(1);
            $table->boolean('disc_fsa')->default(1);
            $table->boolean('disc_insovercrop')->default(1);
            $table->boolean('disc_ins')->default(1);
            $table->boolean('disc_sco')->default(1);
            $table->boolean('disc_collateral')->default(1);
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
