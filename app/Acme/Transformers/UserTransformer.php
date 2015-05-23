<?php namespace Acme\Transformers;


class UserTransformer extends Transformer
{

  public function transform($arr)
  {
    //return $arr;
      $pender = 0;
      $manager = 0;
      $reporter = 0;

      foreach($arr['notifications'] as $notifs){
          if($notifs['notification_type'] == 'vote'){
              $pender++;
          }
          if($notifs['notification_type'] == 'office'){
              $manager++;
          }
          if($notifs['notification_type'] == 'report'){
              $reporter++;
          }
      }

    return [
        'id' => $arr['id'],
        'email' => $arr['email'],
        'username' => $arr['username'],
        'nick' => $arr['nick'],
        'phone' => $arr['phone'],
        'region_id' => $arr['region_id'],
        'region' => $arr['region']['region'],
        'loc_id' => $arr['loc_id'],
        'loc_abr' => $arr['location']['loc_abr'],
        'location' => $arr['location']['location'],
        'manager_id' => (integer) $arr['manager_id'],
        'manager' => $arr['manager']['username'],
        'manager_email' => $arr['manager']['email'],
        'comms' => $arr['comms'],
        'closer_id' => $arr['closer_id'],
        'closer' => $arr['closer']['username'],
        'closer_email' => $arr['closer']['email'],
        'is_admin' => (boolean) $arr['is_admin'],
        'is_approver' => (boolean) $arr['is_approver'],
        'is_manager' => (boolean) $arr['is_manager'],
        'role_id' => $arr['role_id'],
        'role' => $arr['role']['role'],
        'role_abr' => $arr['role']['abr'],
        'homepage' => $arr['profile']['homepage'],
        'commentopts' => [
            'cbCommentLenda' => (boolean) $arr['profile']['cbCommentLenda'],
            'cbCommentCommittee' => (boolean) $arr['profile']['cbCommentCommittee'],
            'cbCommentAnalyst' => (boolean) $arr['profile']['cbCommentAnalyst'],
            'cbCommentAccount' => (boolean) $arr['profile']['cbCommentAccount'],
            'cbStatusInProgress' => (boolean) $arr['profile']['cbStatusInProgress'],
            'cbStatusRecommended' => (boolean) $arr['profile']['cbStatusRecommended'],
            'cbStatusWithdrawn' => (boolean) $arr['profile']['cbStatusWithdrawn'],
            'cbStatusApproved' => (boolean) $arr['profile']['cbStatusApproved'],
            'cbStatusDenied' => (boolean) $arr['profile']['cbStatusDenied'],
            'cbStatusPaid' => (boolean) $arr['profile']['cbStatusPaid']
        ],
        'notifications' => $arr['notifications'],
        'notificator' => [
            'count' => count($arr['notifications']),
            'pending_actions' => $pender,
            'management_required' => $manager,
            'review_reports' => $reporter
        ],
        'reportfilters' => [
            'report_region' => (boolean) $arr['reportoptions']['report_region'],
            'report_season' => (boolean) $arr['reportoptions']['report_season'],
            'report_distributor' => (boolean) $arr['reportoptions']['report_distributor'],
            'report_agency' => (boolean) $arr['reportoptions']['report_agency'],
            'report_close_date' => (boolean) $arr['reportoptions']['report_close_date'],
            'report_commit_total' => (boolean) $arr['reportoptions']['report_commit_total'],
            'report_commit_arm' => (boolean) $arr['reportoptions']['report_commit_arm'],
            'report_commit_distributor' => (boolean) $arr['reportoptions']['report_commit_distributor'],
            'report_commit_other' => (boolean) $arr['reportoptions']['report_commit_other'],
            'report_fee_percentage' => (boolean) $arr['reportoptions']['report_fee_percentage'],
            'report_fee_total' => (boolean) $arr['reportoptions']['report_fee_total'],
            'report_rate_arm' => (boolean) $arr['reportoptions']['report_rate_arm'],
            'report_rate_dist' => (boolean) $arr['reportoptions']['report_rate_dist'],
            'report_balance_due' => (boolean) $arr['reportoptions']['report_balance_due'],
            'report_acres_total' => (boolean) $arr['reportoptions']['report_acres_total'],
            'report_acres_corn' => (boolean) $arr['reportoptions']['report_acres_corn'],
            'report_acres_soybeans' => (boolean) $arr['reportoptions']['report_acres_soybeans'],
            'report_acres_sorghum' => (boolean) $arr['reportoptions']['report_acres_sorghum'],
            'report_acres_wheat' => (boolean) $arr['reportoptions']['report_acres_wheat'],
            'report_acres_cotton' => (boolean) $arr['reportoptions']['report_acres_cotton'],
            'report_acres_rice' => (boolean) $arr['reportoptions']['report_acres_rice'],
            'report_acres_peanuts' => (boolean) $arr['reportoptions']['report_acres_peanuts'],
            'report_acres_sugar_cane' => (boolean) $arr['reportoptions']['report_acres_sugar_cane'],
            'report_icon_addendum' => (boolean) $arr['reportoptions']['report_icon_addendum'],
            'report_icon_cross' => (boolean) $arr['reportoptions']['report_icon_cross'],
            'report_icon_bankruptcy' => (boolean) $arr['reportoptions']['report_icon_bankruptcy'],
            'report_icon_3pcredit' => (boolean) $arr['reportoptions']['report_icon_3pcredit'],
            'report_icon_addedland' => (boolean) $arr['reportoptions']['report_icon_addedland'],
            'report_icon_disbursement' => (boolean) $arr['reportoptions']['report_icon_disbursement'],
            'report_icon_attachments' => (boolean) $arr['reportoptions']['report_icon_attachments']
        ],
        'reportopts' => [
            'report_region' => (boolean) $arr['reportoptions']['report_region'],
            'report_season' => (boolean) $arr['reportoptions']['report_season'],
            'report_distributor' => (boolean) $arr['reportoptions']['report_distributor'],
            'report_agency' => (boolean) $arr['reportoptions']['report_agency'],
            'report_close_date' => (boolean) $arr['reportoptions']['report_close_date'],
            'report_commit_total' => (boolean) $arr['reportoptions']['report_commit_total'],
            'report_commit_arm' => (boolean) $arr['reportoptions']['report_commit_arm'],
            'report_commit_distributor' => (boolean) $arr['reportoptions']['report_commit_distributor'],
            'report_commit_other' => (boolean) $arr['reportoptions']['report_commit_other'],
            'report_fee_percentage' => (boolean) $arr['reportoptions']['report_fee_percentage'],
            'report_fee_total' => (boolean) $arr['reportoptions']['report_fee_total'],
            'report_rate_arm' => (boolean) $arr['reportoptions']['report_rate_arm'],
            'report_rate_dist' => (boolean) $arr['reportoptions']['report_rate_dist'],
            'report_balance_due' => (boolean) $arr['reportoptions']['report_balance_due'],
            'report_acres_total' => (boolean) $arr['reportoptions']['report_acres_total'],
            'report_acres_corn' => (boolean) $arr['reportoptions']['report_acres_corn'],
            'report_acres_soybeans' => (boolean) $arr['reportoptions']['report_acres_soybeans'],
            'report_acres_sorghum' => (boolean) $arr['reportoptions']['report_acres_sorghum'],
            'report_acres_wheat' => (boolean) $arr['reportoptions']['report_acres_wheat'],
            'report_acres_cotton' => (boolean) $arr['reportoptions']['report_acres_cotton'],
            'report_acres_rice' => (boolean) $arr['reportoptions']['report_acres_rice'],
            'report_acres_peanuts' => (boolean) $arr['reportoptions']['report_acres_peanuts'],
            'report_acres_sugar_cane' => (boolean) $arr['reportoptions']['report_acres_sugar_cane'],
            'report_icon_addendum' => (boolean) $arr['reportoptions']['report_icon_addendum'],
            'report_icon_cross' => (boolean) $arr['reportoptions']['report_icon_cross'],
            'report_icon_bankruptcy' => (boolean) $arr['reportoptions']['report_icon_bankruptcy'],
            'report_icon_3pcredit' => (boolean) $arr['reportoptions']['report_icon_3pcredit'],
            'report_icon_addedland' => (boolean) $arr['reportoptions']['report_icon_addedland'],
            'report_icon_disbursement' => (boolean) $arr['reportoptions']['report_icon_disbursement'],
            'report_icon_attachments' => (boolean) $arr['reportoptions']['report_icon_attachments']
        ],
        'viewfilters' => [
            'filterRegions' => $arr['viewfilters']['filterRegions'],
            'filterFarmers' => $arr['viewfilters']['filterFarmers'],
            'filterAnalysts' => $arr['viewfilters']['filterAnalysts'],
            'filterCropYears' => $arr['viewfilters']['filterCropYears'],
            'filterSeasons' => $arr['viewfilters']['filterSeasons'],
            'filterLoanTypes' => $arr['viewfilters']['filterLoanTypes'],
            'filterDistributors' => $arr['viewfilters']['filterDistributors'],
            'filterAgencies' => $arr['viewfilters']['filterAgencies'],
            'filterAddendums' => (boolean) $arr['viewfilters']['filterAddendums'],
            'filterComments' => (boolean) $arr['viewfilters']['filterComments'],
            'filterBankruptcy' => (boolean) $arr['viewfilters']['filterBankruptcy'],
            'filterThirdParty' => (boolean) $arr['viewfilters']['filterThirdParty'],
            'filterAddedLand' => (boolean) $arr['viewfilters']['filterAddedLand'],
            'filterControlledDisbursements' => (boolean) $arr['viewfilters']['filterControlledDisbursements'],
            'filterAttachments' => (boolean) $arr['viewfilters']['filterAttachments'],
            'filterLimitClose' => (boolean) $arr['viewfilters']['filterLimitClose'],
            'filterLimitExceeded' => (boolean) $arr['viewfilters']['filterLimitExceeded'],
            'togAppDate' => $arr['viewfilters']['togAppDate'],
            'togCloseDate' => $arr['viewfilters']['togCloseDate'],
            'togCommitTotal' => $arr['viewfilters']['togCommitTotal'],
            'togCommitArm' => $arr['viewfilters']['togCommitArm'],
            'togCommitDist' => $arr['viewfilters']['togCommitDist'],
            'togCommitOther' => $arr['viewfilters']['togCommitOther'],
            'togFee' => $arr['viewfilters']['togFee'],
            'togRateArm' => $arr['viewfilters']['togRateArm'],
            'togRateDist' => $arr['viewfilters']['togRateDist'],
            'togRateOther' => $arr['viewfilters']['togRateOther'],
            'togAcresTotal' => $arr['viewfilters']['togAcresTotal'],
            'togAcresCorn' => $arr['viewfilters']['togAcresCorn'],
            'togAcresBeans' => $arr['viewfilters']['togAcresBeans'],
            'togAcresSorghum' => $arr['viewfilters']['togAcresSorghum'],
            'togAcresWheat' => $arr['viewfilters']['togAcresWheat'],
            'togAcresCotton' => $arr['viewfilters']['togAcresCotton'],
            'togAcresRice' => $arr['viewfilters']['togAcresRice'],
            'togAcresPeanuts' => $arr['viewfilters']['togAcresPeanuts'],
            'togAcresCane' => $arr['viewfilters']['togAcresCane']
        ],
        'viewopts' => [
            'view_region' => (boolean) $arr['viewoptions']['view_region'],
            'view_season' => (boolean) $arr['viewoptions']['view_season'],
            'view_distributor' => (boolean) $arr['viewoptions']['view_distributor'],
            'view_agency' => (boolean) $arr['viewoptions']['view_agency'],
            'view_close_date' => (boolean) $arr['viewoptions']['view_close_date'],
            'view_commit_total' => (boolean) $arr['viewoptions']['view_commit_total'],
            'view_commit_arm' => (boolean) $arr['viewoptions']['view_commit_arm'],
            'view_commit_distributor' => (boolean) $arr['viewoptions']['view_commit_distributor'],
            'view_commit_other' => (boolean) $arr['viewoptions']['view_commit_other'],
            'view_fee_percentage' => (boolean) $arr['viewoptions']['view_fee_percentage'],
            'view_fee_total' => (boolean) $arr['viewoptions']['view_fee_total'],
            'view_rate_arm' => (boolean) $arr['viewoptions']['view_rate_arm'],
            'view_rate_dist' => (boolean) $arr['viewoptions']['view_rate_dist'],
            'view_balance_due' => (boolean) $arr['viewoptions']['view_balance_due'],
            'view_acres_total' => (boolean) $arr['viewoptions']['view_acres_total'],
            'view_acres_corn' => (boolean) $arr['viewoptions']['view_acres_corn'],
            'view_acres_soybeans' => (boolean) $arr['viewoptions']['view_acres_soybeans'],
            'view_acres_beansFAC' => (boolean) $arr['viewoptions']['view_acres_beansFAC'],
            'view_acres_sorghum' => (boolean) $arr['viewoptions']['view_acres_sorghum'],
            'view_acres_wheat' => (boolean) $arr['viewoptions']['view_acres_wheat'],
            'view_acres_cotton' => (boolean) $arr['viewoptions']['view_acres_cotton'],
            'view_acres_rice' => (boolean) $arr['viewoptions']['view_acres_rice'],
            'view_acres_peanuts' => (boolean) $arr['viewoptions']['view_acres_peanuts'],
            'view_acres_sugar_cane' => (boolean) $arr['viewoptions']['view_acres_sugar_cane'],
            'view_acres_other' => (boolean) $arr['viewoptions']['view_acres_other'],
            'view_icon_addendum' => (boolean) $arr['viewoptions']['view_icon_addendum'],
            'view_icon_cross' => (boolean) $arr['viewoptions']['view_icon_cross'],
            'view_icon_bankruptcy' => (boolean) $arr['viewoptions']['view_icon_bankruptcy'],
            'view_icon_3pcredit' => (boolean) $arr['viewoptions']['view_icon_3pcredit'],
            'view_icon_addedland' => (boolean) $arr['viewoptions']['view_icon_addedland'],
            'view_icon_disbursement' => (boolean) $arr['viewoptions']['view_icon_disbursement'],
            'view_icon_attachments' => (boolean) $arr['viewoptions']['view_icon_attachments']
      ],
    ];

  }
}