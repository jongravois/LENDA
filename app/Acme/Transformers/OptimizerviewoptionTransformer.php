<?php namespace Acme\Transformers;

class OptimizerviewoptionTransformer extends Transformer
{

    public function transform($arr)
    {
        //return $arr;
        return [
            'id' => $arr['id'],
            'user_id' => $arr['user_id'],
            'optim_rent_per_acre_ARM' => (boolean)$arr['optim_rent_per_acre_ARM'],
            'optim_rent_per_acre_dist' => (boolean)$arr['optim_rent_per_acre_dist'],
            'optim_rent_per_acre_other' => (boolean)$arr['optim_rent_per_acre_other'],
            'optim_fsa_per_acre_other' => (boolean)$arr['optim_fsa_per_acre_other'],
            'optim_ins_share' => (boolean)$arr['optim_ins_share'],
            'optim_ins_price' => (boolean)$arr['optim_ins_price'],
            'optim_ins_level' => (boolean)$arr['optim_ins_level'],
            'optim_ins_guarantee' => (boolean)$arr['optim_ins_guarantee'],
            'optim_ins_premium' => (boolean)$arr['optim_ins_premium'],
            'optim_ins_value' => (boolean)$arr['optim_ins_value'],
            'optim_ins_type' => (boolean)$arr['optim_ins_type'],
            'optim_sco_max' => (boolean)$arr['optim_sco_max'],
            'optim_prod_yield' => (boolean)$arr['optim_prod_yield'],
            'optim_prod_share' => (boolean)$arr['optim_prod_share'],
            'optim_prod_price' => (boolean)$arr['optim_prod_price'],
            'optim_var_harvest' => (boolean)$arr['optim_var_harvest'],
            'optim_rebate' => (boolean)$arr['optim_rebate'],
            'optim_prod_rev' => (boolean)$arr['optim_prod_rev'],
            'optim_prod_rev_adj' => (boolean)$arr['optim_prod_rev_adj'],
            'optim_budget_ARM' => (boolean)$arr['optim_budget_ARM'],
            'optim_budget_dist' => (boolean)$arr['optim_budget_dist'],
            'optim_budget_other' => (boolean)$arr['optim_budget_other'],
            'optim_fee_ARM' => (boolean)$arr['optim_fee_ARM'],
            'optim_commit_ARM' => (boolean)$arr['optim_commit_ARM'],
            'optim_commit_dist' => (boolean)$arr['optim_commit_dist'],
            'optim_interest_ARM' => (boolean)$arr['optim_interest_ARM'],
            'optim_interest_dist' => (boolean)$arr['optim_interest_dist'],
            'optim_interest_other' => (boolean)$arr['optim_interest_other'],
            'optim_percent_disc_crop' => (boolean)$arr['optim_percent_disc_crop'],
            'optim_percent_disc_fsa' => (boolean)$arr['optim_percent_disc_fsa'],
            'optim_percent_disc_cropins' => (boolean)$arr['optim_percent_disc_cropins'],
            'optim_percent_disc_nonrp' => (boolean)$arr['optim_percent_disc_nonrp'],
            'optim_percent_disc_sco' => (boolean)$arr['optim_percent_disc_sco'],
            'optim_disc_crop' => (boolean)$arr['optim_disc_crop'],
            'optim_optim_disc_collateral' => (boolean)$arr['optim_optim_disc_collateral']
        ];
    }
} // end class