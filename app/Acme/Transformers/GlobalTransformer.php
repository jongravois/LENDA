<?php namespace Acme\Transformers;

class GlobalTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' => $arr['id'],
			'crop_year' => $arr['crop_year'],
			'season' => $arr['season'],
			'arm_interest_rate' => $arr['arm_interest_rate'],
			'dist_interest_rate' => $arr['dist_interest_rate'],
			'proc_fee_rate' => $arr['proc_fee_rate'],
			'svc_fee_rate' => $arr['svc_fee_rate'],
			'current_bs_constraint' => $arr['current_bs_constraint'],
			'intermediate_bs_constraint' => $arr['intermediate_bs_constraint'],
			'fixed_bs_constraint' => $arr['fixed_bs_constraint']
		];
	}
}