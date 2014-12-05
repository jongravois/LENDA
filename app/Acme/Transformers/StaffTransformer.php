<?php namespace Acme\Transformers;


class StaffTransformer extends Transformer
{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' => $arr['id'],
      'username' => $arr['username'],
      'nick' => $arr['nick'],
      'email' => $arr['email'],
      'phone' => $arr['phone'],
      'role_id' => $arr['role_id'],
      //'role_abr' => $arr['role']['abr'],
      //'role' => $arr['role']['role'],
      'manager_id' => $arr['manager_id'],
      'loc_id' => $arr['loc_id'],
      //'location' => $arr['location']['location'],
      //'loc_abr' => $arr['location']['loc_abr'],
      //'region_id' => $arr['location']['region_id'],
      'is_admin' => (boolean) $arr['is_admin'],
      'is_approver' => (boolean) $arr['is_approver'],
      'is_manager' => (boolean) $arr['is_manager']
    ];
  }
}