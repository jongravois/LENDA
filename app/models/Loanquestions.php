<?php

class LoanQuestions extends \Eloquent {
	protected $table = 'loanquestions';
	protected $fillable = ['loan_id', 'amount_requested', 'plant_own', 'plant_own_details', 'harvest_own', 'harvest_own_details', 'equip_obligations',  'equip_obligations_details',  'other_cash', 'other_cash_details', 'fsa_good', 'fsa_good_details', 'fci_good', 'fci_good_details', 'premiums_past', 'premiums_details', 'legal_defendant', 'defendant_details', 'judgements', 'judgement_details', 'bankruptcy', 'bankruptcy_details', 'bankruptcy_order', 'liens', 'liens_details', 'fsa_direct_pay', 'fsa_direct_pay_details', 'future_liabilities', 'credit_3p_available', 'credit_3p_details', 'income_percent', 'distributor', 'pesticide_number', 'pest_num_expiration', 'affiliated_entities', 'farm_supplier_creditors'];
}