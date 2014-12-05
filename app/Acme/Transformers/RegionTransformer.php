<?php namespace Acme\Transformers;

class RegionTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'region' => $arr['region']
		];
	}
}