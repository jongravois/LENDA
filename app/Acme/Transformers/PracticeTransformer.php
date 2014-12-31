<?php namespace Acme\Transformers;

class PracticeTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' => $arr['id'],
      'practice' => $arr['practice']
    ];
  }
}