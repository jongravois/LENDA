<?php namespace Acme\Transformers;

use Carbon\Carbon;
class FarmerTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;

    $dtToday = Carbon::now();
    $dtDOB = $arr['dob'];
    $age_of_farmer = $dtToday->diffInYears($dtDOB);

    return [
      'id'			=>	$arr['id'],
      'farmer'		=>	$arr['farmer'],
      'nick'			=>	$arr['nick'],
      'address'		=>	$arr['address'],
      'city'			=>	$arr['city'],
      'state_id'		=>	$arr['state_id'],
      'state'			=>	$arr['state']['abr'],
      'zip'			=>	$arr['zip'],
      'email'			=>	$arr['email'],
      'phone'			=>	$arr['phone'],
      'ssn'			=>	$arr['ssn'],
      'dob'			=>	$arr['dob']->format('m/d/Y'),
      'age'		=>	$age_of_farmer,
      'farm_exp'	=>	$arr['farm_exp'],
      'is_repeat' => (boolean) $arr['is_repeat']
    ];
  }
}