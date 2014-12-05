<?php namespace Acme\Transformers;

class AgencyTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' =>	$arr['id'],
      'agency' => $arr['agency'],
      'name' => $arr['name'],
      'address' => $arr['address'],
      'city' => $arr['city'],
      'state_id' => $arr['state_id'],
      'state' => $arr['state'],
      'zip' => $arr['zip'],
      'phone' => $arr['phone'],
      'email' => $arr['email']
    ];
  }
}