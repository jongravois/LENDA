<?php namespace Acme\Transformers;

class StakeholderTransformer extends Transformer
{

    public function transform($arr)
    {
        //return $arr;
        return array(
            'id' => $arr['id'],
            'loan_id' => $arr['loan_id'],
            'stakeholder' => $arr['stakeholder'],
            'role' => $arr['loan_role'],
            'ssn' => $arr['ssn'],
            'email' => $arr['email'],
            'address' => $arr['address'],
            'city' => $arr['city'],
            'state' => $arr['state'],
            'zip' => $arr['zip'],
            'phone' => $arr['phone'],
            'other' => $arr['other'],
            'president' => $arr['president'],
            'vicepresident' => $arr['vicepresident'],
            'secretary' => $arr['secretary'],
            'treasurer' => $arr['treasurer']
        );
    }
}