<?php namespace Acme\Transformers;

class CropTransformer extends Transformer{

	public function transform($arr)
	{
		return $arr;
		return [
			'id' =>	(integer) $arr['id'],
			'crop_year'	=>	$arr['crop_year'],
			'croppractice_id' => (integer) $arr['croppractice_id'],
			'locale' => $arr['farm']['county_id'],
			'crop' =>	$arr['croppractice']['crop'],
			'fsn' => $arr['farm']['fsn'],
			'practice' =>	$arr['croppractice']['practice'],
			'tea' => $arr['tea'],
			'yield_uom'	=>	$arr['yield_uom'],
			'ins_type' => $arr['ins_type'],
			'acres'	=>	(double) $arr['acres'],
			'aph'	=>	(double) $arr['ins_yield'],
			'prod_yield' =>	(double) $arr['prod_yield'],
			'ins_price' =>	(double) $arr['ins_price'],
			'prod_price' =>	(double) $arr['prod_price'],
			'harvest' =>	(double) $arr['harvest'],
			'ins_share' =>	(double) $arr['ins_share'],
			'prod_share' =>	(double) $arr['prod_share'],
			'mill_share' =>	(double) $arr['mill_share'],
			'markettowhom' => $arr['markettowhom'],
			'bkqty'		=>	$arr['bkqty'],
			'bkprice'	=>	(double) $arr['bkprice'],
			'gin_mill'	=>	$arr['gin_mill'],
			'rebates'	=>	(double) $arr['rebates'],
			'p1_yield'	=>	$arr['p1_yield'],
			'p2_yield'	=>	$arr['p2_yield'],
			'p3_yield'	=>	$arr['p3_yield'],
			'p4_yield'	=>	$arr['p4_yield'],
			'p5_yield'	=>	$arr['p5_yield'],
			'p6_yield'	=>	$arr['p6_yield'],
			'percent_irrigated' => $arr['percent_irrigated'],
			'adj_prod'	=>	((double) $arr['acres'] * ((double) $arr['prod_share']/100) * (double) $arr['prod_yield'] * (double) $arr['prod_price'])+(((double) $arr['bkprice'] - (double) $arr['prod_price']) * (double) $arr['harvest']) - ((double) $arr['harvest'] * ((double) $arr['prod_yield']/100) * (double) $arr['acres']) + ((double) $arr['rebates'] * (double) $arr['prod_yield'] * ((double) $arr['prod_share']/100) * (double) $arr['acres'])
		];
	}
}