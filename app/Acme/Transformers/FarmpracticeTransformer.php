<?php namespace Acme\Transformers;

class FarmpracticeTransformer extends Transformer
{

	public function transform($arr)
	{
		//return $arr;
		return array(
			'loan_id' => (integer) $arr['loan_id'],
			'county_id' => (integer) $arr['farm']['county_id'],
			'locale' => $arr['farm']['county']['locale'],
			'fsn' => $arr['farm']['fsn'],
			'owner' => $arr['farm']['owner'],
			'practice' => $arr['practice'],
			'crop_id' => (integer) $arr['crop_id'],
			'crop' => $arr['crop']['crop'],
			'crop_year' => (integer) $arr['crop_year'],
			'ins_type' => $arr['ins_type'],
			'ins_option' => $arr['ins_option'],
			'ins_price' => (double) $arr['ins_price'],
			'ins_level' => (double) $arr['ins_level'],
			'aph' => (double) $arr['aph'],
			'ins_premium' => (double) $arr['ins_premium'],
			'acres' => (double) $arr['acres'],
			'ins_share' => (double) $arr['ins_share'],
			'prod_share' => (double) $arr['prod_share'],
			'mill_share' => (double) $arr['mill_share'],
			'prod_yield' => (double) $arr['prod_yield'],
			'prod_price' => (double) $arr['prod_price'],
			'bkqty' => (double) $arr['bkqty'],
			'bkprice' => (double) $arr['bkprice'],
			'harvest' => (double) $arr['harvest'],
			'rebates' => (double) $arr['rebates'],
			'disc_prod_percent' => $arr['disc_prod_percent'],
			'disc_ins_percent' => (double) $arr['disc_ins_percent'],
			'disc_non_rp' => (double) $arr['disc_non_rp'],
			'percent_irrigated' => $arr['percent_irrigated'],
			'margin' => (double) $arr['margin'],
			'risk' => (double) $arr['risk']

		);
	}

}