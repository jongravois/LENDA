<?php namespace Acme\Transformers;

class LoancropTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;

        if( is_null($arr['p1_yield'])){
          $p1 = null;
        } else {
          $p1 = (double) $arr['p1_yield'];
        }

        if( is_null($arr['p2_yield'])){
          $p2 = null;
        } else {
          $p2 = (double) $arr['p2_yield'];
        }

        if( is_null($arr['p3_yield'])){
          $p3 = null;
        } else {
          $p3 = (double) $arr['p3_yield'];
        }

        if( is_null($arr['p4_yield'])){
          $p4 = null;
        } else {
          $p4 = (double) $arr['p4_yield'];
        }

        if( is_null($arr['p5_yield'])){
          $p5 = null;
        } else {
          $p5 = (double) $arr['p5_yield'];
        }

        if( is_null($arr['p6_yield'])){
          $p6 = null;
        } else {
          $p6 = (double) $arr['p6_yield'];
        }

        return [
			'id' =>	(integer) $arr['id'],
			'crop_year'	=>	(integer) $arr['crop_year'],
			'crop_id' =>	$arr['crop']['id'],
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
			'percent_irrigated' => (double) $arr['percent_irrigated'],
			'break_even' => $arr['break_even'],
			'p1_yield'	=>	$p1,
			'p2_yield'	=>	$p2,
			'p3_yield'	=>	$p3,
			'p4_yield'	=>	$p4,
			'p5_yield'	=>	$p5,
			'p6_yield'	=>	$p6,
            'arm_default_price' => (double) $arr['crop']['arm_default_price'],
            'arm_default_ins_price' => (double) $arr['crop']['arm_default_ins_price'],
            'arm_default_yield' => (double) $arr['crop']['arm_default_yield'],
			'adj_prod'	=>	((double) $arr['acres'] * ((double) $arr['prod_share']/100) * (double) $arr['prod_yield'] * (double) $arr['prod_price'])+(((double) $arr['bkprice'] - (double) $arr['prod_price']) * (double) $arr['harvest']) - ((double) $arr['harvest'] * ((double) $arr['prod_yield']/100) * (double) $arr['acres']) + ((double) $arr['rebates'] * (double) $arr['prod_yield'] * ((double) $arr['prod_share']/100) * (double) $arr['acres'])
		];
	}
}