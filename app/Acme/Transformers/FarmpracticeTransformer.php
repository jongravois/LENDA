<?php namespace Acme\Transformers;

class FarmpracticeTransformer extends Transformer
{

	public function transform($arr)
	{
		//return $arr;
		return array(
			'crop_year' => (integer) $arr['crop_year'],
			'loan_id' => (integer) $arr['loan_id'],
            'farm_id' => (integer)$arr['farm_id'],
			'crop_id' => (integer) $arr['crop_id'],
			'crop' => $arr['crop']['crop'],
			'name' => $arr['crop']['name'],
			'towhom_market' => $arr['towhom_market'],
			'gin_mill' => $arr['gin_mill'],
			'acres' => (double) $arr['acres'],
			'irrigated' => (boolean) $arr['irrigated'],
			'ins_type' => $arr['ins_type'],
			'ins_option' => $arr['ins_option'],
			'ins_price' => (double) $arr['ins_price'],
			'ins_level' => (double) $arr['ins_level'],
			'aph' => (double) $arr['aph'],
			'ins_premium' => (double) $arr['ins_premium'],
			'ins_share' => (double) $arr['ins_share'],
			'mill_share' => (double) $arr['mill_share'],
			'prod_share' => (double) $arr['prod_share'],
			'prod_yield' => (double) $arr['prod_yield'],
			'prod_price' => (double) $arr['prod_price'],
			'bkqty' => (double) $arr['bkqty'],
			'bkprice' => (double) $arr['bkprice'],
			'harvest' => (double) $arr['harvest'],
			'rebates' => (double) $arr['rebates'],
			'crop_disc' => (double)$arr['crop_disc'],
			'fsa_disc' => (double)$arr['fsa_disc'],
			'cropins_disc' => (double)$arr['cropins_disc'],
			'nonrp_disc' => (double)$arr['nonrp_disc'],
			'sco_disc' => (double)$arr['sco_disc']
		);
	}

}