<?php

class Profile extends \Eloquent
{
    protected $table = 'profiles';
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['user_id', 'homepage', 'cbCommentLenda', 'cbCommentCommittee', 'cbCommentAnalyst', 'cbCommentAccount', 'cbStatusInProgress', 'cbStatusRecommended', 'cbStatusWithdrawn', 'cbStatusApproved', 'cbStatusDenied', 'cbStatusPaid', 'filterRegions', 'filterFarmers', 'filterAnalysts', 'filterCropYears', 'filterSeasons', 'filterLoanTypes', 'filterDistributors', 'filterAgencies', 'filterAddendums', 'filterComments', 'filterBankruptcy', 'filterThirdParty', 'filterAddedLand', 'filterControlledDisbursements', 'filterAttachments', 'filterFilterLimitClose', 'filterFilterLimitExceeded', 'togAppDate', 'togCloseDate', 'togCommitTotal', 'togCommitArm', 'togCommitDist', 'togCommitOther', 'togFee', 'togRateArm', 'togRateDist', 'togRateOther', 'togAcresTotal', 'togAcresCorn', 'togAcresBeans', 'togAcresSorghum', 'togAcresWheat', 'togAcresCotton', 'togAcresRice', 'togAcresPeanuts', 'togAcresCane'];

    public function user()
    {
        return $this->belongsTo('User', 'user_id');
    }
}