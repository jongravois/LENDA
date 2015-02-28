<?php namespace Acme\Transformers;

class AgentTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' => $arr['id'],
      'agency_id' => $arr['agency_id'],
      'agent' => $arr['agent'],
      'agent_phone' => $arr['agent_phone'],
      'agent_email' => $arr['agent_email'],
      'agency' => $arr['agency']['agency'],
      'agency_address' => $arr['agency']['address'],
      'agency_city' => $arr['agency']['city'],
      'agency_state' => $arr['agency']['state'],
      'agency_zip' => $arr['agency']['zip'],
      'agency_phone' => $arr['agency']['phone'],
      'agency_email' => $arr['agency']['email'],
    ];
  }
}