<?php namespace Acme\Transformers;

class LoanpracticesTransformer extends Transformer
{

	public function transform($arr)
	{
		//return $arr;
		return array(
			'crop_year' => (integer) $arr['crop_year'],
			'loan_id' => (integer) $arr['loan_id'],
			'crop_id' => (integer) $arr['crop_id'],
			'crop' => $arr['crop'],
			'is_active' => (boolean) $arr['is_active'],
			'ins_type' => $arr['ins_type'],
			'ins_option' => $arr['ins_option'],
			'ins_price' => (double) $arr['ins_price'],
			'ins_level' => (double) $arr['ins_level'],
			'aph' => (double) $arr['aph'],
			'ins_premium' => (double) $arr['ins_premium'],
			'acres' => (double) $arr['acres'],
			'ins_share' => (double) $arr['ins_share'],
			'guaranty' => (double) $arr['guaranty'],
			'value' => (double) $arr['value']

		);
	}

}