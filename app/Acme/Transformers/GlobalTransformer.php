<?php namespace Acme\Transformers;

class GlobalTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' => $arr['id'],
			'crop_year' => $arr['crop_year'],
			'season' => $arr['season'],
			'int_percent_arm' => $arr['int_percent_arm'],
			'int_percent_dist' => $arr['int_percent_dist'],
			'proc_fee_rate' => $arr['proc_fee_rate'],
			'svc_fee_rate' => $arr['svc_fee_rate'],
			'projected_crops_discount_rate' => $arr['projected_crops_discount_rate'],
			'projected_crops_discount_rate' => $arr['fsa_assignment_discount_rate'],
			'fsa_assignment_discount_rate' => $arr['projected_crops_discount_rate'],
			'ins_discount_rate' => $arr['ins_discount_rate'],
			'equipment_discount_rate' => $arr['equipment_discount_rate'],
			'realestate_discount_rate' => $arr['realestate_discount_rate'],
			'claims_discount_rate' => $arr['claims_discount_rate'],
			'current_bs_constraint' => $arr['current_bs_constraint'],
			'intermediate_bs_constraint' => $arr['intermediate_bs_constraint'],
			'fixed_bs_constraint' => $arr['fixed_bs_constraint']
		];
	}
}