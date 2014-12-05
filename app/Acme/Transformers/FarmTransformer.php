<?php namespace Acme\Transformers;

class FarmTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id'			=>	$arr['id'],
			'loan_id'		=>	$arr['loan_id'],
			'county_id'		=>	$arr['county_id'],
			'county'		=>	$arr['county']['county'],
			'locale'		=>	$arr['county']['locale'],
			'fsn'			=>	$arr['fsn'],
			'owner'			=>	$arr['owner'],
			'share_rent'	=>	$arr['share_rent'],
			'cash_rent'		=>	$arr['cash_rent'],
			'waived'		=>	$arr['waived'],
			'when_due'		=>	$arr['when_due'],
			'acres' => $arr['acres'],
			'irr'			=>	(boolean) $arr['irr'],
			'ni'			=>	(boolean) $arr['ni'],
			'facirr'		=>	(boolean) $arr['facirr'],
			'facni'			=>	(boolean) $arr['facni'],
			'fsa_paid'	=>	$arr['fsa_paid'],
			'percent_irrigated'	=>	(double) $arr['percent_irrigated']
		];
	}
}