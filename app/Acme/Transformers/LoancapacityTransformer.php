<?php namespace Acme\Transformers;

class LoancapacityTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	(integer) $arr['id'],
			'loan_id' => (integer) $arr['loan_id'],
			'year_1_revenue' => (double) $arr['year_1_revenue'],
			'year_1_expenses' => (double) $arr['year_1_expenses'],
			'year_2_revenue' => (double) $arr['year_2_revenue'],
			'year_2_expenses' => (double) $arr['year_2_expenses'],
			'year_3_revenue' => (double) $arr['year_3_revenue'],
			'year_3_expenses' => (double) $arr['year_3_expenses'],
			'current_asset' => (double) $arr['current_asset'],
			'current_discount' => (double) $arr['current_discount'],
			'current_liability' => (double) $arr['current_liability'],
			'intermediate_asset' => (double) $arr['intermediate_asset'],
			'intermediate_discount' => (double) $arr['intermediate_discount'],
			'intermediate_liability' => (double) $arr['intermediate_liability'],
			'fixed_asset' => (double) $arr['fixed_asset'],
			'fixed_discount' => (double) $arr['fixed_discount'],
			'fixed_liability' => (double) $arr['fixed_liability'],
			'corn_acres' => (double) $arr['corn_acres'],
			'soybean_acres' => (double) $arr['soybean_acres'],
			'sorghum_acres' => (double) $arr['sorghum_acres'],
			'wheat_acres' => (double) $arr['wheat_acres'],
			'cotton_acres' => (double) $arr['cotton_acres'],
			'rice_acres' => (double) $arr['rice_acres'],
			'peanut_acres' => (double) $arr['peanut_acres'],
			'sugarcane_acres' => (double) $arr['sugarcane_acres']
		];
	}
}