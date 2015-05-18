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
        'notifications' => $arr['notifications'],
        'viewoptions' => [
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
            'view_acres_sorghum' => (boolean) $arr['viewoptions']['view_acres_sorghum'],
            'view_acres_wheat' => (boolean) $arr['viewoptions']['view_acres_wheat'],
            'view_acres_cotton' => (boolean) $arr['viewoptions']['view_acres_cotton'],
            'view_acres_rice' => (boolean) $arr['viewoptions']['view_acres_rice'],
            'view_acres_peanuts' => (boolean) $arr['viewoptions']['view_acres_peanuts'],
            'view_acres_sugar_cane' => (boolean) $arr['viewoptions']['view_acres_sugar_cane'],
            'view_icon_addendum' => (boolean) $arr['viewoptions']['view_icon_addendum'],
            'view_icon_cross' => (boolean) $arr['viewoptions']['view_icon_cross'],
            'view_icon_bankruptcy' => (boolean) $arr['viewoptions']['view_icon_bankruptcy'],
            'view_icon_3pcredit' => (boolean) $arr['viewoptions']['view_icon_3pcredit'],
            'view_icon_addedland' => (boolean) $arr['viewoptions']['view_icon_addedland'],
            'view_icon_disbursement' => (boolean) $arr['viewoptions']['view_icon_disbursement'],
            'view_icon_attachments' => (boolean) $arr['viewoptions']['view_icon_attachments']
      ],
        'notificator' => [
            'count' => count($arr['notifications']),
            'pending_actions' => $pender,
            'management_required' => $manager,
            'review_reports' => $reporter
        ]
    ];

  }
}