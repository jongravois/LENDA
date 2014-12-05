<?php namespace Acme\Transformers;


class StateTransformer extends Transformer {

	public function transform($state)
	{
		return [
			'id'		=> $state['id'],
			'state' 	=> $state['state'],
			'abr' 		=> $state['abr']
		];
	}
}