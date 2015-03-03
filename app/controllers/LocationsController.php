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

  public function yieldByCounty($id)
  {
    $check = County::where('location_id', $id)->lists('id');
    if($check) {
      $co = Countycropdefault::whereIn('id', County::where('location_id', $id)->lists('id'))->get();
      return $this->respond([
        'data' => $co
      ]);
    } else {
      return [];
    }
  }

  public function byCounty($id)
  {
    $locs = Location::with('counties', 'manager', 'region')->where('id', $id)->get();
    return Response::json(['data' => $this->tform($locs)], 200);
  }

  private function tform($arr)
  {
    return array_map(function($arr)
    {
      //return $arr;
      return [
        'id' =>	$arr['id'],
        'location' => $arr['location'],
        'loc_abr' => $arr['loc_abr'],
        'region_id' => $arr['region_id'],
        'region' => $arr['region']['region'],
        'address' => $arr['address'],
        'city' => $arr['city'],
        'state' => $arr['state'],
        'zip' => $arr['zip'],
        'phone' => $arr['phone'],
        'manager_id' => $arr['manager_id'],
        'manager' => $arr['manager']['username'],
        'counties' => $arr['counties']
      ];
    }, $arr->all());
  }
}