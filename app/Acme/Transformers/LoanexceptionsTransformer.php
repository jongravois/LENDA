<?php namespace Acme\Transformers;

class LoanexceptionsTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return array(
			'id'		=>	$arr['id'],
			'loan_id'	=> 	$arr['loan_id'],
			'exception_id'	=>	$arr['exception_id'],
			'msg'		=>	$arr['msg']
		);
	}
}