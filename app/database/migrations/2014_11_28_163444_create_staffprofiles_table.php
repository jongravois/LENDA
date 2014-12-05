<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStaffprofilesTable extends Migration {

	public function up()
	{
		Schema::create('staffprofiles', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('user_id');
      $table->string('homepage')->default('ll');
      $table->boolean('cbCommentLenda')->default(1);
      $table->boolean('cbCommentCommittee')->default(1);
      $table->boolean('cbCommentAnalyst')->default(1);
      $table->boolean('cbCommentAccount')->default(1);
      $table->boolean('cbStatusInProgress')->default(1);
      $table->boolean('cbStatusRecommended')->default(1);
      $table->boolean('cbStatusWithdrawn')->default(0);
      $table->boolean('cbStatusApproved')->default(1);
      $table->boolean('cbStatusDenied')->default(0);
      $table->boolean('cbStatusPaid')->default(0);
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
      $table->string('togAcresSorghum')->default('all');
      $table->string('togAcresWheat')->default('all');
      $table->string('togAcresCotton')->default('all');
      $table->string('togAcresRice')->default('all');
      $table->string('togAcresPeanuts')->default('all');
      $table->string('togAcresCane')->default('all');
      $table->boolean('show_region')->default(0);
      $table->boolean('show_season')->default(0);
      $table->boolean('show_distributor')->default(0);
      $table->boolean('show_agency')->default(0);
      $table->boolean('show_close_date')->default(0);
      $table->boolean('show_commit_total')->default(0);
      $table->boolean('show_commit_arm')->default(0);
      $table->boolean('show_commit_distributor')->default(0);
      $table->boolean('show_commit_other')->default(0);
      $table->boolean('view_fee_percentage')->default(0);
      $table->boolean('view_fee_total')->default(0);
      $table->boolean('view_rate_arm')->default(0);
      $table->boolean('view_rate_dist')->default(0);
      $table->boolean('balance_due')->default(0);
      $table->boolean('view_acres_total')->default(0);
      $table->boolean('view_acres_corn')->default(0);
      $table->boolean('view_acres_soybeans')->default(0);
      $table->boolean('view_acres_sorghum')->default(0);
      $table->boolean('view_acres_wheat')->default(0);
      $table->boolean('view_acres_cotton')->default(0);
      $table->boolean('view_acres_rice')->default(0);
      $table->boolean('view_acres_peanuts')->default(0);
      $table->boolean('view_acres_sugar_cane')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('staffprofiles');
	}

}
