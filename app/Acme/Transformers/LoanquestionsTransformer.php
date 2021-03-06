<?php namespace Acme\Transformers;

class LoanquestionsTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return array(
			'id'		=>	$arr['id'],
			'loan_id'	=> 	(integer) $arr['loan_id'],
			'amount_requested' => (double) $arr['amount_requested'],
			'plant_own'	=>	(boolean) $arr['plant_own'],
			'plant_own_details'	=>	$arr['plant_own_details'],
			'harvest_own'	=>	(boolean) $arr['harvest_own'],
			'harvest_own_details'	=>	$arr['harvest_own_details'],
			'equip_obligations'	=>	(boolean) $arr['equip_obligations'],
			'equip_obligations_details'	=>	$arr['equip_obligations_details'],
			'other_cash'	=>	(boolean) $arr['other_cash'],
			'other_cash_details'	=>	$arr['other_cash_details'],
			'fsa_good'	=>	(boolean) $arr['fsa_good'],
			'fsa_good_details'	=>	$arr['fsa_good_details'],
			'insInPlace'	=>	(boolean) $arr['insInPlace'],
			'insInPlace_details'	=>	$arr['insInPlace_details'],
			'fci_good'	=>	(boolean) $arr['fci_good'],
			'fci_good_details'	=>	$arr['fci_good_details'],
			'premiums_past'	=>	(boolean) $arr['premiums_past'],
			'premiums_details'	=>	$arr['premiums_details'],
			'legal_defendant'	=>	(boolean) $arr['legal_defendant'],
			'defendant_details'	=>	$arr['defendant_details'],
			'judgements'	=>	(boolean) $arr['judgements'],
			'judgement_details'	=>	$arr['judgement_details'],
			'bankruptcy'	=>	(boolean) $arr['bankruptcy'],
			'bankruptcy_details' =>	$arr['bankruptcy_details'],
			'bankruptcy_order' => (boolean) $arr['bankruptch_order'],
			'liens'	=>	(boolean) $arr['liens'],
			'liens_details'	=>	$arr['liens_details'],
			'fsa_direct_pay'	=>	(boolean) $arr['fsa_direct_pay'],
			'fsa_direct_pay_details'	=>	$arr['fsa_direct_pay_details'],
			'future_liabilities'	=>	(boolean) $arr['future_liabilities'],
			'credit_3p_available'	=>	(boolean) $arr['credit_3p_available'],
			'credit_3p_details'	=>	$arr['credit_3p_details'],
			'income_percent'	=>	(double) $arr['income_percent'],
			'income_distribution_details' =>	$arr['income_distribution_details'],
			'distributor'	=>	$arr['distributor'],
			'pesticide_number'	=>	$arr['pesticide_number'],
			'pest_num_expiration'	=>	$arr['pest_num_expiration'],
			'credit_score'	=>	$arr['credit_score'],
			'affiliates' =>	(boolean) $arr['affiliates'],
			'affiliated_entities'	=>	$arr['affiliated_entities'],
			'farm_supplier_creditors'	=>	$arr['farm_supplier_creditors']
		);
	}
}