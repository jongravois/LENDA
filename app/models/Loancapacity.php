<?php

class Loancapacity extends \Eloquent {
	protected $table = 'loancapacity';
	protected $fillable = ['loan_id', 'year_1_revenue', 'year_1_expenses', 'year_2_revenue', 'year_2_expenses', 'year_3_revenue', 'year_3_expenses', 'current_asset', 'current_discount', 'current_liability', 'intermediate_asset', 'intermediate_discount', 'intermediate_liability', 'fixed_asset', 'fixed_discount', 'fixed_liability', 'corn_acres', 'soybean_acres', 'sorghum_acres', 'wheat_acres', 'cotton_acres', 'rice_acres', 'peanut_acres', 'sugarcane_acres'];
}