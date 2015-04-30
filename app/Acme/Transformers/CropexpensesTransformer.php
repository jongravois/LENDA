<?php namespace Acme\Transformers;

class CropexpensesTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'loan_id' => (integer) $arr['loan_id'],
			'crop_id' => (integer) $arr['crop_id'],
			'crop' => $arr['crop']['name'],
			'cat_id' => (integer) $arr['cat_id'],
			'expense' => $arr['expense'],
			'arm' => (double) $arr['arm'],
			'arm_adj' => (double) $arr['arm_adj'],
			'dist' => (double) $arr['dist'],
			'dist_adj' => (double) $arr['dist_adj'],
			'other' => (double) $arr['other'],
			'other_adj' => (double) $arr['other_adj']
		];
	}
}