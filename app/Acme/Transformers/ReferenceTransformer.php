<?php namespace Acme\Transformers;

class ReferenceTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' => $arr['id'],
      'loan_id' => $arr['loan_id'],
      'creditor' => $arr['creditor'],
      'city_state' => $arr['city_state'],
      'contact' => $arr['contact'],
      'phone' => $arr['phone'],
      'email' => $arr['email']
    ];
  }
}