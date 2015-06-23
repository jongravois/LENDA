<?php namespace Acme\Transformers;

class OptimizerviewoptionTransformer extends Transformer
{

    public function transform($arr)
    {
        //return $arr;
        return [
            'id' => $arr['id'],
            'user_id' => $arr['user_id'],
            'rent_per_acre_ARM' => (boolean)$arr['rent_per_acre_ARM'],
            'rent_per_acre_dist' => (boolean)$arr['rent_per_acre_dist'],
            'rent_per_acre_other' => (boolean)$arr['rent_per_acre_other'],
            'fsa_per_acre_other' => (boolean)$arr['fsa_per_acre_other'],
            'ins_share' => (boolean)$arr['ins_share'],
            'ins_price' => (boolean)$arr['ins_price'],
            'ins_level' => (boolean)$arr['ins_level'],
            'ins_guarantee' => (boolean)$arr['ins_guarantee'],
            'ins_premium' => (boolean)$arr['ins_premium'],
            'ins_value' => (boolean)$arr['ins_value'],
            'ins_type' => (boolean)$arr['ins_type'],
            'sco_max' => (boolean)$arr['sco_max'],
            'prod_yield' => (boolean)$arr['prod_yield'],
            'prod_share' => (boolean)$arr['prod_share'],
            'prod_price' => (boolean)$arr['prod_price'],
            'var_harvest' => (boolean)$arr['var_harvest'],
            'rebate' => (boolean)$arr['rebate'],
            'prod_rev' => (boolean)$arr['prod_rev'],
            'prod_rev_adj' => (boolean)$arr['prod_rev_adj'],
            'budget_ARM' => (boolean)$arr['budget_ARM'],
            'budget_dist' => (boolean)$arr['budget_dist'],
            'budget_other' => (boolean)$arr['budget_other'],
            'fee_ARM' => (boolean)$arr['fee_ARM'],
            'commit_ARM' => (boolean)$arr['commit_ARM'],
            'commit_dist' => (boolean)$arr['commit_dist'],
            'interest_ARM' => (boolean)$arr['interest_ARM'],
            'interest_dist' => (boolean)$arr['interest_dist'],
            'interest_other' => (boolean)$arr['interest_other'],
            'percent_disc_crop' => (boolean)$arr['percent_disc_crop'],
            'percent_disc_fsa' => (boolean)$arr['percent_disc_fsa'],
            'percent_disc_cropins' => (boolean)$arr['percent_disc_cropins'],
            'percent_disc_nonrp' => (boolean)$arr['percent_disc_nonrp'],
            'percent_disc_sco' => (boolean)$arr['percent_disc_sco'],
            'disc_crop' => (boolean)$arr['disc_crop'],
            'disc_collateral' => (boolean)$arr['disc_collateral']
        ];
    }
} // end class