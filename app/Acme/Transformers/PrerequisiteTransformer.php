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
			'title' => $arr['title'],
			'date_requested' => $arr['date_requested'] ? $arr['date_requested']->format('m/d/Y') : null,
			'date_received' => $arr['date_received'] ? $arr['date_received']->format('m/d/Y') : null,
			'path' => $arr['path'],
			'filename' => $arr['filename'],
			'reason_pending' => $arr['reason_pending'],
		];
	}
}