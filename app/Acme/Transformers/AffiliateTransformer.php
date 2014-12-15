<?php namespace Acme\Transformers;

class AffiliateTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' => $arr['id'],
      'loan_id'	=> $arr['loan_id'],
      'entity_name' => $arr['entity_name'],
      'percent_owned' => (double) $arr['percent_owned']
    ];
  }
}