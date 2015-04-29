<?php namespace Acme\Transformers;

class PriorlienTransformer extends Transformer
{

    public function transform($arr)
    {
        //return $arr;
        return [
            'id' => $arr['id'],
            'loan_id' => $arr['loan_id'],
            'lien_holder' => $arr['lien_holder'],
            'city_state' => $arr['city_state'],
            'contact' => $arr['contact'],
            'phone' => $arr['phone'],
            'email' => $arr['email'],
            'projected_crops' => (double) $arr['projected_crops'],
            'fsa_payments' => (double) $arr['fsa_payments'],
            'ins_over_discount' => (double) $arr['ins_over_discount'],
            'claims' => (double) $arr['claims'],
            'nonrp_discount' => (double) $arr['nonrp_discount'],
            'supplemental_coverage' => (double) $arr['supplemental_coverage'],
            'equipment' => (double) $arr['equipment'],
            'realestate' => (double) $arr['realestate'],
            'other' => (double) $arr['other']
        ];
    }
}