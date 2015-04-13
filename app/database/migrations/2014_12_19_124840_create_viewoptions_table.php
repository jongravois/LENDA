<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateViewoptionsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('viewoptions', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('user_id');
			$table->boolean('view_region')->default(0);
			$table->boolean('view_season')->default(0);
			$table->boolean('view_distributor')->default(0);
			$table->boolean('view_agency')->default(0);
			$table->boolean('view_close_date')->default(0);
			$table->boolean('view_commit_total')->default(0);
			$table->boolean('view_commit_arm')->default(1);
			$table->boolean('view_commit_distributor')->default(0);
			$table->boolean('view_commit_other')->default(0);
			$table->boolean('view_fee_percentage')->default(0);
			$table->boolean('view_fee_total')->default(0);
			$table->boolean('view_rate_arm')->default(0);
			$table->boolean('view_rate_dist')->default(0);
			$table->boolean('view_balance_due')->default(0);
			$table->boolean('view_acres_total')->default(0);
			$table->boolean('view_acres_corn')->default(0);
			$table->boolean('view_acres_soybeans')->default(0);
			$table->boolean('view_acres_sorghum')->default(0);
			$table->boolean('view_acres_wheat')->default(0);
			$table->boolean('view_acres_cotton')->default(0);
			$table->boolean('view_acres_rice')->default(0);
			$table->boolean('view_acres_peanuts')->default(0);
			$table->boolean('view_acres_sugar_cane')->default(0);
			$table->boolean('view_icon_addendum')->default(1);
			$table->boolean('view_icon_cross')->default(1);
			$table->boolean('view_icon_bankruptcy')->default(1);
			$table->boolean('view_icon_3pcredit')->default(1);
			$table->boolean('view_icon_addedland')->default(1);
			$table->boolean('view_icon_disbursement')->default(1);
			$table->boolean('view_icon_attachments')->default(1);
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
		Schema::drop('viewoptions');
	}

}
