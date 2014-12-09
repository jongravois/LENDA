<?php namespace Acme\Transformers;

class LoanquestionTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id'			=>	$arr['id'],
      'loan_id'	=>	$arr['loan_id'],
      'amount_requested'	=>	$arr['amount_requested'],
      'plant_own'	=>	(boolean) $arr['plant_own'],
      'plant_own_details'	=>	$arr['plant_own_details'],
      'harvest_own'	=>	(boolean) $arr['harvest_own'],
      'harvest_own_details'	=>	$arr['harvest_own_details'],
      'equip_obligations'	=>	(boolean) $arr['equip_obligations'],
      'equip_obligations_details'	=>	$arr['equip_obligations_details'],
      'other_cash'	=>	(boolean) $arr['other_cash'],
      'other_cash_details'	=>	$arr['other_cash_details'],
      'insInPlace'	=>	(boolean) $arr['insInPlace'],
      'insInPlace_details'	=>	$arr['insInPlace_details'],
      'fsa_good'	=>	(boolean) $arr['fsa_good'],
      'fsa_good_details'	=>	$arr['fsa_good_details'],
      'fci_good'	=>	(boolean) $arr['fci_good'],
      'fci_good_details'	=>	$arr['fci_good_details'],
      'premiums_past'	=>	(boolean) $arr['premiums_past'],
      'premiums_details'	=>	$arr['premiums_details'],
      'legal_defendant'	=>	(boolean) $arr['legal_defendant'],
      'defendant_details'	=>	$arr['defendant_details'],
      'judgements'	=>	(boolean) $arr['judgements'],
      'judgement_details'	=>	$arr['judgement_details'],
      'bankruptcy'	=>	(boolean) $arr['bankruptcy'],
      'bankruptcy_details'	=>	$arr['bankruptcy_details'],
      'bankruptcy_order'	=>	(boolean) $arr['bankruptcy_order'],
      'liens'	=>	(boolean) $arr['liens'],
      'liens_details'	=>	$arr['liens_details'],
      'fsa_direct_pay'	=>	(boolean) $arr['fsa_direct_pay'],
      'fsa_direct_pay_details'	=>	$arr['fsa_direct_pay_details'],
      'future_liabilities'	=>	(boolean) $arr['future_liabilities'],
      'credit_3p_available'	=>	(boolean) $arr['credit_3p_available'],
      'credit_3p_details'	=>	$arr['credit_3p_details'],
      'income_percent'	=>	(double) $arr['income_percent'],
      'income_distribution_details'	=>	$arr['income_distribution_details'],
      'distributor'	=>	$arr['distributor'],
      'agency'	=>	(integer) $arr['agency'],
      'pesticide_number'	=>	$arr['pesticide_number'],
      'credit_score'	=>	(double) $arr['credit_score'],
      'cpa_financials'	=>	(boolean) $arr['cpa_financials'],
      'affiliated_entities'	=>	$arr['affiliated_entities'],
      'farm_supplier_creditors'	=>	$arr['farm_supplier_creditors']
    ];
  }
}