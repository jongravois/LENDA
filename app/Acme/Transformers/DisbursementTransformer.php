<?php namespace Acme\Transformers;

class DisbursementTransformer extends Transformer{

    public function transform($arr)
    {
        //return $arr;
        return [
            'id' =>	(integer) $arr['id'],
            'loan_id' => $arr['loan_id'],
            'crop_year' => $arr['crop_year'],
            'cat_id' => (integer) $arr['cat_id'],
            'expense' => $arr['expense'],
            'arm_budget' => (double)$arr['arm_budget'],
            'spent' => (double)$arr['spent'],
            'requested' => (double)$arr['requested'],
            'status' => $arr['status']
        ];
    }
}