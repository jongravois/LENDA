<?php

class Viewoptions extends \Eloquent {
	protected $fillable = ['user_id', 'voAcresBeansFAC', 'voAcresCorn', 'voAcresCotton', 'voAcresOther', 'voAcresPeanuts', 'voAcresRice', 'voAcresSorghum', 'voAcresSoybeans', 'voAcresSugarcane', 'voAcresTotal', 'voAcresWheat', 'voAgency', 'voBalanceDue', 'voCloseDate', 'voCommitArm', 'voCommitDistributor', 'voCommitOther', 'voCommitTotal', 'voDistributor', 'voDueDate', 'voFeePercentage', 'voFeeTotal', 'voIcon3pcredit', 'voIconAddedland', 'voIconAddendum', 'voIconAttachments', 'voIconBankruptcy', 'voIconCross', 'voIconDisbursement', 'voRateArm', 'voRateDist', 'voRegion', 'voSeason'];

	public function user()
	{
		return $this->belongsTo('User', 'user_id');
	}
}