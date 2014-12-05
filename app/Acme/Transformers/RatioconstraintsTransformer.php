<?php namespace Acme\Transformers;

class RatioconstraintsTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' => (integer) $arr['id'],
			'constraint' => $arr['constraint'],
			'gradeA' => $arr['gradeA'],
			'gradeB' => $arr['gradeB'],
			'gradeC' => $arr['gradeC'],
			'gradeD' => $arr['gradeD']
		];
	}

}