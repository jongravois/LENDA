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
        'homepage' => $arr['profile']['homepage'],
        'cbCommentLenda' => (boolean) $arr['profile']['cbCommentLenda'],
        'cbCommentCommittee' => (boolean) $arr['profile']['cbCommentCommittee'],
        'cbCommentAnalyst' => (boolean) $arr['profile']['cbCommentAnalyst'],
        'cbCommentAccount' => (boolean) $arr['profile']['cbCommentAccount'],
        'cbStatusInProgress' => (boolean) $arr['profile']['cbStatusInProgress'],
        'cbStatusRecommended' => (boolean) $arr['profile']['cbStatusRecommended'],
        'cbStatusWithdrawn' => (boolean) $arr['profile']['cbStatusWithdrawn'],
        'cbStatusApproved' => (boolean) $arr['profile']['cbStatusApproved'],
        'cbStatusDenied' => (boolean) $arr['profile']['cbStatusDenied'],
        'cbStatusPaid' => (boolean) $arr['profile']['cbStatusPaid'],
        'filterRegions' => $arr['profile']['filterRegions'],
        'filterFarmers' => $arr['profile']['filterFarmers'],
        'filterAnalysts' => $arr['profile']['filterAnalysts'],
        'filterCropYears' => $arr['profile']['filterCropYears'],
        'filterSeasons' => $arr['profile']['filterSeasons'],
        'filterLoanTypes' => $arr['profile']['filterLoanTypes'],
        'filterDistributors' => $arr['profile']['filterDistributors'],
        'filterAgencies' => $arr['profile']['filterAgencies'],
        'filterAddendums' => (boolean) $arr['profile']['filterAddendums'],
        'filterComments' => (boolean) $arr['profile']['filterComments'],
        'filterBankruptcy' => (boolean) $arr['profile']['filterBankruptcy'],
        'filterThirdParty' => (boolean) $arr['profile']['filterThirdParty'],
        'filterAddedLand' => (boolean) $arr['profile']['filterAddedLand'],
        'filterControlledDisbursements' => (boolean) $arr['profile']['filterControlledDisbursements'],
        'filterAttachments' => (boolean) $arr['profile']['filterAttachments'],
        'filterLimitClose' => (boolean) $arr['profile']['filterLimitClose'],
        'filterLimitExceeded' => (boolean) $arr['profile']['filterLimitExceeded'],
        'togAppDate' => $arr['profile']['togAppDate'],
        'togCloseDate' => $arr['profile']['togCloseDate'],
        'togCommitTotal' => $arr['profile']['togCommitTotal'],
        'togCommitArm' => $arr['profile']['togCommitArm'],
        'togCommitDist' => $arr['profile']['togCommitDist'],
        'togCommitOther' => $arr['profile']['togCommitOther'],
        'togFee' => $arr['profile']['togFee'],
        'togRateArm' => $arr['profile']['togRateArm'],
        'togRateDist' => $arr['profile']['togRateDist'],
        'togRateOther' => $arr['profile']['togRateOther'],
        'togAcresTotal' => $arr['profile']['togAcresTotal'],
        'togAcresCorn' => $arr['profile']['togAcresCorn'],
        'togAcresBeans' => $arr['profile']['togAcresBeans'],
        'togAcresSorghum' => $arr['profile']['togAcresSorghum'],
        'togAcresWheat' => $arr['profile']['togAcresWheat'],
        'togAcresCotton' => $arr['profile']['togAcresCotton'],
        'togAcresRice' => $arr['profile']['togAcresRice'],
        'togAcresPeanuts' => $arr['profile']['togAcresPeanuts'],
        'togAcresCane' => $arr['profile']['togAcresCane'],
        'show_region' => (boolean) $arr['profile']['show_region'],
        'show_season' => (boolean) $arr['profile']['show_season'],
        'show_distributor' => (boolean) $arr['profile']['show_agency'],
        'show_agency' => $arr['profile']['homepage'],
        'show_close_date' => (boolean) $arr['profile']['show_close_date'],
        'show_commit_total' => (boolean) $arr['profile']['show_commit_total'],
        'show_commit_arm' => (boolean) $arr['profile']['show_commit_arm'],
        'show_commit_distributor' => (boolean) $arr['profile']['show_commit_distributor'],
        'show_commit_other' => (boolean) $arr['profile']['show_commit_other'],
        'view_fee_percentage' => (boolean) $arr['profile']['view_fee_percentage'],
        'view_fee_total' => (boolean) $arr['profile']['view_fee_total'],
        'view_rate_arm' => (boolean) $arr['profile']['view_rate_arm'],
        'view_rate_dist' => (boolean) $arr['profile']['view_rate_dist'],
        'balance_due' => (boolean) $arr['profile']['balance_due'],
        'view_acres_total' => (boolean) $arr['profile']['view_acres_total'],
        'view_acres_corn' => (boolean) $arr['profile']['view_acres_corn'],
        'view_acres_soybeans' => (boolean) $arr['profile']['view_acres_soybeans'],
        'view_acres_sorghum' => (boolean) $arr['profile']['view_acres_sorghum'],
        'view_acres_wheat' => (boolean) $arr['profile']['view_acres_wheat'],
        'view_acres_cotton' => (boolean) $arr['profile']['view_acres_cotton'],
        'view_acres_rice' => (boolean) $arr['profile']['view_acres_rice'],
        'view_acres_peanuts' => (boolean) $arr['profile']['view_acres_peanuts'],
        'view_acres_sugar_cane' => (boolean) $arr['profile']['view_acres_sugar_cane']
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