<?php namespace Acme\Transformers;

class CrosscollateralTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return array(
			'id' =>	(integer) $arr['id'],
			'loan_id' => (integer) $arr['loan_id'],
			'collateral)id' => (integer) $arr['collateral_id'],
			'loans' => $arr['loans']
		);
	}
}