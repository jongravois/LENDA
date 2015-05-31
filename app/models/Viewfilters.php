<?php

class Viewfilters extends \Eloquent {
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['user_id', 'vfAcresBeans', 'vfAcresBeansFilter', 'vfAcresBeansFAC',  'vfAcresBeansFACFilter', 'vfAcresCane', 'vfAcresCaneFilter', 'vfAcresCorn', 'vfAcresCornFilter', 'vfAcresCotton', 'vfAcresCottonFilter', 'vfAcresOther', 'vfAcresOtherFilter', 'vfAcresPeanuts', 'vfAcresPeanutsFilter', 'vfAcresRice', 'vfAcresRiceFilter', 'vfAcresSorghum', 'vfAcresSorghumFilter', 'vfAcresTotal', 'vfAcresTotalFilter', 'vfAcresWheat', 'vfAcresWheatFilter', 'vfAddedLand', 'vfAddendums', 'vfAgencies', 'vfAnalysts', 'vfAppDate', 'vfAppDateFilter', 'vfAttachments', 'vfBankruptcy', 'vfCloseDate', 'vfCloseDateFilter', 'vfCommentAccount', 'vfCommentAnalyst', 'vfCommentCommittee', 'vfCommentSystem', 'vfComments', 'vfCommitArm', 'vfCommitArmFilter', 'vfCommitDist', 'vfCommitDistFilter', 'vfCommitOther', 'vfCommitOtherFilter', 'vfCommitTotal', 'vfCommitTotalFilter', 'vfCropYears', 'vfDisbursements', 'vfDistributors', 'vfDueDateview', 'vfFarmers', 'vfFee', 'vfFeeFilter', 'vfLimitClose', 'vfLimitExceeded', 'vfLoanTypes', 'vfRateArm', 'vfRateArmFilter', 'vfRateDist', 'vfRateDistFilter', 'vfRateOther', 'vfRegions', 'vfSeasons', 'vfStatusApproved', 'vfStatusDenied', 'vfStatusInProgress', 'vfStatusPaid', 'vfStatusRecommended', 'vfStatusWithdrawn', 'vfThirdParty'];

    public function user()
    {
        return $this->belongsTo('User', 'user_id');
    }
}