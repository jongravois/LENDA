<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateApplicantfinancialsTable extends Migration {

	public function up()
	{
		Schema::create('applicantfinancials', function(Blueprint $table)
		{
			$table->increments('id');
            $table->integer('applicant_id')->unsigned();
            $table->double('amount_requested')->default(0);
            $table->integer('loan_id')->unsigned();
            $table->boolean('cpa_financials')->default(0);
            $table->boolean('bankruptcy')->default(0);
            $table->boolean('judgements')->default(0);
            $table->double('experience')->default(0);
            $table->double('credit_score')->default(0);
            $table->string('grade')->default('F');
            $table->double('year_1_revenue')->default(0);
            $table->double('year_1_expenses')->default(0);
            $table->double('year_2_revenue')->default(0);
            $table->double('year_2_expenses')->default(0);
            $table->double('year_3_revenue')->default(0);
            $table->double('year_3_expenses')->default(0);
            $table->double('current_assets')->default(0);
            $table->double('current_assets_factor')->default(85);
            $table->double('current_assets_liability')->default(0);
            $table->double('intermediate_assets')->default(0);
            $table->double('intermediate_assets_factor')->default(60);
            $table->double('intermediate_assets_liability')->default(0);
            $table->double('fixed_assets')->default(0);
            $table->double('fixed_assets_factor')->default(75);
            $table->double('fixed_assets_liability')->default(0);
            $table->double('debt2asset_ratio')->default(0);
            $table->double('debt2asset_ratio_adj')->default(0);
            $table->double('ratio_current')->default(0);
            $table->double('ratio_current_adj')->default(0);
            $table->double('capWork')->default(0);
            $table->double('capWork_adj')->default(0);
            $table->double('capBorrow')->default(0);
            $table->double('capBorrow_adj')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('applicantfinancials');
	}

}
