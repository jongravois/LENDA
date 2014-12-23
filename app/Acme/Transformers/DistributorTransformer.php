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
      'state' => $arr['state']['abr'],
      'zip' => $arr['zip'],
      'locale' => $arr['city'] . ', ' . $arr['state']['abr'],
      'phone' => $arr['phone'],
      'email' => $arr['email']
    ];
  }
}