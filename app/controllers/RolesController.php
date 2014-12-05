<?php

use Acme\Transformers\RoleTransformer;

class RolesController extends ApiController {

	protected $roleTransformer;

	function __construct(RoleTransformer $roleTransformer)
	{
		$this->roleTransformer = $roleTransformer;
	}

	public function index()
	{
		$roles = Role::all();

		return $this->respond([
			'data' => $this->roleTransformer->transformCollection($roles->all())
		]);
	}

	public function show($id)
	{
		$role = Role::where('id', $id)->get();

		if( $role->isEmpty() ){
			return $this->respondNotFound('Role does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->roleTransformer->transform($role[0])
		]);
	}

	public function store()
	{
		if( ! Role::get('role')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if

		Role::create(Input::all());

		return $this->respondCreated('Role created.');
	}

	public function update($id)
	{
		$role = Role::find($id);

		if(!$role){
			Role::create(Input::all());
			return $this->respondCreated('Role created.');
		}

		$role->fill(Input::all())->save();

		return $this->respondCreated('Role updated.');
	}

	public function destroy($id)
	{
		return Role::where('id', $id)->delete();
	}
}