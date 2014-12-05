<?php namespace Acme\Transformers;

use Carbon\Carbon;
class FarmerTransformer extends Transformer{

  public function transform($farmer)
  {
    $dtToday = Carbon::now();
    $dtDOB = $farmer['dob'];
    $age_of_farmer = $dtToday->diffInYears($dtDOB);

    return [
      'id'			=>	$farmer['id'],
      'farmer'		=>	$farmer['farmer'],
      'nick'			=>	$farmer['nick'],
      'address'		=>	$farmer['address'],
      'city'			=>	$farmer['city'],
      'state_id'		=>	$farmer['state_id'],
      'state'			=>	$farmer['state']['abr'],
      'zip'			=>	$farmer['zip'],
      'email'			=>	$farmer['email'],
      'phone'			=>	$farmer['phone'],
      'ssn'			=>	$farmer['ssn'],
      'dob'			=>	$farmer['dob']->format('m/d/Y'),
      'age'		=>	$age_of_farmer,
      'farm_exp'	=>	$farmer['farm_exp']
    ];
  }
}