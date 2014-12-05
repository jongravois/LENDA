<?php

use Acme\Transformers\LocationTransformer;

class LocationsController extends ApiController {

  protected $locationTransformer;

  function __construct(LocationTransformer $locationTransformer)
  {
    $this->locationTransformer = $locationTransformer;
  }

  public function index()
  {
    $locs = Location::with('manager', 'region')->get();
    return $this->respond([
      'data' => $this->locationTransformer->transformCollection($locs->all())
    ]);
  }

  public function store()
  {
    if( ! Input::get('location')){
      return $this->respondCreationDenied('Failed Validation');
    } // end if

    Location::create(Input::all());

    return $this->respondCreated('Location created');
  }

  public function show($id)
  {
    $loc = Location::with('manager', 'region')->where('id', $id)->get();

    if( $loc->isEmpty() ){
      return $this->respondNotFound('Location does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->locationTransformer->transform($loc[0])
    ]);
  }

  public function edit($id)
  {
    //
  }

  public function update($id)
  {
    $loc = Location::find($id);

    if(!$loc){
      Location::create(Input::all());
      return $this->respondCreated('Location Created');
    } // end if

    $loc->fill(Input::all())->save();

    return $this->respondCreated('Location updated.');
  }

  public function destroy($id)
  {
    return Location::where('id', $id)->delete();
  }

}