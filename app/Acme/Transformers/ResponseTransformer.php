<?php namespace Acme\Transformers;

class ResponseTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return array(
			'id' =>	$arr['id'],
			'loan_id' => $arr['loan_id'],
			'comment_id' => $arr['comment_id'],
			'user_id' => $arr['user_id'],
			'body' =>$arr['body'],
            'created' => $arr['created_at']->format('m/d/Y')
		);
	}
}