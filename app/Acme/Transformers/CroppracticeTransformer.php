<?php namespace Acme\Transformers;

class CroppracticeTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'crop_id' => $arr['crop_id'],
			'crop' => $arr['crop'],
			'practice' => $arr['practice'],
			'measurement' => $arr['measurement'],
			'rebate_measurement' => $arr['rebate_measurement'],
		];
	}
}