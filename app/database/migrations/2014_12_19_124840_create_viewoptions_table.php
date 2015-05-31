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
			$table->boolean('voAcresBeansFAC')->default(0);
			$table->boolean('voAcresCorn')->default(0);
			$table->boolean('voAcresCotton')->default(0);
			$table->boolean('voAcresOther')->default(0);
			$table->boolean('voAcresPeanuts')->default(0);
			$table->boolean('voAcresRice')->default(0);
			$table->boolean('voAcresSorghum')->default(0);
			$table->boolean('voAcresSoybeans')->default(0);
			$table->boolean('voAcresSugarcane')->default(0);
			$table->boolean('voAcresTotal')->default(0);
			$table->boolean('voAcresWheat')->default(0);
			$table->boolean('voAgency')->default(0);
			$table->boolean('voBalanceDue')->default(0);
			$table->boolean('voCloseDate')->default(0);
			$table->boolean('voDueDate')->default(0);
			$table->boolean('voCommitArm')->default(1);
			$table->boolean('voCommitDistributor')->default(0);
			$table->boolean('voCommitOther')->default(0);
			$table->boolean('voCommitTotal')->default(0);
			$table->boolean('voDistributor')->default(0);
			$table->boolean('voFeePercentage')->default(0);
			$table->boolean('voFeeTotal')->default(0);
			$table->boolean('voIcon3pcredit')->default(1);
			$table->boolean('voIconAddedland')->default(1);
			$table->boolean('voIconAddendum')->default(1);
			$table->boolean('voIconAttachments')->default(1);
			$table->boolean('voIconBankruptcy')->default(1);
			$table->boolean('voIconCross')->default(1);
			$table->boolean('voIconDisbursement')->default(1);
			$table->boolean('voRateArm')->default(0);
			$table->boolean('voRateDist')->default(0);
			$table->boolean('voRegion')->default(0);
			$table->boolean('voSeason')->default(0);
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
