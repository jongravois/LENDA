<?php namespace Acme\Transformers;

class NotificationTransformer extends Transformer
{

    public function transform($arr)
    {
        //return $arr;
        return [
            'user_id' => $arr['user_id'],
            'user' => $arr['user']['username'],
            'user_email' => $arr['user']['email'],
            'loan_id' => $arr['loan_id'],
            'report_id' => $arr['report_id'],
            'notification_type' => $arr['notification_type'],
            'task' => $arr['task'],
            'status' => $arr['status']
        ];
    }
}