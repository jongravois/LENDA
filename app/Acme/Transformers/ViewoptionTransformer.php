<?php namespace Acme\Transformers;

class ViewoptionTransformer extends Transformer{

  public function transform($arr)
  {
      //added indicator icons
    //return $arr;
    return [
      'id' => $arr['id'],
      'user_id' => $arr['user_id'],
      'view_region' => (boolean) $arr['view_region'],
      'view_season' => (boolean) $arr['view_season'],
      'view_distributor' => (boolean) $arr['view_distributor'],
      'view_agency' => (boolean) $arr['view_agency'],
      'view_close_date' => (boolean) $arr['view_close_date'],
      'view_commit_total' => (boolean) $arr['view_commit_total'],
      'view_commit_arm' => (boolean) $arr['view_commit_arm'],
      'view_commit_distributor' => (boolean) $arr['view_commit_distributor'],
      'view_commit_other' => (boolean) $arr['view_commit_other'],
      'view_fee_percentage' => (boolean) $arr['view_fee_percentage'],
      'view_fee_total' => (boolean) $arr['view_fee_total'],
      'view_rate_arm' => (boolean) $arr['view_rate_arm'],
      'view_rate_dist' => (boolean) $arr['view_rate_dist'],
      'view_balance_due' => (boolean) $arr['view_balance_due'],
      'view_acres_total' => (boolean) $arr['view_acres_total'],
      'view_acres_corn' => (boolean) $arr['view_acres_corn'],
      'view_acres_soybeans' => (boolean) $arr['view_acres_soybeans'],
      'view_acres_sorghum' => (boolean) $arr['view_acres_sorghum'],
      'view_acres_wheat' => (boolean) $arr['view_acres_wheat'],
      'view_acres_cotton' => (boolean) $arr['view_acres_cotton'],
      'view_acres_rice' => (boolean) $arr['view_acres_rice'],
      'view_acres_peanuts' => (boolean) $arr['view_acres_peanuts'],
      'view_acres_sugar_cane' => (boolean) $arr['view_acres_sugar_cane'],
      'view_icon_addendum' => (boolean) $arr['view_icon_addendum'],
      'view_icon_cross' => (boolean) $arr['view_icon_cross'],
      'view_icon_bankruptcy' => (boolean) $arr['view_icon_bankruptcy'],
      'view_icon_3pcredit' => (boolean) $arr['view_icon_3pcredit'],
      'view_icon_addedland' => (boolean) $arr['view_icon_addedland'],
      'view_icon_disbursement' => (boolean) $arr['view_icon_disbursement'],
      'view_icon_attachments' => (boolean) $arr['view_icon_attachments']
    ];
  }
}