<?php namespace Acme\Transformers;

class SupplementalinsuranceTransformer extends Transformer{

    public function transform($arr)
    {
        //return $arr;
        return [
            'id' => (integer) $arr['id'],
            'loan_id' => (integer) $arr['loan_id'],
            'crop_id' => (integer) $arr['crop_id'],
            'county_id' => (integer) $arr['county_id'],
            'supplement' => $arr['supplement'],
            'harvest_price_exclusion' => (boolean) $arr['harvest_price_exclusion'],
            'aph' => (double) $arr['aph'],
            'level' => (double) $arr['level'],
            'price' => (double) $arr['price'],
            'loss_trigger' => (double) $arr['loss_trigger'],
            'desired_range' => (double) $arr['desired_range'],
            'range' => (double) $arr['range'],
            'protection_factor' => (double) $arr['protection_factor'],
            'expected_yield' => (double) $arr['expected_yield'],
            'expected_revenue' => (double) $arr['expected_revenue'],
            'max_indemnity' => (double) $arr['max_indemnity'],
            'acres' => (double) $arr['acres'],
            'share' => (double) $arr['share']
        ];
    }
}