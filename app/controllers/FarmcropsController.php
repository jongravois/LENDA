<?php

use Acme\Transformers\FarmcropsTransformer;
class FarmcropsController extends ApiController {

	protected $farmcropsTransformer;

	function __construct(FarmcropsTransformer $farmcropsTransformer)
	{
		$this->farmcropsTransformer = $farmcropsTransformer;
	}


	public function index()
	{
		$fcs = Farmcrops::with('farms', 'crops')->get();
		return $this->respond(
			$this->farmcropsTransformer->transformCollection($fcs->all())
		);
	}

	public function show($id)
	{
		$fcs = Farmcrops::with('farms', 'crops')->where('loan_id', $id)->get();

		if($fcs->isEmpty() ){
			return $this->respondNotFound('Loan does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->farmcropsTransformer->transformCollection($fcs->all())
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		//
	}

	public function destroy($id)
	{
		//
	}

    public function byLoan($id)
    {
        $fcs = Farmcrops::with('farms', 'crops')->where('loan_id', $id)->get();

        if($fcs->isEmpty() ){
            return $this->respond(['data' => []]);
        } // end if

        return $this->respond([
            'data' => $this->farmcropsTransformer->transformCollection($fcs->all())
        ]);
    }

	public function acrop($crop_id, $loan_id){
		return Farmcrops::join('crops', 'crops.id', '=', 'farmcrops.crop_id')->where('crop_year', '2015')->where('loan_id', $loan_id)->where('crop_id', $crop_id)->get(['crops.id', 'crops.crop', DB::raw('SUM(irr) AS irrigated'), DB::raw('SUM(ni) AS nonirrigated'), DB::raw('SUM(prod_yield) AS prodYield'), DB::raw('SUM(ins_yield) AS insYield'), 'prod_price', 'ins_price', 'bkqty', 'bkprice', 'harvest' ]);
	}

}