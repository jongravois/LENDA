<?php namespace Acme\Transformers;

class UnitTransformer extends Transformer{

	public function transform($arr)
	{
		return $arr;
		return [
			'id'			=>	$arr['id'],
			'g_crop_year'	=>	$arr['g_crop_year'],
			'g_season'		=>	$arr['g_season']
		];
	}
}