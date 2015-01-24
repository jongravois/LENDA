<?php

use Eloquent;

class Admingrader extends Eloquent {
	protected $table = 'admingrader';
	public $timestamps = false;
	protected $fillable = ['grade', 'debt2asset', 'current_ratio', 'working_capital', 'borrowing_capacity', 'years_farming', 'credit_score', 'cpa_financials', 'bankruptcy', 'judgement', 'all_max_loan', 'ag_pro_max_loan', 'capital_bridge_max_loan', 'ag_vest_max_loan', 'ag_pro_max_rate', 'capital_bridge_max_rate', 'ag_vest_max_rate'];
}