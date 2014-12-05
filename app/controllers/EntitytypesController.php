<?php

use Acme\Transformers\EntitytypeTransformer;

class EntitytypesController extends ApiController {

	protected $entitytypeTransforer;

	function __construct(EntitytypeTransformer $entitytypeTransforer)
	{
		$this->entitytypeTransformer = $entitytypeTransforer;
	}

	public function index()
	{
		$types = Entitytype::all();
		return $this->respond([
			'data' => $this->entitytypeTransformer->transformCollection($types->all())
		]);
	}

	public function store()
	{
		if( ! Input::get('entitytype')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if

		Entitytype::create(Input::all());

		return $this->respondCreated('Entity Type created');
	}

	public function show($id)
	{
		$type = Entitytype::where('id', $id)->get();

		if( $type->isEmpty() ){
			return $this->respondNotFound('Entity type does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->entitytypeTransformer->transform($type[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$type = Entitytype::find($id);

		if(!$type){
			Entitytype::create(Input::all());
			return $this->respondCreated('Entity type Created');
		} // end if

		$type->fill(Input::all())->save();

		return $this->respondCreated('Entity type updated.');
	}

	public function destroy($id)
	{
		return Entitytype::where('id', $id)->delete();
	}

}