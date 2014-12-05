<?php namespace Acme\Transformers;

class DistributorTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' =>	$arr['id'],
      'distributor' => $arr['distributor'],
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