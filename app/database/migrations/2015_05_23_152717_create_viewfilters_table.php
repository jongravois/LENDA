<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateViewfiltersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('viewfilters', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('user_id');
			$table->string('filterRegions')->default('all');
			$table->string('filterFarmers')->default('all');
			$table->string('filterAnalysts')->default('all');
			$table->string('filterCropYears')->default('all');
			$table->string('filterSeasons')->default('all');
			$table->string('filterLoanTypes')->default('all');
			$table->string('filterDistributors')->default('all');
			$table->string('filterAgencies')->default('all');
			$table->boolean('filterAddendums')->default(0);
			$table->boolean('filterComments')->default(0);
			$table->boolean('filterBankruptcy')->default(0);
			$table->boolean('filterThirdParty')->default(0);
			$table->boolean('filterAddedLand')->default(0);
			$table->boolean('filterControlledDisbursements')->default(0);
			$table->boolean('filterAttachments')->default(0);
			$table->boolean('filterFilterLimitClose')->default(0);
			$table->boolean('filterFilterLimitExceeded')->default(0);
			$table->string('togAppDate')->default('all');
			$table->string('togCloseDate')->default('all');
			$table->string('togCommitTotal')->default('all');
			$table->string('togCommitArm')->default('all');
			$table->string('togCommitDist')->default('all');
			$table->string('togCommitOther')->default('all');
			$table->string('togFee')->default('all');
			$table->string('togRateArm')->default('all');
			$table->string('togRateDist')->default('all');
			$table->string('togRateOther')->default('all');
			$table->string('togAcresTotal')->default('all');
			$table->string('togAcresCorn')->default('all');
			$table->string('togAcresBeans')->default('all');
			$table->string('togAcresBeansFAC')->default('all');
			$table->string('togAcresSorghum')->default('all');
			$table->string('togAcresWheat')->default('all');
			$table->string('togAcresCotton')->default('all');
			$table->string('togAcresRice')->default('all');
			$table->string('togAcresPeanuts')->default('all');
			$table->string('togAcresCane')->default('all');
			$table->string('togAcresOther')->default('all');
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
		Schema::drop('viewfilters');
	}

}
