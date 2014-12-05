<?php namespace Acme\Transformers;

class ReportTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return array(
			'id' =>	$arr['id'],
			'report' => $arr['report'],
			'rptPath' => $arr['rptPath'],
			'is_required' => (boolean) $arr['is_required']
		);
	}
}