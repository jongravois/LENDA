<?php

use Acme\Transformers\PriorlienTransformer;

class PriorliensController extends ApiController {

	protected $priorlienTransformer;

	function __construct(PriorlienTransformer $priorlienTransformer)
	{
		$this->priorlienTransformer = $priorlienTransformer;
	}

	public function index()
	{
		$ps = Priorliens::all();
		return $this->respond([
			'data' => $this->priorlienTransformer->transformCollection($ps->all())
		]);
	}

	public function store()
	{
		Priorliens::create(Input::all());

		return $this->respondCreated('Priorlien created');
	}

	public function show($id)
	{
		$p = Priorliens::where('id', $id)->get();

		if( $p->isEmpty() ){
			return $this->respondNotFound('Priorlien does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->priorlienTransformer->transform($p[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$p = Priorliens::find($id);

		if(!$p){
			Priorliens::create(Input::all());
			return $this->respondCreated('Priorlien Created');
		} // end if

		$p->fill(Input::all())->save();

		return $this->respondCreated('Priorlien updated.');
	}

	public function destroy($id)
	{
		return Priorliens::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$ps = Priorliens::where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->priorlienTransformer->transformCollection($ps->all())
		]);
	}

}