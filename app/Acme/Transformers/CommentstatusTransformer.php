<?php namespace Acme\Transformers;

class CommentstatusTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' => $arr['id'],
      'status' => $arr['status']
    ];
  }
}