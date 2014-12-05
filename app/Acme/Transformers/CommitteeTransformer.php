<?php namespace Acme\Transformers;

class CommitteeTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' => (integer) $arr['id'],
			'loan_id' => (integer) $arr['loan_id'],
			'user_id' => (integer) $arr['user_id'],
			'username' => $arr['user']['username'],
			'role_id' => (integer) $arr['role_id'],
			'role' => $arr['role']['role'],
			'vote_status_id' => (integer) $arr['vote_status_id'],
			'vote_status' => $arr['vote_status']['status'],
			'vote_id' => (integer) $arr['vote_id'],
			'vote' => $arr['vote']['vote'],
			'vote_request_date' => $arr['vote_request_date'],
			'vote_received_date' => $arr['vote_received_date']
		];
	}

}