<?php namespace Acme\Transformers;

class CommentstatusTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
        'id' => $arr['id'],
        'loan_id' => $arr['loan_id'],
        'status' => $arr['status']
    ];
  }
}