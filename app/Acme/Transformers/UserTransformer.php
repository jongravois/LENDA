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
              if($notifs['status'] == 'pending') {
                  $pender++;
              }
          }
          if($notifs['notification_type'] == 'office'){
              if($notifs['status'] == 'pending') {
                  $manager++;
              }
          }
          if($notifs['notification_type'] == 'report'){
              if($notifs['status'] == 'pending') {
                  $reporter++;
              }
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
        'manager_id' => $arr['manager_id'],
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
            'count' => $pender + $manager + $reporter,
            'pending_actions' => $pender,
            'management_required' => $manager,
            'review_reports' => $reporter
        ],
        'rptfltr' => [
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
        'rptopts' => [
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
        'viewfltr' => [
            'vfRegions' => $arr['viewfilters']['vfRegions'],
            'vfFarmers' => $arr['viewfilters']['vfFarmers'],
            'vfAnalysts' => $arr['viewfilters']['vfAnalysts'],
            'vfCropYears' => $arr['viewfilters']['vfCropYears'],
            'vfSeasons' => $arr['viewfilters']['vfSeasons'],
            'vfLoanTypes' => $arr['viewfilters']['vfLoanTypes'],
            'vfDistributors' => $arr['viewfilters']['vfDistributors'],
            'vfAgencies' => $arr['viewfilters']['vfAgencies'],
            'vfAddendums' => (boolean) $arr['viewfilters']['vfAddendums'],
            'vfComments' => (boolean) $arr['viewfilters']['vfComments'],
            'vfBankruptcy' => (boolean) $arr['viewfilters']['vfBankruptcy'],
            'vfThirdParty' => (boolean) $arr['viewfilters']['vfThirdParty'],
            'vfAddedLand' => (boolean) $arr['viewfilters']['vfAddedLand'],
            'vfDisbursements' => (boolean) $arr['viewfilters']['vfDisbursements'],
            'vfAttachments' => (boolean) $arr['viewfilters']['vfAttachments'],
            'vfLimitClose' => (boolean) $arr['viewfilters']['vfLimitClose'],
            'vfLimitExceeded' => (boolean) $arr['viewfilters']['vfLimitExceeded'],
            'vfAppDate' => $arr['viewfilters']['vfAppDate'],
            'vfCloseDate' => $arr['viewfilters']['vfCloseDate'],
            'vfCommitTotal' => $arr['viewfilters']['vfCommitTotal'],
            'vfCommitArm' => $arr['viewfilters']['vfCommitArm'],
            'vfCommitDist' => $arr['viewfilters']['vfCommitDist'],
            'vfCommitOther' => $arr['viewfilters']['vfCommitOther'],
            'vfFee' => $arr['viewfilters']['vfFee'],
            'vfRateArm' => $arr['viewfilters']['viewfilters'],
            'vfRateDist' => $arr['viewfilters']['vfRateDist'],
            'vfRateOther' => $arr['viewfilters']['vfRateOther'],
            'vfAcresTotal' => $arr['viewfilters']['vfAcresTotal'],
            'vfAcresCorn' => $arr['viewfilters']['vfAcresCorn'],
            'vfAcresBeans' => $arr['viewfilters']['vfAcresBeans'],
            'vfAcresSorghum' => $arr['viewfilters']['vfAcresSorghum'],
            'vfAcresWheat' => $arr['viewfilters']['vfAcresWheat'],
            'vfAcresCotton' => $arr['viewfilters']['vfAcresCotton'],
            'vfAcresRice' => $arr['viewfilters']['vfAcresRice'],
            'vfAcresPeanuts' => $arr['viewfilters']['vfAcresPeanuts'],
            'vfAcresCane' => $arr['viewfilters']['vfAcresCane']
        ],
        'viewopts' => [
            'voDueDate' => (boolean) $arr['viewoptions']['voDueDate'],
            'voRegion' => (boolean) $arr['viewoptions']['voRegion'],
            'voSeason' => (boolean) $arr['viewoptions']['voSeason'],
            'voDistributor' => (boolean) $arr['viewoptions']['voDistributor'],
            'voAgency' => (boolean) $arr['viewoptions']['voAgency'],
            'voCloseDate' => (boolean) $arr['viewoptions']['voCloseDate'],
            'voCommitTotal' => (boolean) $arr['viewoptions']['voCommitTotal'],
            'voCommitArm' => (boolean) $arr['viewoptions']['voCommitArm'],
            'voCommitDistributor' => (boolean) $arr['viewoptions']['voCommitDistributor'],
            'voCommitOther' => (boolean) $arr['viewoptions']['voCommitOther'],
            'voFeePercentage' => (boolean) $arr['viewoptions']['voFeePercentage'],
            'voFeeTotal' => (boolean) $arr['viewoptions']['voFeeTotal'],
            'voRateArm' => (boolean) $arr['viewoptions']['voRateArm'],
            'voRateDist' => (boolean) $arr['viewoptions']['voRateDist'],
            'voBalanceDue' => (boolean) $arr['viewoptions']['voBalanceDue'],
            'voAcresTotal' => (boolean) $arr['viewoptions']['voAcresTotal'],
            'voAcresCorn' => (boolean) $arr['viewoptions']['voAcresCorn'],
            'voAcresSoybeans' => (boolean) $arr['viewoptions']['voAcresSoybeans'],
            'voAcresBeansFAC' => (boolean) $arr['viewoptions']['voAcresBeansFAC'],
            'voAcresSorghum' => (boolean) $arr['viewoptions']['voAcresSorghum'],
            'voAcresWheat' => (boolean) $arr['viewoptions']['voAcresWheat'],
            'voAcresCotton' => (boolean) $arr['viewoptions']['voAcresCotton'],
            'voAcresRice' => (boolean) $arr['viewoptions']['voAcresRice'],
            'voAcresPeanuts' => (boolean) $arr['viewoptions']['voAcresPeanuts'],
            'voAcresSugarcane' => (boolean) $arr['viewoptions']['voAcresSugarcane'],
            'voAcresOther' => (boolean) $arr['viewoptions']['voAcresOther'],
            'voIconAddendum' => (boolean) $arr['viewoptions']['voIconAddendum'],
            'voIconCross' => (boolean) $arr['viewoptions']['voIconCross'],
            'voIconBankruptcy' => (boolean) $arr['viewoptions']['voIconBankruptcy'],
            'voIcon3pcredit' => (boolean) $arr['viewoptions']['voIcon3pcredit'],
            'voIconAddedland' => (boolean) $arr['viewoptions']['voIconAddedland'],
            'voIconDisbursement' => (boolean) $arr['viewoptions']['voIconDisbursement'],
            'voIconAttachments' => (boolean) $arr['viewoptions']['voIconAttachments']
      ],
    ];

  }
}