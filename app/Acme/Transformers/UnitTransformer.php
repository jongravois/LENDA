<?php namespace Acme\Transformers;

class UnitTransformer extends Transformer{

	public function transform($arr)
	{
		return [
			'id' =>	$arr['id'],
			'unit' =>	$arr['unit'],
			'abr' =>	$arr['abr'],
			'toPounds' =>	(double) $arr['toPounds'],
			'fromPounds' =>	(double) $arr['fromPounds']
		];
	}
}