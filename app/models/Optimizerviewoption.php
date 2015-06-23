<?php

class Optimizerviewoption extends \Eloquent {
	protected $fillable = ['user_id', 'rent_per_acre_ARM', 'rent_per_acre_dist', 'rent_per_acre_other', 'fsa_per_acre_other', 'ins_share', 'ins_price', 'ins_level', 'ins_guarantee', 'ins_premium', 'ins_value', 'ins_type', 'sco_max', 'prod_yield', 'prod_share', 'prod_price', 'var_harvest', 'rebate', 'prod_rev', 'prod_rev_adj', 'budget_ARM', 'budget_dist', 'budget_other', 'fee_ARM', 'commit_ARM', 'commit_dist', 'interest_ARM', 'interest_dist', 'interest_other', 'percent_disc_crop', 'percent_disc_fsa', 'percent_disc_cropins', 'percent_disc_nonrp', 'percent_disc_sco', 'disc_crop', 'disc_fsa', 'disc_insovercrop', 'disc_ins', 'disc_sco', 'disc_collateral'];

	///// RELATIONSHIPS /////
    public function user()
    {
        return $this->belongsTo('User', 'user_id');
    }
}