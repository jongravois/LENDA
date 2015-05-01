<?php namespace Acme\Transformers;

class BudgetTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' => (integer)$arr['id'],
      'crop' => $arr['crop']['crop'],
      'acres' => $arr['acres'],
      'expenses' => $arr['expenses']
    ];
  }
}