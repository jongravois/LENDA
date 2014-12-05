<?php

use Acme\Transformers\AdmingraderTransformer;

class AdmingraderController extends ApiController {

	protected $admingraderTransformer;

	function __construct(AdmingraderTransformer $admingraderTransformer)
	{
		$this->admingraderTransformer = $admingraderTransformer;
	}

	public function index()
	{
		$grads = Admingrader::all();
		return $this->respond([
			'data' => $this->admingraderTransformer->transformCollection($grads->all())
		]);
	}

	public function store()
	{
		Admingrader::create(Input::all());

		return $this->respondCreated('Admin Grader created');
	}

	public function show($id)
	{
		$grad = Admingrader::where('id', $id)->get();

		if( $grad->isEmpty() ){
			return $this->respondNotFound('Admin Grader does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->admingraderTransformer->transform($grad[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$grad = Admingrader::find($id);

		if(!$grad){
			Admingrader::create(Input::all());
			return $this->respondCreated('Admin Grader Created');
		} // end if

		$grad->fill(Input::all())->save();

		return $this->respondCreated('Admin Grader updated.');
	}

	public function destroy($id)
	{
		return Admingrader::where('id', $id)->delete();
	}

}