<?php namespace Acme\Transformers;

class NotificationTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'user_id' => $arr['user_id'],
      'loan_id' => $arr['loan_id'],
      'notification_type'	=>	$arr['notification_type'],
      'task' => $arr['task'],
      'status' => $arr['status']
    ];
  }
}