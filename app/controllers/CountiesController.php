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

	private function tform($county)
	{
		return array_map(function($county)
		{
			return [
				'id' => $county->id,
				'state_id' => $county->state_id,
				'county' => $county->county,
				'label' => $county->label,
				'locale' => $county->locale,
				'price_corn_irr' => (double) $county->price_corn_irr,
				'price_corn_ni'  => (double) $county->price_corn_ni,
				'insured_price_corn_irr' => (double) $county->insured_price_corn_irr,
				'insured_price_corn_ni' => (double) $county->insured_price_corn_ni,
				'yield_corn_irr' => (double) $county->yield_corn_irr,
				'yield_corn_ni' => (double) $county->yield_corn_ni,
				'price_soybeans_irr' => (double) $county->price_soybeans_irr,
				'price_soybeans_ni' => (double) $county->price_soybeans_ni,
				'price_soybeans_facirr' => (double) $county->price_soybeans_facirr,
				'price_soybeans_facni' => (double) $county->price_soybeans_facni,
				'insured_price_soybeans_irr' => (double) $county->insured_price_soybeans_irr,
				'insured_price_soybeans_ni' => (double) $county->insured_price_soybeans_ni,
				'insured_price_soybeans_facirr' => (double) $county->insured_price_soybeans_facirr,
				'insured_price_soybeans_facni' => (double) $county->insured_price_soybeans_facni,
				'yield_soybeans_irr' => (double) $county->yield_soybeans_irr,
				'yield_soybeans_ni' => (double) $county->yield_soybeans_ni,
				'yield_soybeans_facirr' => (double) $county->yield_soybeans_facirr,
				'yield_soybeans_facni' => (double) $county->yield_soybeans_facni,
				'price_sorghum_irr' => (double) $county->price_sorghum_irr,
				'price_sorghum_ni' => (double) $county->price_sorghum_ni,
				'insured_price_sorghum_irr' => (double) $county->insured_price_sorghum_irr,
				'insured_price_sorghum_ni' => (double) $county->insured_price_sorghum_ni,
				'yield_sorghum_irr' => (double) $county->yield_sorghum_irr,
				'yield_sorghum_ni' => (double) $county->yield_sorghum_ni,
				'price_wheat_irr' => (double) $county->price_wheat_irr,
				'price_wheat_ni' => (double) $county->price_wheat_ni,
				'insured_price_wheat_irr' => (double) $county->insured_price_wheat_irr,
				'insured_price_wheat_ni' => (double) $county->insured_price_wheat_ni,
				'yield_wheat_irr' => (double) $county->yield_wheat_irr,
				'yield_wheat_ni' => (double) $county->yield_wheat_ni,
				'price_cotton_irr' => (double) $county->price_cotton_irr,
				'price_cotton_ni' => (double) $county->price_cotton_ni,
				'insured_price_cotton_irr' => (double) $county->insured_price_cotton_irr,
				'insured_price_cotton_ni' => (double) $county->insured_price_cotton_ni,
				'yield_cotton_irr' => (double) $county->yield_cotton_irr,
				'yield_cotton_ni' => (double) $county->yield_cotton_ni,
				'price_rice_irr' => (double) $county->price_rice_irr,
				'price_rice_ni' => (double) $county->price_rice_ni,
				'insured_price_rice_irr' => (double) $county->insured_price_rice_irr,
				'insured_price_rice_ni' => (double) $county->insured_price_rice_ni,
				'yield_rice_irr' => (double) $county->yield_rice_irr,
				'yield_rice_ni' => (double) $county->yield_rice_ni,
				'price_peanuts_irr' => (double) $county->price_peanuts_irr,
				'price_peanuts_ni' => (double) $county->price_peanuts_ni,
				'insured_price_peanuts_irr' => (double) $county->insured_price_peanuts_irr,
				'insured_price_peanuts_ni' => (double) $county->insured_price_peanuts_ni,
				'yield_peanuts_irr' => (double) $county->yield_peanuts_irr,
				'yield_peanuts_ni' => (double) $county->yield_peanuts_ni,
				'price_sugarcane_irr' => (double) $county->price_sugarcane_irr,
				'price_sugarcane_ni' => (double) $county->price_sugarcane_ni,
				'insured_price_sugarcane_irr' => (double) $county->insured_price_sugarcane_irr,
				'insured_price_sugarcane_ni' => (double) $county->insured_price_sugarcane_ni,
				'yield_sugarcane_irr' => (double) $county->yield_sugarcane_irr,
				'yield_sugarcane_ni' => (double) $county->yield_sugarcane_ni
			];
		}, $county);
	}

}