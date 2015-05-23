<?php namespace Acme\Transformers;

class CropTransformer extends Transformer
{

    public function transform($arr)
    {
        //return $arr;
        return [
            'id' => (integer)$arr['id'],
            'crop' => $arr['crop'],
            'name' => $arr['name'],
            'sort_order' => $arr['sort_order'],
            'tea' => $arr['tea'],
            'arm_default_price' => (double)$arr['arm_default_price'],
            'arm_default_ins_price' => (double)$arr['arm_default_ins_price'],
            'arm_default_yield' => (double)$arr['arm_default_yield'],
            'measurement' => $arr['measurement'],
            'rebate_measurement' => $arr['rebate_measurement']
        ];
    }
}