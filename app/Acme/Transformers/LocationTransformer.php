<?php namespace Acme\Transformers;

class LocationTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' =>	$arr['id'],
      'location' => $arr['location'],
      'loc_abr' => $arr['loc_abr'],
      'region_id' => $arr['region_id'],
      'region' => $arr['region']['region'],
      'address' => $arr['address'],
      'city' => $arr['city'],
      'state' => $arr['state'],
      'zip' => $arr['zip'],
      'phone' => $arr['phone'],
      'manager_id' => $arr['manager_id'],
      'manager' => $arr['manager']['username']
    ];
  }
}