<?php namespace Acme\Transformers;

class LoancropTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	(integer) $arr['id'],
			'crop_year'	=>	(integer) $arr['crop_year'],
			'name' =>	$arr['crop']['crop'],
			'uom' => $arr['crop']['measurement'],
			'uom_rebate' => $arr['crop']['rebate_measurement'],
			'is_active' => (boolean) $arr['is_active'],
			'acres'	=>	(double) $arr['acres'],
			'tea' => (double) $arr['crop']['tea'],
			'markettowhom' => $arr['markettowhom'],
			'prod_price' => (double) $arr['prod_price'],
			'prod_yield' => (double) $arr['prod_yield'],
			'prod_share' => (double) $arr['prod_share'],
			'ins_share' => (double) $arr['ins_share'],
			'mill_share' => (double) $arr['mill_share'],
			'bkqty'		=>	$arr['bkqty'],
			'bkprice'	=>	(double) $arr['bkprice'],
			'gin_mill'	=>	$arr['gin_mill'],
			'harvest' =>	(double) $arr['harvest'],
			'rebates'	=>	(double) $arr['rebates'],
			'fsa_payment' => (double) $arr['fsa_payment'],
			'percent_irrigated' => $arr['percent_irrigated'],
			'break_even' => $arr['break_even'],
			'p1_yield'	=>	(double) $arr['p1_yield'],
			'p2_yield'	=>	(double) $arr['p2_yield'],
			'p3_yield'	=>	(double) $arr['p3_yield'],
			'p4_yield'	=>	(double) $arr['p4_yield'],
			'p5_yield'	=>	(double) $arr['p5_yield'],
			'p6_yield'	=>	(double) $arr['p6_yield'],
			'adj_prod'	=>	((double) $arr['acres'] * ((double) $arr['prod_share']/100) * (double) $arr['prod_yield'] * (double) $arr['prod_price'])+(((double) $arr['bkprice'] - (double) $arr['prod_price']) * (double) $arr['harvest']) - ((double) $arr['harvest'] * ((double) $arr['prod_yield']/100) * (double) $arr['acres']) + ((double) $arr['rebates'] * (double) $arr['prod_yield'] * ((double) $arr['prod_share']/100) * (double) $arr['acres'])
		];
	}
}