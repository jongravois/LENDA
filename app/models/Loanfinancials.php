<?php

class Loanfinancials extends \Eloquent {

	protected $fillable = ['loan_id', 'guaranty', 'prod', 'adj_prod', 'disc_prod', 'disc_adj_prod', 'ins_disc_prod', 'disc_ins', 'commit_arm', 'commit_dist', 'commit_other', 'commit_total', 'fee_processing', 'proc_fee', 'proc_fee_arm_only', 'fee_processing_onTotal', 'fee_service', 'srvc_fee', 'srvc_fee_arm_only', 'fee_service_onTotal', 'toal_fee_percent', 'fee_total', 'total_fsa_payment', 'total_claims', 'principal_arm', 'principal_dist', 'principal_other', 'principal', 'int_percent_arm', 'int_arm', 'int_percent_dist', 'int_dist', 'int_percent_other', 'int_other', 'interest', 'total_revenue', 'arm_and_dist', 'collateral', 'total_balance', 'remaining_balance', 'balance_paid',  'cash_flow', 'risk', 'risk_adj', 'max_loan', 'max_rate', 'fsa_assignment_percent'];

	/* RELATIONSHIPS */
	public function loan()
	{
		return $this->belongsTo('Loan', 'loan_id');
	}
    /* RELATIONSHIPS */


}