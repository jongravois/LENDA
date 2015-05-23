<?php

use Acme\Transformers\CropTransformer;
use Illuminate\Support\Facades\Input;

class CropController extends ApiController {

	protected $cropTransformer;

	function __construct(CropTransformer $cropTransformer)
	{
		$this->cropTransformer = $cropTransformer;
	}

	public function index()
	{
		$crops = Crop::orderBy('sort_order')->get();
		return $this->respond([
			'data' => $this->cropTransformer->transformCollection($crops->all())
		]);
	}

	public function store()
	{
		if( ! Input::get('crop')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if

		Crop::create(Input::all());

        return $this->respondCreated('Crop created');
	}

	public function show($id)
	{
		$crop = Crop::where('id', $id)->get();

		if( $crop->isEmpty() ){
			return $this->respondNotFound('Crop does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->cropTransformer->transform($crop[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$crop = Crop::find($id);

		if(!$crop){
			Crop::create(Input::all());
			return $this->respondCreated('Crop Created');
		} // end if

		$crop->fill(Input::all())->save();

		return $this->respondCreated('Crop updated.');
	}

	public function destroy($id)
	{
		return Crop::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$crops = Crop::where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->cropTransformer->transformCollection($crops->all())
		]);
	}

}