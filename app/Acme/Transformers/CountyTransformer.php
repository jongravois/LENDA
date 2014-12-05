<?php namespace Acme\Transformers;


class CountyTransformer extends Transformer {

	public function transform($arr)
	{
		return [
			'id'		=> $arr['id'],
			'county' 	=> $arr['county'],
			'state_id' 	=> $arr['state_id'],
			'label'		=> $arr['label'],
			'locale'	=> $arr['locale'],
			'corn_irr'	=>	[
					'price'	=>	(double) $arr['price_corn_irr'],
					'ins_price' => (double) $arr['insured_price_corn_irr'],
					'aph' => (double) $arr['yield_corn_irr']
				],
			'corn_ni' => [
				'price'	=>	(double) $arr['price_corn_ni'],
				'ins_price' => (double) $arr['insured_price_corn_ni'],
				'aph' => (double) $arr['yield_corn_ni']
			],
			'soybeans_irr'	=>	[
				'price'	=>	(double) $arr['price_soybeans_irr'],
				'ins_price' => (double) $arr['insured_price_soybeans_irr'],
				'aph' => (double) $arr['yield_soybeans_irr']
			],
			'soybeans_ni'	=>	[
				'price'	=>	(double) $arr['price_soybeans_ni'],
				'ins_price' => (double) $arr['insured_price_soybeans_ni'],
				'aph' => (double) $arr['yield_soybeans_ni']
			],
			'soybeans_faci'	=>	[
				'price'	=>	(double) $arr['price_soybeans_facirr'],
				'ins_price' => (double) $arr['insured_price_soybeans_facirr'],
				'aph' => (double) $arr['yield_soybeans_facirr']
			],
			'soybeans_facni'	=>	[
				'price'	=>	(double) $arr['price_soybeans_facni'],
				'ins_price' => (double) $arr['insured_price_soybeans_facni'],
				'aph' => (double) $arr['yield_soybeans_facni']
			],
			'sorghum_irr'	=>	[
				'price'	=>	(double) $arr['price_sorghum_irr'],
				'ins_price' => (double) $arr['insured_price_sorghum_irr'],
				'aph' => (double) $arr['yield_sorghum_irr']
			],
			'sorghum_ni'	=>	[
				'price'	=>	(double) $arr['price_sorghum_ni'],
				'ins_price' => (double) $arr['insured_price_sorghum_ni'],
				'aph' => (double) $arr['yield_sorghum_ni']
			],
			'wheat_irr'	=>	[
				'price'	=>	(double) $arr['price_wheat_irr'],
				'ins_price' => (double) $arr['insured_price_wheat_irr'],
				'aph' => (double) $arr['yield_wheat_irr']
			],
			'wheat_ni'	=>	[
				'price'	=>	(double) $arr['price_wheat_ni'],
				'ins_price' => (double) $arr['insured_price_wheat_ni'],
				'aph' => (double) $arr['yield_wheat_ni']
			],
			'cotton_irr'	=>	[
				'price'	=>	(double) $arr['price_cotton_irr'],
				'ins_price' => (double) $arr['insured_price_cotton_irr'],
				'aph' => (double) $arr['yield_cotton_irr']
			],
			'cotton_ni'	=>	[
				'price'	=>	(double) $arr['price_cotton_ni'],
				'ins_price' => (double) $arr['insured_price_cotton_ni'],
				'aph' => (double) $arr['yield_cotton_ni']
			],
			'rice_irr'	=>	[
				'price'	=>	(double) $arr['price_rice_irr'],
				'ins_price' => (double) $arr['insured_price_rice_irr'],
				'aph' => (double) $arr['yield_rice_irr']
			],
			'rice_ni'	=>	[
				'price'	=>	(double) $arr['price_rice_ni'],
				'ins_price' => (double) $arr['insured_price_rice_ni'],
				'aph' => (double) $arr['yield_rice_ni']
			],
			'peanuts_irr'	=>	[
				'price'	=>	(double) $arr['price_peanuts_irr'],
				'ins_price' => (double) $arr['insured_price_peanuts_irr'],
				'aph' => (double) $arr['yield_peanuts_irr']
			],
			'peanuts_ni'	=>	[
				'price'	=>	(double) $arr['price_peanuts_ni'],
				'ins_price' => (double) $arr['insured_price_peanuts_ni'],
				'aph' => (double) $arr['yield_peanuts_ni']
			],
			'sugarcane_irr'	=>	[
				'price'	=>	(double) $arr['price_sugarcane_irr'],
				'ins_price' => (double) $arr['insured_price_sugarcane_irr'],
				'aph' => (double) $arr['yield_sugarcane_irr']
			],
			'sugarcane_ni'	=>	[
				'price'	=>	(double) $arr['price_sugarcane_ni'],
				'ins_price' => (double) $arr['insured_price_sugarcane_ni'],
				'aph' => (double) $arr['yield_sugarcane_ni']
			]
		];
	}
}