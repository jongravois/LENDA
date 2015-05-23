<?php

class Reportfilters extends \Eloquent {
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['user_id', 'filterRegions', 'filterFarmers', 'filterAnalysts', 'filterCropYears', 'filterSeasons', 'filterLoanTypes', 'filterDistributors', 'filterAgencies', 'filterAddendums', 'filterComments', 'filterBankruptcy', 'filterThirdParty', 'filterAddedLand', 'filterControlledDisbursements', 'filterAttachments', 'filterFilterLimitClose', 'filterFilterLimitExceeded', 'togAppDate', 'togCloseDate', 'togCommitTotal', 'togCommitArm', 'togCommitDist', 'togCommitOther', 'togFee', 'togRateArm', 'togRateDist', 'togRateOther', 'togAcresTotal', 'togAcresCorn', 'togAcresBeans', 'togAcresBeansFAC', 'togAcresSorghum', 'togAcresWheat', 'togAcresCotton', 'togAcresRice', 'togAcresPeanuts', 'togAcresCane', 'togAcresOther'];

    public function user()
    {
        return $this->belongsTo('User', 'user_id');
    }
}