<?php namespace Acme\Transformers;

class FarmcropsTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return array(
			'id'		=>	(integer) $arr['id'],
			'crop_year'	=>	$arr['crop_year'],
			'loan_id'	=> 	(integer) $arr['loan_id'],
			'farm_id'	=> 	(integer) $arr['farm_id'],
			'fsn'		=>	$arr['farm']['fsn'],
			'towhom_market' => $arr['towhom_market'],
			'gin_mill'	=> $arr['gin_mill'],
			'irr'		=>	(boolean) $arr['farm']['irr'],
			'ni'		=>	(boolean) $arr['farm']['ni'],
			'facirr'	=>	(boolean) $arr['farm']['facirr'],
			'facni'		=>	(boolean) $arr['farm']['facni'],
			'percent_irrigated'	=> (double) $arr['percent_irrigated'],
			'crop_id'	=> 	(integer) $arr['crop_id'],
			'crop'		=>	$arr['crop']['crop'],
			'ins_type'	=>	$arr['ins_type'],
			'ins_price'	=>	(double) $arr['ins_price'],
			'ins_level'	=>	(double) $arr['ins_level'],
			'ins_yield'	=>	(double) $arr['ins_yield'],
			'ins_premium'	=>	(double) $arr['ins_premium'],
			'acres'		=> 	(double) $arr['acres'],
			'ins_share'	=>	(double) $arr['ins_share'],
			'prod_share'	=>	(double) $arr['prod_share'],
			'mill_share'	=>	(double) $arr['mill_share'],
			'prod_yield'	=>	(double) $arr['prod_yield'],
			'prod_price'	=> 	(double) $arr['prod_price'],
			'bkqty'		=> 	(double) $arr['bkqty'],
			'bkprice'	=> 	(double) $arr['bkprice'],
			'harvest'	=> 	(double) $arr['harvest'],
			'rebates'	=> 	(double) $arr['rebates'],
			'disc_prod_percent'	=> 	(double) $arr['disc_prod_percent'],
			'disc_ins_percent'	=>	(double) $arr['disc_ins_percent'],
			'ins_guaranty'	=>	(((double) $arr['ins_price'] * ((double) $arr['ins_level'] / 100) * (double) $arr['ins_yield']) - (double) $arr['ins_premium']) * ((double) $arr['acres'] * ((double) $arr['ins_share'] / 100)),
			'prod'	=>	((double) $arr['acres'] * ((double) $arr['prod_share'] / 100) * (double) $arr['prod_yield'] * (double) $arr['prod_price']),
			'adj_prod'	=>	( (double) $arr['acres'] * ((double) $arr['prod_share'] / 100) * (double) $arr['prod_yield'] * (double) $arr['prod_price']) + (((double) $arr['bkprice'] - (double) $arr['prod_price']) * (double) $arr['bkqty']) - ((double) $arr['harvest'] * (double) $arr['prod_yield'] * (double) $arr['acres']) + ((double) $arr['rebates'] * (double) $arr['prod_yield'] * (double) $arr['acres'] * ((double) $arr['prod_share'] / 100)),
			'disc_prod'	=>	((double) $arr['acres'] * ((double) $arr['prod_share'] / 100) * (double) $arr['prod_yield'] * (double) $arr['prod_price']) * ((double) $arr['disc_prod_percent'] / 100),
			'disc_adj_prod'	=>	((double) $arr['disc_prod_percent'] / 100) * ( (double) $arr['acres'] * ((double) $arr['prod_share'] / 100) * (double) $arr['prod_yield'] * (double) $arr['prod_price']) + (((double) $arr['bkprice'] - (double) $arr['prod_price']) * (double) $arr['bkqty']) - ((double) $arr['harvest'] * (double) $arr['prod_yield'] * (double) $arr['acres']) + ((double) $arr['rebates'] * (double) $arr['prod_yield'] * (double) $arr['acres'] * ((double) $arr['prod_share'] / 100)),
			'ins_disc_prod'	=>	(((double) $arr['ins_price'] * ((double) $arr['ins_level'] / 100) * (double) $arr['ins_yield']) - (double) $arr['ins_premium']) * ((double) $arr['acres'] * ((double) $arr['ins_share'] / 100)) - ((double) $arr['acres'] * ((double) $arr['prod_share'] / 100) * (double) $arr['prod_yield'] * (double) $arr['prod_price']) * ((double) $arr['disc_prod_percent'] / 100),
			'disc_ins'	=>	((((double) $arr['ins_price'] * ((double) $arr['ins_level'] / 100) * (double) $arr['ins_yield']) - (double) $arr['ins_premium']) * ((double) $arr['acres'] * ((double) $arr['ins_share'] / 100)) - ((double) $arr['acres'] * ((double) $arr['prod_share'] / 100) * (double) $arr['prod_yield'] * (double) $arr['prod_price']) * ((double) $arr['disc_prod_percent'] / 100)) * .8
		);
	}
}