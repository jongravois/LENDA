<?php namespace Acme\Transformers;

class OthercollateralTransformer extends Transformer{

    public function transform($arr)
    {
        //return $arr;
        return [
            'id' => $arr['id'],
            'loan_id' => (integer) $arr['loan_id'],
            'source' => $arr['source'],
            'description' => $arr['description'],
            'amount' => (double) $arr['amount']
        ];
    }
}