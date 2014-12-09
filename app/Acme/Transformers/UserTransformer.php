<?php namespace Acme\Transformers;


class UserTransformer extends Transformer
{

  public function transform($arr)
  {
    //return $arr;

    if($arr['is_staff']){
      return [
        'email' => $arr['email'],
        'username' => $arr['staff']['username'],
        'nick' => $arr['staff']['nick'],
        'phone' => $arr['staff']['phone'],
        'loc_id' => $arr['staff']['loc_id'],
        'loc_abr' => $arr['staff']['location']['loc_abr'],
        'location' => $arr['staff']['location']['location'],
        'is_admin' => (boolean) $arr['staff']['is_admin'],
        'is_approver' => (boolean) $arr['staff']['is_approver'],
        'is_manager' => (boolean) $arr['staff']['is_manager'],
        'is_staff' => (boolean) $arr['is_staff'],
        'role_id' => $arr['staff']['role_id'],
        'role' => $arr['staff']['role']['role'],
        'role_abr' => $arr['staff']['role']['abr'],
        'homepage' => $arr['staffprofile']['homepage'],
        'cbCommentLenda' => (boolean) $arr['staffprofile']['cbCommentLenda'],
        'cbCommentCommittee' => (boolean) $arr['staffprofile']['cbCommentCommittee'],
        'cbCommentAnalyst' => (boolean) $arr['staffprofile']['cbCommentAnalyst'],
        'cbCommentAccount' => (boolean) $arr['staffprofile']['cbCommentAccount'],
        'cbStatusInProgress' => (boolean) $arr['staffprofile']['cbStatusInProgress'],
        'cbStatusRecommended' => (boolean) $arr['staffprofile']['cbStatusRecommended'],
        'cbStatusWithdrawn' => (boolean) $arr['staffprofile']['cbStatusWithdrawn'],
        'cbStatusApproved' => (boolean) $arr['staffprofile']['cbStatusApproved'],
        'cbStatusDenied' => (boolean) $arr['staffprofile']['cbStatusDenied'],
        'cbStatusPaid' => (boolean) $arr['staffprofile']['cbStatusPaid'],
        'filterRegions' => $arr['staffprofile']['filterRegions'],
        'filterFarmers' => $arr['staffprofile']['filterFarmers'],
        'filterAnalysts' => $arr['staffprofile']['filterAnalysts'],
        'filterCropYears' => $arr['staffprofile']['filterCropYears'],
        'filterSeasons' => $arr['staffprofile']['filterSeasons'],
        'filterLoanTypes' => $arr['staffprofile']['filterLoanTypes'],
        'filterDistributors' => $arr['staffprofile']['filterDistributors'],
        'filterAgencies' => $arr['staffprofile']['filterAgencies'],
        'filterAddendums' => (boolean) $arr['staffprofile']['filterAddendums'],
        'filterComments' => (boolean) $arr['staffprofile']['filterComments'],
        'filterBankruptcy' => (boolean) $arr['staffprofile']['filterBankruptcy'],
        'filterThirdParty' => (boolean) $arr['staffprofile']['filterThirdParty'],
        'filterAddedLand' => (boolean) $arr['staffprofile']['filterAddedLand'],
        'filterControlledDisbursements' => (boolean) $arr['staffprofile']['filterControlledDisbursements'],
        'filterAttachments' => (boolean) $arr['staffprofile']['filterAttachments'],
        'filterLimitClose' => (boolean) $arr['staffprofile']['filterLimitClose'],
        'filterLimitExceeded' => (boolean) $arr['staffprofile']['filterLimitExceeded'],
        'togAppDate' => $arr['staffprofile']['togAppDate'],
        'togCloseDate' => $arr['staffprofile']['togCloseDate'],
        'togCommitTotal' => $arr['staffprofile']['togCommitTotal'],
        'togCommitArm' => $arr['staffprofile']['togCommitArm'],
        'togCommitDist' => $arr['staffprofile']['togCommitDist'],
        'togCommitOther' => $arr['staffprofile']['togCommitOther'],
        'togFee' => $arr['staffprofile']['togFee'],
        'togRateArm' => $arr['staffprofile']['togRateArm'],
        'togRateDist' => $arr['staffprofile']['togRateDist'],
        'togRateOther' => $arr['staffprofile']['togRateOther'],
        'togAcresTotal' => $arr['staffprofile']['togAcresTotal'],
        'togAcresCorn' => $arr['staffprofile']['togAcresCorn'],
        'togAcresBeans' => $arr['staffprofile']['togAcresBeans'],
        'togAcresSorghum' => $arr['staffprofile']['togAcresSorghum'],
        'togAcresWheat' => $arr['staffprofile']['togAcresWheat'],
        'togAcresCotton' => $arr['staffprofile']['togAcresCotton'],
        'togAcresRice' => $arr['staffprofile']['togAcresRice'],
        'togAcresPeanuts' => $arr['staffprofile']['togAcresPeanuts'],
        'togAcresCane' => $arr['staffprofile']['togAcresCane'],
        'show_region' => (boolean) $arr['staffprofile']['show_region'],
        'show_season' => (boolean) $arr['staffprofile']['show_season'],
        'show_distributor' => (boolean) $arr['staffprofile']['show_agency'],
        'show_agency' => $arr['staffprofile']['homepage'],
        'show_close_date' => (boolean) $arr['staffprofile']['show_close_date'],
        'show_commit_total' => (boolean) $arr['staffprofile']['show_commit_total'],
        'show_commit_arm' => (boolean) $arr['staffprofile']['show_commit_arm'],
        'show_commit_distributor' => (boolean) $arr['staffprofile']['show_commit_distributor'],
        'show_commit_other' => (boolean) $arr['staffprofile']['show_commit_other'],
        'view_fee_percentage' => (boolean) $arr['staffprofile']['view_fee_percentage'],
        'view_fee_total' => (boolean) $arr['staffprofile']['view_fee_total'],
        'view_rate_arm' => (boolean) $arr['staffprofile']['view_rate_arm'],
        'view_rate_dist' => (boolean) $arr['staffprofile']['view_rate_dist'],
        'balance_due' => (boolean) $arr['staffprofile']['balance_due'],
        'view_acres_total' => (boolean) $arr['staffprofile']['view_acres_total'],
        'view_acres_corn' => (boolean) $arr['staffprofile']['view_acres_corn'],
        'view_acres_soybeans' => (boolean) $arr['staffprofile']['view_acres_soybeans'],
        'view_acres_sorghum' => (boolean) $arr['staffprofile']['view_acres_sorghum'],
        'view_acres_wheat' => (boolean) $arr['staffprofile']['view_acres_wheat'],
        'view_acres_cotton' => (boolean) $arr['staffprofile']['view_acres_cotton'],
        'view_acres_rice' => (boolean) $arr['staffprofile']['view_acres_rice'],
        'view_acres_peanuts' => (boolean) $arr['staffprofile']['view_acres_peanuts'],
        'view_acres_sugar_cane' => (boolean) $arr['staffprofile']['view_acres_sugar_cane']
      ];
    } else {
      return [
        'email' => $arr['email'],
        'username' => $arr['client']['farmer'],
        'phone' => $arr['client']['phone'],
        'loc_id' => $arr['client']['loc_id'],
        'loc_abr' => $arr['client']['location']['loc_abr'],
        'location' => $arr['client']['location']['location']
      ];
    } // end if


  }
}