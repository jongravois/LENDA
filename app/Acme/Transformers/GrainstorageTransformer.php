<?php namespace Acme\Transformers;

use Carbon\Carbon;

class GrainstorageTransformer extends Transformer{

  public function transform($arr)
  {
    if(!$arr['contract_date']){
      $contact_date = null;
    } else {
      $contract_date = $arr['contract_date']->format('m/d/Y');
    }

    if(!$arr['delivery_date']){
      $delivery_date = null;
    } else {
      $delivery_date = $arr['delivery_date']->format('m/d/Y');
    }

    //return $arr;
    return [
      'id' => $arr['id'],
      'loan_id' => $arr['loan_id'],
      'contract_number' => $arr['contract_number'],
      'contract_date' => $contract_date,
      'delivery_date' => $delivery_date,
      'commodity' => $arr['commodity'],
      'grain_buyer' => $arr['grain_buyer'],
      'lien_holder' => $arr['lien_holder'],
      'advance_percent' => (double) $arr['advance_percent'],
      'contract_amount' => (double) $arr['contract_amount'],
      'contract_price' => (double) $arr['contract_price'],
      'owner_share' => (double) $arr['owner_share'],
      'amount_requested' => (double) $arr['amount_requested'],
      'revenue' => (double) $arr['revenue'],
      'eligible_proceeds' => (double) $arr['eligible_proceeds'],
      'payment_terms' => (double) $arr['payment_terms']
    ];
  }
}