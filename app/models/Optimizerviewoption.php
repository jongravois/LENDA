<?php

class Optimizerviewoption extends \Eloquent {
	protected $fillable = ['user_id', 'optim_rent_per_acre_ARM', 'optim_rent_per_acre_dist', 'optim_rent_per_acre_other', 'optim_fsa_per_acre_other', 'optim_ins_share', 'optim_ins_price', 'optim_ins_level', 'optim_ins_guarantee', 'optim_ins_premium', 'optim_ins_value', 'optim_ins_type', 'optim_sco_max', 'optim_prod_yield', 'optim_prod_share', 'optim_prod_price', 'optim_var_harvest', 'optim_rebate', 'optim_prod_rev', 'optim_prod_rev_adj', 'optim_budget_ARM', 'optim_budget_dist', 'optim_budget_other', 'optim_fee_ARM', 'optim_commit_ARM', 'optim_commit_dist', 'optim_interest_ARM', 'optim_interest_dist', 'optim_interest_other', 'optim_percent_disc_crop', 'optim_percent_disc_fsa', 'optim_percent_disc_cropins', 'optim_percent_disc_nonrp', 'optim_percent_disc_sco', 'optim_disc_crop', 'optim_optim_disc_collateral'];

	///// RELATIONSHIPS /////
    public function user()
    {
        return $this->belongsTo('User', 'user_id');
    }
}