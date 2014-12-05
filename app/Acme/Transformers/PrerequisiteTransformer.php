<?php namespace Acme\Transformers;

use Carbon\Carbon;

class PrerequisiteTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'loan_id' => $arr['loan_id'],
			'document' => $arr['document'],
			'path' => $arr['path'],
			'date_requested' => $arr['date_requested'] ? $arr['date_requested']->format('m/d/Y') : null,
			'date_received' => $arr['date_received'] ? $arr['date_received']->format('m/d/Y') : null,
			'reason_pending' => $arr['reason_pending'],
		];
	}
}