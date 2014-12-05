<?php namespace Acme\Transformers;

class CropexpensesTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'loan_id' => $arr['loan_id'],
			'crop_id' => $arr['crop_id'],
			'crop' => $arr['crop']['crop'],
			'crop_acres' => (double) $arr['crop_acres'],
			'fertilizer_arm_acre' => (double) $arr['fertilizer_arm_acre'],
			'fertilizer_dist_acre' => (double) $arr['fertilizer_dist_acre'],
			'fertilizer_other_acre' => (double) $arr['fertilizer_other_acre'],
			'seed_arm_acre' => (double) $arr['seed_arm_acre'],
			'seed_dist_acre' => (double) $arr['seed_dist_acre'],
			'seed_other_acre' => (double) $arr['seed_other_acre'],
			'fungicide_arm_acre' => (double) $arr['fungicide_arm_acre'],
			'fungicide_dist_acre' => (double) $arr['fungicide_dist_acre'],
			'fungicide_other_acre' => (double) $arr['fungicide_other_acre'],
			'herbicide_arm_acre' => (double) $arr['herbicide_arm_acre'],
			'herbicide_dist_acre' => (double) $arr['herbicide_dist_acre'],
			'herbicide_other_acre' => (double) $arr['herbicide_other_acre'],
			'insecticide_arm_acre' => (double) $arr['insecticide_arm_acre'],
			'insecticide_dist_acre' => (double) $arr['insecticide_dist_acre'],
			'insecticide_other_acre' => (double) $arr['insecticide_other_acre'],
			'custom_arm_acre' => (double) $arr['custom_arm_acre'],
			'custom_dist_acre' => (double) $arr['custom_dist_acre'],
			'custom_other_acre' => (double) $arr['custom_other_acre'],
			'fuel_arm_acre' => (double) $arr['fuel_arm_acre'],
			'fuel_dist_acre' => (double) $arr['fuel_dist_acre'],
			'fuel_other_acre' => (double) $arr['fuel_other_acre'],
			'labor_arm_acre' => (double) $arr['labor_arm_acre'],
			'labor_dist_acre' => (double) $arr['labor_dist_acre'],
			'labor_other_acre' => (double) $arr['labor_other_acre'],
			'repairs_arm_acre' => (double) $arr['repairs_arm_acre'],
			'repairs_dist_acre' => (double) $arr['repairs_dist_acre'],
			'repairs_other_acre' => (double) $arr['repairs_other_acre'],
			'insurance_arm_acre' => (double) $arr['insurance_arm_acre'],
			'insurance_dist_acre' => (double) $arr['insurance_dist_acre'],
			'insurance_other_acre' => (double) $arr['insurance_other_acre'],
			'harvesting_arm_acre' => (double) $arr['harvesting_arm_acre'],
			'harvesting_dist_acre' => (double) $arr['harvesting_dist_acre'],
			'harvesting_other_acre' => (double) $arr['harvesting_other_acre'],
			'misc_acre_arm_acre' => (double) $arr['misc_acre_arm_acre'],
			'misc_acre_dist_acre' => (double) $arr['misc_acre_dist_acre'],
			'misc_acre_other_acre' => (double) $arr['misc_acre_other_acre']
		];
	}
}