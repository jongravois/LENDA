<?php

class Staffprofile extends \Eloquent {
  protected $table = 'staffprofiles';
  protected $hidden = ['created_at', 'updated_at'];
  protected $fillable = ['user_id', 'homepage', 'cbCommentLenda', 'cbCommentCommittee', 'cbCommentAnalyst', 'cbCommentAccount', 'cbStatusInProgress', 'cbStatusRecommended', 'cbStatusWithdrawn', 'cbStatusApproved', 'cbStatusDenied', 'cbStatusPaid', 'filterRegions', 'filterFarmers', 'filterAnalysts', 'filterCropYears', 'filterSeasons', 'filterLoanTypes', 'filterDistributors', 'filterAgencies', 'filterAddendums', 'filterComments', 'filterBankruptcy', 'filterThirdParty', 'filterAddedLand', 'filterControlledDisbursements', 'filterAttachments', 'filterFilterLimitClose', 'filterFilterLimitExceeded', 'togAppDate', 'togCloseDate', 'togCommitTotal', 'togCommitArm', 'togCommitDist', 'togCommitOther', 'togFee', 'togRateArm', 'togRateDist', 'togRateOther', 'togAcresTotal', 'togAcresCorn', 'togAcresBeans', 'togAcresSorghum', 'togAcresWheat', 'togAcresCotton', 'togAcresRice', 'togAcresPeanuts', 'togAcresCane', 'show_region', 'show_season', 'show_distributor', 'show_agency', 'show_close_date', 'show_commit_total', 'show_commit_arm', 'show_commit_distributor', 'show_commit_other', 'view_fee_percentage', 'view_fee_total', 'view_rate_arm', 'view_rate_dist', 'balance_due', 'view_acres_total', 'view_acres_corn', 'view_acres_soybeans', 'view_acres_sorghum', 'view_acres_wheat', 'view_acres_cotton', 'view_acres_rice', 'view_acres_peanuts', 'view_acres_sugar_cane'];

  public function user()
  {
    return $this->belongsTo('User', 'user_id');
  }
}