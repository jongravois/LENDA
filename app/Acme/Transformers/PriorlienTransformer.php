<?php namespace Acme\Transformers;

class PriorlienTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' => $arr['id'],
      'loan_id' => $arr['loan_id'],
      'lien_holder' => $arr['lien_holder'],
      'city_state' => $arr['city_state'],
      'contact' => $arr['contact'],
      'phone' => $arr['phone'],
      'email' => $arr['email'],
      'projected_crops' => $arr['projected_crops'],
      'ins_over_discount' => $arr['ins_over_discount'],
      'fsa_payments' => $arr['fsa_payments'],
      'claims' => $arr['claims'],
      'other' => $arr['other'],
      'total' => $arr['total']
    ];
  }
}