<?php namespace Acme\Transformers;

class FarmcropsTransformer extends Transformer{

	public function transform($arr)
	{
        $acres = ((double) $arr['farm']['irr'] + (double) $arr['farm']['ni']);
        if($acres == 0){
            $total_acres = 1;
        } else {
            $total_acres = $acres;
        } // end if

		//return $arr;
		return array(
			'id' =>	(integer) $arr['id'],
			'crop_year' => $arr['crop_year'],
			'loan_id' => (integer) $arr['loan_id'],
			'farm_id' => (integer) $arr['farm_id'],
            'fsn' => $arr['farm']['fsn'],
            'crop_id' => (integer) $arr['crop_id'],
            'crop' => $arr['crop']['crop'],
            'towhom_market' => $arr['towhom_market'],
			'gin_mill' => $arr['gin_mill'],
			'irr' =>  (double) $arr['farm']['irr'],
			'ni' => (double) $arr['farm']['ni'],
            'acres' => (double) $arr['farm']['irr'] + (double) $arr['farm']['ni'],
			'ins_type'	=>	$arr['ins_type'],
			'ins_price'	=>	(double) $arr['ins_price'],
			'ins_level'	=>	(double) $arr['ins_level'],
			'ins_yield'	=>	(double) $arr['ins_yield'],
			'ins_premium' => (double) $arr['ins_premium'],
			'ins_share'	=> (double) $arr['ins_share'],
			'prod_share' =>	(double) $arr['prod_share'],
			'mill_share' => (double) $arr['mill_share'],
			'prod_yield' => (double) $arr['prod_yield'],
			'prod_price' => (double) $arr['prod_price'],
			'bkqty' => (double) $arr['bkqty'],
			'bkprice' => (double) $arr['bkprice'],
			'harvest' => (double) $arr['harvest'],
			'rebates' => (double) $arr['rebates'],
			'disc_prod_percent'	=> (double) $arr['disc_prod_percent'],
			'disc_ins_percent' => (double) $arr['disc_ins_percent'],
			'ins_guaranty' => calcInsGuaranty($arr),
			'prod'	=>	calcProd($arr),
			'adj_prod'	=>	calcAdjProd($arr),
			'disc_prod'	=>	calcDiscProd($arr),
			'disc_adj_prod'	=>	calcDiscAdjProd($arr),
			'ins_disc_prod'	=>	calcInsDiscProd($arr),
			'disc_ins'	=>	calcDiscIns($arr),
            'percent_irrigated'	=> (double) $arr['farm']['irr']/$total_acres
		);
	}
}