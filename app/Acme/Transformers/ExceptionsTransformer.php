<?php namespace Acme\Transformers;

class ExceptionsTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' => $arr['id'],
      'title' => $arr['title'],
      'message' => $arr['message']
    ];
  }
}