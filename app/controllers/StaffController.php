<?php

use Acme\Transformers\StaffTransformer;

class StaffController extends ApiController {

  protected $staffTransformer;

  function __construct(StaffTransformer $staffTransformer)
  {
    $this->staffTransformer = $staffTransformer;
  }

  public function index()
  {
    $staff = Staff::all();

    return $this->respond([
      'data' => $this->staffTransformer->transformCollection($staff->all())
    ]);
  }

  public function show($id)
  {
    $staffer = Staff::where('id', $id)->get();

    if( $staffer->isEmpty() ){
      return $this->respondNotFound('User does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->staffTransformer->transform($staffer[0])
    ]);
  }

  public function store()
  {
    if( ! Input::get('email')){
      return $this->respondCreationDenied('Failed Validation');
    } // end if

    User::create(Input::all());

    return $this->respondCreated('Staff created.');
  }

  public function update($id)
  {
    $staffer = Staff::find($id);

    if(!$staffer){
      Staff::create(Input::all());
      return $this->respondCreated('Staff created.');
    }

    $staffer->fill(Input::all())->save();

    return $this->respondCreated('Staff updated.');
  }

  public function destroy($id)
  {
    return Staff::where('id', $id)->delete();
  }
}