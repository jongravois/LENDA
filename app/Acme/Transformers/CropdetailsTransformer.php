<?php namespace Acme\Transformers;

class CropdetailsTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	(integer) $arr['id'],
			'crop_year'	=> $arr['crop_year'],
			'loan_id' => (integer) $arr['loan_id'],
			'is_active' => (boolean) $arr['is_active'],
			'irr' => (boolean) $arr['irr'],
			'ni' => (boolean) $arr['ni'],
			'faci' => (boolean) $arr['faci'],
			'facni' => (boolean) $arr['facni'],
			'crop_id' => (integer) $arr['crop_id'],
			'crop' => $arr['crop']['crop'],
			'uom' => $arr['crop']['measurement'],
			'market' => $arr['towhommarket'],
			'gin_mill' => $arr['gin_mill'],
			'bkqty' => (double) $arr['bkqty'],
			'bkprice' => (double) $arr['bkprice'],
			'rebate' => (double) $arr['rebate'],
			'prod_yield' => (double) $arr['prod_yield'],
			'prod_price' => (double) $arr['prod_price'],
			'disc_prod_percent' => (double) $arr['disc_prod_percent'],
			'disc_ins_percent' => (double) $arr['disc_ins_percent'],
			'p1_yield' => (double) $arr['p1_yield'],
			'p2_yield' => (double) $arr['p2_yield'],
			'p3_yield' => (double) $arr['p3_yield'],
			'p4_yield' => (double) $arr['p4_yield'],
			'p5_yield' => (double) $arr['p5_yield'],
			'p6_yield' => (double) $arr['p6_yield']
		];
	}
}