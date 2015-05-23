<?php

class Defaultexpenses extends \Eloquent {
  public $timestamps = false;
  protected $fillable = ['region_id', 'location_id', 'crop_id', 'loancrop_id', 'cat_id', 'expense', 'arm', 'arm_adj', 'dist', 'dist_adj', 'other', 'other_adj'];
}