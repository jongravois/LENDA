<?php namespace Acme\Transformers;

class DefaultexpensesTransformer extends Transformer
{

  public function transform($arr)
  {
    //return $arr;
    return [
        'id' => (integer)$arr['id'],
        'location_id' => (double)$arr['location_id'],
        'crop_id' => (double)$arr['crop_id'],
        'loancrop_id' => (double)$arr['loancrop_id'],
        'cat_id' => (double)$arr['cat_id'],
        'expense' => (double)$arr['expense'],
        'arm' => (double)$arr['arm'],
        'arm_adj' => (double)$arr['arm_adj'],
        'dist' => (double)$arr['dist'],
        'dist_adj' => (double)$arr['dist_adj'],
        'other' => (double)$arr['other'],
        'other_adj' => (double)$arr['other_adj']
    ];
  }
}