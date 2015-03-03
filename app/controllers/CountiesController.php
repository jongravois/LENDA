<?php

use Acme\Transformers\CountyTransformer;

class CountiesController extends ApiController {
	protected $countyTransformer;

	function __construct(CountyTransformer $countyTransformer)
		{
			$this->countyTransformer = $countyTransformer;
		}

	public function index()
		{
			$counties = DB::table('counties')->select('id', 'state_id', 'location_id', 'county', 'label', 'locale')->get();

			return $counties;
		}

	public function show($id)
		{
			$county = County::where('id', $id)->get();

			if( $county->isEmpty()){
				return $this->respondNotFound('County does not exist.');
			} // end if

			return $this->respond([
				'data' => $this->countyTransformer->transform($county[0])
			]);
		}

	public function farmCounties($id)
		{
			$co = County::whereHas('farms', function($query) use ($id){
				$query->where('loan_id', $id);
			})->get();
			return $co;
		}

	public function getDefaults($id)
	{
		$defs = Countycropdefault::where('county_id', $id)->get();
		//return $defs;
		return array_map(function($defs)
		{
			return [
				[],
				[
					[
						'price' => 0,
						'ins_price' => 0,
						'aph' => (double) 0
					],
					[
						'price' => (double) $defs->price_corn_irr,
						'ins_price' => (double) $defs->insured_price_corn_irr,
						'aph' => (double) $defs->yield_corn_irr
					],
					[
						'price' => (double) $defs->price_corn_ni,
						'ins_price' => (double) $defs->insured_price_corn_ni,
						'aph' => (double) $defs->yield_corn_ni
					]
				],
				[
					[
						'price' => 0,
						'ins_price' => 0,
						'aph' => 0
					],
					[
						'price' => (double) $defs->price_soybeans_irr,
						'ins_price' => (double) $defs->insured_price_soybeans_irr,
						'aph' => (double) $defs->yield_soybeans_irr
					],
					[
						'price' => (double) $defs->price_soybeans_ni,
						'ins_price' => (double) $defs->insured_price_soybeans_ni,
						'aph' => (double) $defs->yield_soybeans_ni
					]
				],
				[
					[
						'price' => 0,
						'ins_price' => 0,
						'aph' => 0
					],
					[
						'price' => (double) $defs->price_sorghum_irr,
						'ins_price' => (double) $defs->insured_price_sorghum_irr,
						'aph' => (double) $defs->yield_sorghum_irr
					],
					[
						'price' => (double) $defs->price_sorghum_ni,
						'ins_price' => (double) $defs->insured_price_sorghum_ni,
						'aph' => (double) $defs->yield_sorghum_ni
					]
				],
				[
					[
						'price' => 0,
						'ins_price' => 0,
						'aph' => 0
					],
					[
						'price' => (double) $defs->price_wheat_irr,
						'ins_price' => (double) $defs->insured_price_wheat_irr,
						'aph' => (double) $defs->yield_wheat_irr
					],
					[
						'price' => (double) $defs->price_wheat_ni,
						'ins_price' => (double) $defs->insured_price_wheat_ni,
						'aph' => (double) $defs->yield_wheat_ni
					]
				],
				[
					[
						'price' => 0,
						'ins_price' => 0,
						'aph' => 0
					],
					[
						'price' => (double) $defs->price_cotton_irr,
						'ins_price' => (double) $defs->insured_price_cotton_irr,
						'aph' => (double) $defs->yield_cotton_irr
					],
					[
						'price' => (double) $defs->price_cotton_ni,
						'ins_price' => (double) $defs->insured_price_cotton_ni,
						'aph' => (double) $defs->yield_cotton_ni
					]
				],
				[
					[
						'price' => 0,
						'ins_price' => 0,
						'aph' => 0
					],
					[
						'price' => (double) $defs->price_rice_irr,
						'ins_price' => (double) $defs->insured_price_rice_irr,
						'aph' => (double) $defs->yield_rice_irr
					],
					[
						'price' => (double) $defs->price_rice_ni,
						'ins_price' => (double) $defs->insured_price_rice_ni,
						'aph' => (double) $defs->yield_rice_ni
					]
				],
				[
					[
						'price' => 0,
						'ins_price' => 0,
						'aph' => 0
					],
					[
						'price' => (double) $defs->price_peanuts_irr,
						'ins_price' => (double) $defs->insured_price_peanuts_irr,
						'aph' => (double) $defs->yield_peanuts_irr
					],
					[
						'price' => (double) $defs->price_peanuts_ni,
						'ins_price' => (double) $defs->insured_price_peanuts_ni,
						'aph' => (double) $defs->yield_peanuts_ni
					]
				],
				[
					[
						'price' => 0,
						'ins_price' => 0,
						'aph' => 0
					],
					[
						'price' => (double) $defs->price_sugarcane_irr,
						'ins_price' => (double) $defs->insured_price_sugarcane_irr,
						'aph' => (double) $defs->yield_sugarcane_irr
					],
					[
						'price' => (double) $defs->price_sugarcane_ni,
						'ins_price' => (double) $defs->insured_price_sugarcane_ni,
						'aph' => (double) $defs->yield_sugarcane_ni
					]
				]
			];
		}, $defs->all());
	}

	public function getLocale($id)
	{
		return County::where('id', $id)->get(['locale']);
	}

	public function byLoan($id)
	{
		/*
		SELECT * FROM counties WHERE id IN (SELECT DISTINCT(county_id) FROM farms WHERE loan_id = {$id}
		 */
		$counties = DB::table('counties')->whereIn('id', function($query) use (&$id)
		{
			$query->select(DB::raw("DISTINCT(county_id)"))
				->from('farms')
				->whereRaw('loan_id = ' . $id);
		})->get();

		return Response::json(['data' => $this->tform($counties)], 200);
	}

	public function byState($stateID)
	{
		$counties = County::where('state_id', $stateID)->get();
		$res = ['data' => $counties];
		return $res;
	}

	private function tform($county)
	{
		return array_map(function($county)
		{
			return [
				'id' => $county->id,
				'state_id' => $county->state_id,
				'county' => $county->county,
				'label' => $county->label,
				'locale' => $county->locale
				/*,
				'price_corn_ir' => (double) $county->price_corn_ir,
				'price_corn_ni'  => (double) $county->price_corn_ni,
				'insured_price_corn_ir' => (double) $county->insured_price_corn_ir,
				'insured_price_corn_ni' => (double) $county->insured_price_corn_ni,
				'yield_corn_ir' => (double) $county->yield_corn_ir,
				'yield_corn_ni' => (double) $county->yield_corn_ni,
				'price_soybeans_ir' => (double) $county->price_soybeans_ir,
				'price_soybeans_ni' => (double) $county->price_soybeans_ni,
				'price_soybeans_facir' => (double) $county->price_soybeans_facir,
				'price_soybeans_facni' => (double) $county->price_soybeans_facni,
				'insured_price_soybeans_ir' => (double) $county->insured_price_soybeans_ir,
				'insured_price_soybeans_ni' => (double) $county->insured_price_soybeans_ni,
				'insured_price_soybeans_facir' => (double) $county->insured_price_soybeans_facir,
				'insured_price_soybeans_facni' => (double) $county->insured_price_soybeans_facni,
				'yield_soybeans_ir' => (double) $county->yield_soybeans_ir,
				'yield_soybeans_ni' => (double) $county->yield_soybeans_ni,
				'yield_soybeans_facir' => (double) $county->yield_soybeans_facir,
				'yield_soybeans_facni' => (double) $county->yield_soybeans_facni,
				'price_sorghum_ir' => (double) $county->price_sorghum_ir,
				'price_sorghum_ni' => (double) $county->price_sorghum_ni,
				'insured_price_sorghum_ir' => (double) $county->insured_price_sorghum_ir,
				'insured_price_sorghum_ni' => (double) $county->insured_price_sorghum_ni,
				'yield_sorghum_ir' => (double) $county->yield_sorghum_ir,
				'yield_sorghum_ni' => (double) $county->yield_sorghum_ni,
				'price_wheat_ir' => (double) $county->price_wheat_ir,
				'price_wheat_ni' => (double) $county->price_wheat_ni,
				'insured_price_wheat_ir' => (double) $county->insured_price_wheat_ir,
				'insured_price_wheat_ni' => (double) $county->insured_price_wheat_ni,
				'yield_wheat_ir' => (double) $county->yield_wheat_ir,
				'yield_wheat_ni' => (double) $county->yield_wheat_ni,
				'price_cotton_ir' => (double) $county->price_cotton_ir,
				'price_cotton_ni' => (double) $county->price_cotton_ni,
				'insured_price_cotton_ir' => (double) $county->insured_price_cotton_ir,
				'insured_price_cotton_ni' => (double) $county->insured_price_cotton_ni,
				'yield_cotton_ir' => (double) $county->yield_cotton_ir,
				'yield_cotton_ni' => (double) $county->yield_cotton_ni,
				'price_rice_ir' => (double) $county->price_rice_ir,
				'price_rice_ni' => (double) $county->price_rice_ni,
				'insured_price_rice_ir' => (double) $county->insured_price_rice_ir,
				'insured_price_rice_ni' => (double) $county->insured_price_rice_ni,
				'yield_rice_ir' => (double) $county->yield_rice_ir,
				'yield_rice_ni' => (double) $county->yield_rice_ni,
				'price_peanuts_ir' => (double) $county->price_peanuts_ir,
				'price_peanuts_ni' => (double) $county->price_peanuts_ni,
				'insured_price_peanuts_ir' => (double) $county->insured_price_peanuts_ir,
				'insured_price_peanuts_ni' => (double) $county->insured_price_peanuts_ni,
				'yield_peanuts_ir' => (double) $county->yield_peanuts_ir,
				'yield_peanuts_ni' => (double) $county->yield_peanuts_ni,
				'price_sugarcane_ir' => (double) $county->price_sugarcane_ir,
				'price_sugarcane_ni' => (double) $county->price_sugarcane_ni,
				'insured_price_sugarcane_ir' => (double) $county->insured_price_sugarcane_ir,
				'insured_price_sugarcane_ni' => (double) $county->insured_price_sugarcane_ni,
				'yield_sugarcane_ir' => (double) $county->yield_sugarcane_ir,
				'yield_sugarcane_ni' => (double) $county->yield_sugarcane_ni
				*/
			];
		}, $county);
	}
}