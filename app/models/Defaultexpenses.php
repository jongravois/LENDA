<?php

class Defaultexpenses extends \Eloquent {
  public $timestamps = false;
  protected $fillable = ['crop_id', 'fertilizer_arm_acre', 'fertilizer_dist_acre', 'fertilizer_other_acre', 'seed_arm_acre', 'seed_dist_acre', 'seed_other_acre', 'fungicide_arm_acre', 'fungicide_dist_acre', 'fungicide_other_acre', 'herbicide_arm_acre', 'herbicide_dist_acre', 'herbicide_other_acre', 'insecticide_arm_acre', 'insecticide_dist_acre', 'insecticide_other_acre', 'custom_arm_acre', 'custom_dist_acre', 'custom_other_acre', 'fuel_arm_acre', 'fuel_dist_acre', 'fuel_other_acre', 'labor_arm_acre', 'labor_dist_acre', 'labor_other_acre', 'repairs_arm_acre', 'repairs_dist_acre', 'repairs_other_acre', 'insurance_arm_acre', 'insurance_dist_acre', 'insurance_other_acre', 'harvesting_arm_acre', 'harvesting_dist_acre', 'harvesting_other_acre', 'misc_arm_acre', 'misc_dist_acre', 'misc_other_acre'];
}