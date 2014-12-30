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
      'agent_email' => $arr['agent_email']
    ];
  }
}