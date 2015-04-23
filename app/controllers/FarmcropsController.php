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
		$fcs = Farmcrops::with('farm', 'crop')->get();
		return $this->respond(
			$this->farmcropsTransformer->transformCollection($fcs->all())
		);
	}

	public function show($id)
	{
		$fcs = Farmcrops::with('farm', 'crop')->where('loan_id', $id)->get();

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
        $fcs = Farmcrops::with('farm', 'crop')->where('loan_id', $id)->get();

        if($fcs->isEmpty() ){
            return $this->respondNotFound('Loan does not exist.');
        } // end if

        return $this->respond([
            'data' => $this->farmcropsTransformer->transformCollection($fcs->all())
        ]);
    }

	public function acrop($crop_id, $loan_id){
		/*
		 SELECT c.crop, SUM(acres) AS Total_Acres, SUM(yield) AS Total_Yield, price, insured_price, bkqty, bkprice, harvest
FROM farmcrops AS f
JOIN crops AS c
ON f.crop_id = c.id
WHERE crop_year = 2015
AND `loan_id` = '1'
AND crop_id = 1
GROUP BY crop_year
		*/
		return Farmcrops::join('crops', 'crops.id', '=', 'farmcrops.crop_id')->where('crop_year', '2015')->where('loan_id', $loan_id)->where('crop_id', $crop_id)->get(['crops.crop', DB::raw('SUM(acres) AS Total_Acres'), DB::raw('SUM(yield) AS Total_Yield'), 'price', 'insured_price', 'bkqty', 'bkprice', 'harvest' ]);
	}

}