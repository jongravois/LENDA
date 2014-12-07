<?php namespace Acme\Transformers;

class InsurancetypeTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id'			=>	$arr['id'],
      'type'	=>	$arr['type']
    ];
  }
}