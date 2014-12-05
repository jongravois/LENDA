<?php namespace Acme\Transformers;

class LoanassetTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' => $arr['id'],
			'loan_id' => $arr['loan_id'],
			'total_arm' => (double) $arr['total_arm'],
			'total_dist' => (double) $arr['total_dist'],
			'total_other' => (double) $arr['total_other'],
			'total_total' => (double) $arr['total_total']
		];
	}
}