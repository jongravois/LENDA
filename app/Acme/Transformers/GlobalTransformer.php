<?php namespace Acme\Transformers;

class GlobalTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' => $arr['id'],
			'crop_year' => (integer) $arr['crop_year'],
			'season' => $arr['season'],
			'int_percent_arm' => (double) $arr['int_percent_arm'],
			'int_percent_dist' => (double) $arr['int_percent_dist'],
      'min_proc_fee' => (double) $arr['min_proc_fee'],
			'proc_fee_rate' => (double) $arr['proc_fee_rate'],
			'svc_fee_rate' => (double) $arr['svc_fee_rate'],
			'projected_crops_discount_rate' => (double) $arr['projected_crops_discount_rate'],
			'projected_crops_discount_rate' => (double) $arr['fsa_assignment_discount_rate'],
			'fsa_assignment_discount_rate' => (double) $arr['projected_crops_discount_rate'],
			'ins_discount_rate' => (double) $arr['ins_discount_rate'],
			'equipment_discount_rate' => (double) $arr['equipment_discount_rate'],
			'realestate_discount_rate' => (double) $arr['realestate_discount_rate'],
			'claims_discount_rate' => (double) $arr['claims_discount_rate'],
			'current_bs_constraint' => (double) $arr['current_bs_constraint'],
			'intermediate_bs_constraint' => (double) $arr['intermediate_bs_constraint'],
			'fixed_bs_constraint' => (double) $arr['fixed_bs_constraint']
		];
	}
}