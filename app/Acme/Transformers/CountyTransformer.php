<?php namespace Acme\Transformers;


class CountyTransformer extends Transformer {

	public function transform($arr)
	{
		//return $arr;
		return [
			'id'		=> $arr['id'],
			'county' 	=> $arr['county'],
			'state_id' 	=> $arr['state_id'],
			'label'		=> $arr['label'],
			'locale'	=> $arr['locale']
		];
	}
}