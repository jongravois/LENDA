<?php namespace Acme\Transformers;

class CommentTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
            'id' =>$arr['id'],
			'loan_id' => $arr['loan_id'],
			'type' => $arr['type'],
			'user_id' => $arr['user_id'],
			'user' => $arr['user']['username'],
			'dtCom' => $arr['created_at']->format('m/d/Y'),
			'comment' => $arr['comment'],
			'responses' => $arr['responses'],
            'status' => $arr['status']
		];
	}
}