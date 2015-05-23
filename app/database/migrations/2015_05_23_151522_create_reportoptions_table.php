<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReportoptionsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('reportoptions', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('user_id');
			$table->boolean('report_region')->default(0);
			$table->boolean('report_season')->default(0);
			$table->boolean('report_distributor')->default(0);
			$table->boolean('report_agency')->default(0);
			$table->boolean('report_close_date')->default(0);
			$table->boolean('report_commit_total')->default(0);
			$table->boolean('report_commit_arm')->default(1);
			$table->boolean('report_commit_distributor')->default(0);
			$table->boolean('report_commit_other')->default(0);
			$table->boolean('report_fee_percentage')->default(0);
			$table->boolean('report_fee_total')->default(0);
			$table->boolean('report_rate_arm')->default(0);
			$table->boolean('report_rate_dist')->default(0);
			$table->boolean('report_balance_due')->default(0);
			$table->boolean('report_acres_total')->default(0);
			$table->boolean('report_acres_corn')->default(0);
			$table->boolean('report_acres_soybeans')->default(0);
			$table->boolean('report_acres_sorghum')->default(0);
			$table->boolean('report_acres_wheat')->default(0);
			$table->boolean('report_acres_cotton')->default(0);
			$table->boolean('report_acres_rice')->default(0);
			$table->boolean('report_acres_peanuts')->default(0);
			$table->boolean('report_acres_sugar_cane')->default(0);
			$table->boolean('report_acres_other')->default(0);
			$table->boolean('report_icon_addendum')->default(1);
			$table->boolean('report_icon_cross')->default(1);
			$table->boolean('report_icon_bankruptcy')->default(1);
			$table->boolean('report_icon_3pcredit')->default(1);
			$table->boolean('report_icon_addedland')->default(1);
			$table->boolean('report_icon_disbursement')->default(1);
			$table->boolean('report_icon_attachments')->default(1);
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
		Schema::drop('reportoptions');
	}

}
