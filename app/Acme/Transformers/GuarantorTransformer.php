<?php namespace Acme\Transformers;

class GuarantorTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id'			=>	$arr['id'],
      'loan_id'	=>	$arr['loan_id'],
      'guarantor'		=>	$arr['guarantor']
    ];
  }
}