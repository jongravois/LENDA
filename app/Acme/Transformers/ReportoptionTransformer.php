<?php namespace Acme\Transformers;

class ReportoptionTransformer extends Transformer{

    public function transform($arr)
    {
        //added indicator icons
        //return $arr;
        return [
            'id' => $arr['id'],
            'user_id' => $arr['user_id'],
            'report_region' => (boolean) $arr['report_region'],
            'report_season' => (boolean) $arr['report_season'],
            'report_distributor' => (boolean) $arr['report_distributor'],
            'report_agency' => (boolean) $arr['report_agency'],
            'report_close_date' => (boolean) $arr['report_close_date'],
            'report_commit_total' => (boolean) $arr['report_commit_total'],
            'report_commit_arm' => (boolean) $arr['report_commit_arm'],
            'report_commit_distributor' => (boolean) $arr['report_commit_distributor'],
            'report_commit_other' => (boolean) $arr['report_commit_other'],
            'report_fee_percentage' => (boolean) $arr['report_fee_percentage'],
            'report_fee_total' => (boolean) $arr['report_fee_total'],
            'report_rate_arm' => (boolean) $arr['report_rate_arm'],
            'report_rate_dist' => (boolean) $arr['report_rate_dist'],
            'report_balance_due' => (boolean) $arr['report_balance_due'],
            'report_acres_total' => (boolean) $arr['report_acres_total'],
            'report_acres_corn' => (boolean) $arr['report_acres_corn'],
            'report_acres_soybeans' => (boolean) $arr['report_acres_soybeans'],
            'report_acres_sorghum' => (boolean) $arr['report_acres_sorghum'],
            'report_acres_wheat' => (boolean) $arr['report_acres_wheat'],
            'report_acres_cotton' => (boolean) $arr['report_acres_cotton'],
            'report_acres_rice' => (boolean) $arr['report_acres_rice'],
            'report_acres_peanuts' => (boolean) $arr['report_acres_peanuts'],
            'report_acres_sugar_cane' => (boolean) $arr['report_acres_sugar_cane'],
            'report_acres_other' => (boolean) $arr['report_acres_other'],
            'report_icon_addendum' => (boolean) $arr['report_icon_addendum'],
            'report_icon_cross' => (boolean) $arr['report_icon_cross'],
            'report_icon_bankruptcy' => (boolean) $arr['report_icon_bankruptcy'],
            'report_icon_3pcredit' => (boolean) $arr['report_icon_3pcredit'],
            'report_icon_addedland' => (boolean) $arr['report_icon_addedland'],
            'report_icon_disbursement' => (boolean) $arr['report_icon_disbursement'],
            'report_icon_attachments' => (boolean) $arr['report_icon_attachments']
        ];
    }
}