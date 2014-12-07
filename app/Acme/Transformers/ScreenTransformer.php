<?php namespace Acme\Transformers;

class ScreenTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' =>	$arr['id'],
      'loantype_id'	=>	$arr['loantype_id'],
      'screen' =>	$arr['screen'],
      'sort_order' => (integer) $arr['sort_order']
    ];
  }
}