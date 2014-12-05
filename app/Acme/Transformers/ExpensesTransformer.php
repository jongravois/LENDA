<?php namespace Acme\Transformers;

class ExpensesTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'loan_id'	=>	(integer) $arr['loan_id'],
			'crop_id'	=>	(integer) $arr['crop_id'],
			'crop'		=>	$arr['crop']['crop'],
			'crop_acres' => (double) $arr['crop_acres'],
			'fertilizer' => [
				'acre_arm' => (double) $arr['fertilizer_arm_acre'],
				'acre_dist' => (double) $arr['fertilizer_dist_acre'],
				'acre_other' => (double) $arr['fertilizer_other_acre'],
				'acre_total' => (double) $arr['fertilizer_arm_acre'] + (double) $arr['fertilizer_dist_acre'] + (double) $arr['fertilizer_other_acre'],
				'loan_arm' => (double) $arr['fertilizer_arm_acre'] * (double) $arr['crop_acres'],
				'loan_dist' => (double) $arr['fertilizer_dist_acre'] * (double) $arr['crop_acres'],
				'loan_other' => (double) $arr['fertilizer_other_acre'] * (double) $arr['crop_acres'],
				'loan_total' => ((double) $arr['fertilizer_arm_acre'] + (double) $arr['fertilizer_dist_acre'] + (double) $arr['fertilizer_other_acre']) * (double) $arr['crop_acres']
			],
			'seed' =>	[
				'acre_arm' => (double) $arr['seed_arm_acre'],
				'acre_dist' => (double) $arr['seed_dist_acre'],
				'acre_other' => (double) $arr['seed_other_acre'],
				'acre_total' => (double) $arr['seed_arm_acre'] + (double) $arr['seed_dist_acre'] + (double) $arr['seed_other_acre'],
				'loan_arm' => (double) $arr['seed_arm_acre'] * (double) $arr['crop_acres'],
				'loan_dist' => (double) $arr['seed_dist_acre'] * (double) $arr['crop_acres'],
				'loan_other' => (double) $arr['seed_other_acre'] * (double) $arr['crop_acres'],
				'loan_total' => ((double) $arr['seed_arm_acre'] + (double) $arr['seed_dist_acre'] + (double) $arr['seed_other_acre']) * (double) $arr['crop_acres']
			],
			'fungicide' => [
				'acre_arm' => (double) $arr['fungicide_arm_acre'],
				'acre_dist' => (double) $arr['fungicide_dist_acre'],
				'acre_other' => (double) $arr['fungicide_other_acre'],
				'acre_total' => (double) $arr['fungicide_arm_acre'] + (double) $arr['fungicide_dist_acre'] + (double) $arr['fungicide_other_acre'],
				'loan_arm' => (double) $arr['fungicide_arm_acre'] * (double) $arr['crop_acres'],
				'loan_dist' => (double) $arr['fungicide_dist_acre'] * (double) $arr['crop_acres'],
				'loan_other' => (double) $arr['fungicide_other_acre'] * (double) $arr['crop_acres'],
				'loan_total' => ((double) $arr['fungicide_arm_acre'] + (double) $arr['fungicide_dist_acre'] + (double) $arr['fungicide_other_acre']) * (double) $arr['crop_acres']
			],
			'herbicide' =>	[
				'acre_arm' => (double) $arr['herbicide_arm_acre'],
				'acre_dist' => (double) $arr['herbicide_dist_acre'],
				'acre_other' => (double) $arr['herbicide_other_acre'],
				'acre_total' => (double) $arr['herbicide_arm_acre'] + (double) $arr['herbicide_dist_acre'] + (double) $arr['herbicide_other_acre'],
				'loan_arm' => (double) $arr['herbicide_arm_acre'] * (double) $arr['crop_acres'],
				'loan_dist' => (double) $arr['herbicide_dist_acre'] * (double) $arr['crop_acres'],
				'loan_other' => (double) $arr['herbicide_other_acre'] * (double) $arr['crop_acres'],
				'loan_total' => ((double) $arr['herbicide_arm_acre'] + (double) $arr['herbicide_dist_acre'] + (double) $arr['herbicide_other_acre']) * (double) $arr['crop_acres']
			],
			'insecticide' => [
				'acre_arm' => (double) $arr['insecticide_arm_acre'],
				'acre_dist' => (double) $arr['insecticide_dist_acre'],
				'acre_other' => (double) $arr['insecticide_other_acre'],
				'acre_total' => (double) $arr['insecticide_arm_acre'] + (double) $arr['insecticide_dist_acre'] + (double) $arr['insecticide_other_acre'],
				'loan_arm' => (double) $arr['insecticide_arm_acre'] * (double) $arr['crop_acres'],
				'loan_dist' => (double) $arr['insecticide_dist_acre'] * (double) $arr['crop_acres'],
				'loan_other' => (double) $arr['insecticide_other_acre'] * (double) $arr['crop_acres'],
				'loan_total' => ((double) $arr['insecticide_arm_acre'] + (double) $arr['insecticide_dist_acre'] + (double) $arr['insecticide_other_acre']) * (double) $arr['crop_acres']
			],
			'custom' => [
				'acre_arm' => (double) $arr['custom_arm_acre'],
				'acre_dist' => (double) $arr['custom_dist_acre'],
				'acre_other' => (double) $arr['custom_other_acre'],
				'acre_total' => (double) $arr['custom_arm_acre'] + (double) $arr['custom_dist_acre'] + (double) $arr['custom_other_acre'],
				'loan_arm' => (double) $arr['custom_arm_acre'] * (double) $arr['crop_acres'],
				'loan_dist' => (double) $arr['custom_dist_acre'] * (double) $arr['crop_acres'],
				'loan_other' => (double) $arr['custom_other_acre'] * (double) $arr['crop_acres'],
				'loan_total' => ((double) $arr['custom_arm_acre'] + (double) $arr['custom_dist_acre'] + (double) $arr['custom_other_acre']) * (double) $arr['crop_acres']
			],
			'fuel' => [
				'acre_arm' => (double) $arr['fuel_arm_acre'],
				'acre_dist' => (double) $arr['fuel_dist_acre'],
				'acre_other' => (double) $arr['fuel_other_acre'],
				'acre_total' => (double) $arr['fuel_arm_acre'] + (double) $arr['fuel_dist_acre'] + (double) $arr['fuel_other_acre'],
				'loan_arm' => (double) $arr['fuel_arm_acre'] * (double) $arr['crop_acres'],
				'loan_dist' => (double) $arr['fuel_dist_acre'] * (double) $arr['crop_acres'],
				'loan_other' => (double) $arr['fuel_other_acre'] * (double) $arr['crop_acres'],
				'loan_total' => ((double) $arr['fuel_arm_acre'] + (double) $arr['fuel_dist_acre'] + (double) $arr['fuel_other_acre']) * (double) $arr['crop_acres']
			],
			'labor' => [
				'acre_arm' => (double) $arr['labor_arm_acre'],
				'acre_dist' => (double) $arr['labor_dist_acre'],
				'acre_other' => (double) $arr['labor_other_acre'],
				'acre_total' => (double) $arr['labor_arm_acre'] + (double) $arr['labor_dist_acre'] + (double) $arr['labor_other_acre'],
				'loan_arm' => (double) $arr['labor_arm_acre'] * (double) $arr['crop_acres'],
				'loan_dist' => (double) $arr['labor_dist_acre'] * (double) $arr['crop_acres'],
				'loan_other' => (double) $arr['labor_other_acre'] * (double) $arr['crop_acres'],
				'loan_total' => ((double) $arr['labor_arm_acre'] + (double) $arr['labor_dist_acre'] + (double) $arr['labor_other_acre']) * (double) $arr['crop_acres']
			],
			'repairs' => [
				'acre_arm' => (double) $arr['repairs_arm_acre'],
				'acre_dist' => (double) $arr['repairs_dist_acre'],
				'acre_other' => (double) $arr['repairs_other_acre'],
				'acre_total' => (double) $arr['repairs_arm_acre'] + (double) $arr['repairs_dist_acre'] + (double) $arr['repairs_other_acre'],
				'loan_arm' => (double) $arr['repairs_arm_acre'] * (double) $arr['crop_acres'],
				'loan_dist' => (double) $arr['repairs_dist_acre'] * (double) $arr['crop_acres'],
				'loan_other' => (double) $arr['repairs_other_acre'] * (double) $arr['crop_acres'],
				'loan_total' => ((double) $arr['repairs_arm_acre'] + (double) $arr['repairs_dist_acre'] + (double) $arr['repairs_other_acre']) * (double) $arr['crop_acres']
			],
			'insurance' => [
				'acre_arm' => (double) $arr['insurance_arm_acre'],
				'acre_dist' => (double) $arr['insurance_dist_acre'],
				'acre_other' => (double) $arr['insurance_other_acre'],
				'acre_total' => (double) $arr['insurance_arm_acre'] + (double) $arr['insurance_dist_acre'] + (double) $arr['insurance_other_acre'],
				'loan_arm' => (double) $arr['insurance_arm_acre'] * (double) $arr['crop_acres'],
				'loan_dist' => (double) $arr['insurance_dist_acre'] * (double) $arr['crop_acres'],
				'loan_other' => (double) $arr['insurance_other_acre'] * (double) $arr['crop_acres'],
				'loan_total' => ((double) $arr['insurance_arm_acre'] + (double) $arr['insurance_dist_acre'] + (double) $arr['insurance_other_acre']) * (double) $arr['crop_acres']
			],
			'harvesting' => [
				'acre_arm' => (double) $arr['harvesting_arm_acre'],
				'acre_dist' => (double) $arr['harvesting_dist_acre'],
				'acre_other' => (double) $arr['harvesting_other_acre'],
				'acre_total' => (double) $arr['harvesting_arm_acre'] + (double) $arr['harvesting_dist_acre'] + (double) $arr['harvesting_other_acre'],
				'loan_arm' => (double) $arr['harvesting_arm_acre'] * (double) $arr['crop_acres'],
				'loan_dist' => (double) $arr['harvesting_dist_acre'] * (double) $arr['crop_acres'],
				'loan_other' => (double) $arr['harvesting_other_acre'] * (double) $arr['crop_acres'],
				'loan_total' => ((double) $arr['harvesting_arm_acre'] + (double) $arr['harvesting_dist_acre'] + (double) $arr['harvesting_other_acre']) * (double) $arr['crop_acres']
			],
			'misc_acre' => [
				'acre_arm' => (double) $arr['misc_acre_arm_acre'],
				'acre_dist' => (double) $arr['misc_acre_dist_acre'],
				'acre_other' => (double) $arr['misc_acre_other_acre'],
				'acre_total' => (double) $arr['misc_acre_arm_acre'] + (double) $arr['misc_acre_dist_acre'] + (double) $arr['misc_acre_other_acre'],
				'loan_arm' => (double) $arr['misc_acre_arm_acre'] * (double) $arr['crop_acres'],
				'loan_dist' => (double) $arr['misc_acre_dist_acre'] * (double) $arr['crop_acres'],
				'loan_other' => (double) $arr['misc_acre_other_acre'] * (double) $arr['crop_acres'],
				'loan_total' => ((double) $arr['misc_acre_arm_acre'] + (double) $arr['misc_acre_dist_acre'] + (double) $arr['misc_acre_other_acre']) * (double) $arr['crop_acres']
			],
			'total' => [
				'acre_arm' => (double) $arr['fertilizer_arm_acre'] + (double) $arr['seed_arm_acre'] + (double) $arr['fungicide_arm_acre'] + (double) $arr['herbicide_arm_acre'] + (double) $arr['insecticide_arm_acre'] + (double) $arr['custom_arm_acre'] + (double) $arr['fuel_arm_acre'] + (double) $arr['labor_arm_acre'] + (double) $arr['repairs_arm_acre'] + (double) $arr['insurance_arm_acre'] + (double) $arr['harvesting_arm_acre'] + $arr['misc_acre_arm_acre'],
				'acre_dist' => (double) $arr['fertilizer_dist_acre'] + (double) $arr['seed_dist_acre'] + (double) $arr['fungicide_dist_acre'] + (double) $arr['herbicide_dist_acre'] + (double) $arr['insecticide_dist_acre'] + (double) $arr['custom_dist_acre'] + (double) $arr['fuel_dist_acre'] + (double) $arr['labor_dist_acre'] + (double) $arr['repairs_dist_acre'] + (double) $arr['insurance_dist_acre'] + (double) $arr['harvesting_dist_acre'] + $arr['misc_acre_dist_acre'],
				'acre_other' => (double) $arr['fertilizer_other_acre'] + (double) $arr['seed_other_acre'] + (double) $arr['fungicide_other_acre'] + (double) $arr['herbicide_other_acre'] + (double) $arr['insecticide_other_acre'] + (double) $arr['custom_other_acre'] + (double) $arr['fuel_other_acre'] + (double) $arr['labor_other_acre'] + (double) $arr['repairs_other_acre'] + (double) $arr['insurance_other_acre'] + (double) $arr['harvesting_other_acre'] + $arr['misc_acre_other_acre'],
				'acre_total' => ((double) $arr['fertilizer_arm_acre'] + (double) $arr['seed_arm_acre'] + (double) $arr['fungicide_arm_acre'] + (double) $arr['herbicide_arm_acre'] + (double) $arr['insecticide_arm_acre'] + (double) $arr['custom_arm_acre'] + (double) $arr['fuel_arm_acre'] + (double) $arr['labor_arm_acre'] + (double) $arr['repairs_arm_acre'] + (double) $arr['insurance_arm_acre'] + (double) $arr['harvesting_arm_acre'] + $arr['misc_acre_arm_acre']) + ((double) $arr['fertilizer_dist_acre'] + (double) $arr['seed_dist_acre'] + (double) $arr['fungicide_dist_acre'] + (double) $arr['herbicide_dist_acre'] + (double) $arr['insecticide_dist_acre'] + (double) $arr['custom_dist_acre'] + (double) $arr['fuel_dist_acre'] + (double) $arr['labor_dist_acre'] + (double) $arr['repairs_dist_acre'] + (double) $arr['insurance_dist_acre'] + (double) $arr['harvesting_dist_acre'] + $arr['misc_acre_dist_acre'] + ((double) $arr['fertilizer_other_acre'] + (double) $arr['seed_other_acre'] + (double) $arr['fungicide_other_acre'] + (double) $arr['herbicide_other_acre'] + (double) $arr['insecticide_other_acre'] + (double) $arr['custom_other_acre'] + (double) $arr['fuel_other_acre'] + (double) $arr['labor_other_acre'] + (double) $arr['repairs_other_acre'] + (double) $arr['insurance_other_acre'] + (double) $arr['harvesting_other_acre'] + $arr['misc_acre_other_acre'])),
				'loan_arm' => ((double) $arr['fertilizer_arm_acre'] + (double) $arr['seed_arm_acre'] + (double) $arr['fungicide_arm_acre'] + (double) $arr['herbicide_arm_acre'] + (double) $arr['insecticide_arm_acre'] + (double) $arr['custom_arm_acre'] + (double) $arr['fuel_arm_acre'] + (double) $arr['labor_arm_acre'] + (double) $arr['repairs_arm_acre'] + (double) $arr['insurance_arm_acre'] + (double) $arr['harvesting_arm_acre'] + $arr['misc_acre_arm_acre']) * (double) $arr['crop_acres'],
				'loan_dist' => ((double) $arr['fertilizer_dist_acre'] + (double) $arr['seed_dist_acre'] + (double) $arr['fungicide_dist_acre'] + (double) $arr['herbicide_dist_acre'] + (double) $arr['insecticide_dist_acre'] + (double) $arr['custom_dist_acre'] + (double) $arr['fuel_dist_acre'] + (double) $arr['labor_dist_acre'] + (double) $arr['repairs_dist_acre'] + (double) $arr['insurance_dist_acre'] + (double) $arr['harvesting_dist_acre'] + $arr['misc_acre_dist_acre']) * (double) $arr['crop_acres'],
				'loan_other' => ((double) $arr['fertilizer_other_acre'] + (double) $arr['seed_other_acre'] + (double) $arr['fungicide_other_acre'] + (double) $arr['herbicide_other_acre'] + (double) $arr['insecticide_other_acre'] + (double) $arr['custom_other_acre'] + (double) $arr['fuel_other_acre'] + (double) $arr['labor_other_acre'] + (double) $arr['repairs_other_acre'] + (double) $arr['insurance_other_acre'] + (double) $arr['harvesting_other_acre'] + $arr['misc_acre_other_acre']) * (double) $arr['crop_acres'],
				'loan_total' => (((double) $arr['fertilizer_arm_acre'] + (double) $arr['seed_arm_acre'] + (double) $arr['fungicide_arm_acre'] + (double) $arr['herbicide_arm_acre'] + (double) $arr['insecticide_arm_acre'] + (double) $arr['custom_arm_acre'] + (double) $arr['fuel_arm_acre'] + (double) $arr['labor_arm_acre'] + (double) $arr['repairs_arm_acre'] + (double) $arr['insurance_arm_acre'] + (double) $arr['harvesting_arm_acre'] + $arr['misc_acre_arm_acre']) + ((double) $arr['fertilizer_dist_acre'] + (double) $arr['seed_dist_acre'] + (double) $arr['fungicide_dist_acre'] + (double) $arr['herbicide_dist_acre'] + (double) $arr['insecticide_dist_acre'] + (double) $arr['custom_dist_acre'] + (double) $arr['fuel_dist_acre'] + (double) $arr['labor_dist_acre'] + (double) $arr['repairs_dist_acre'] + (double) $arr['insurance_dist_acre'] + (double) $arr['harvesting_dist_acre'] + $arr['misc_acre_dist_acre'] + ((double) $arr['fertilizer_other_acre'] + (double) $arr['seed_other_acre'] + (double) $arr['fungicide_other_acre'] + (double) $arr['herbicide_other_acre'] + (double) $arr['insecticide_other_acre'] + (double) $arr['custom_other_acre'] + (double) $arr['fuel_other_acre'] + (double) $arr['labor_other_acre'] + (double) $arr['repairs_other_acre'] + (double) $arr['insurance_other_acre'] + (double) $arr['harvesting_other_acre'] + $arr['misc_acre_other_acre']))) * (double) $arr['crop_acres']
			]
		];
	}
}