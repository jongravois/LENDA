<?php

use Acme\Transformers\FarmerTransformer;

class FarmersController extends ApiController {

  protected $farmerTransformer;

  function __construct(FarmerTransformer $farmerTransformer)
  {
    $this->farmerTransformer = $farmerTransformer;

    $this->beforeFilter('auth.basic', ['on'=>'post']);
  }

  public function index()
  {
    $farmers = Farmer::orderBy('farmer')->get();

    return $this->respond([
      'data' => $this->farmerTransformer->transformCollection($farmers->all())
    ]);
  }

  public function show($id)
  {
    $farmer = Farmer::where('id', $id)->get();

    if( $farmer->isEmpty() ){
      return $this->respondNotFound('Farmer does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->farmerTransformer->transform($farmer[0])
    ]);
  }

  public function store()
  {
    if( ! Input::get('farmer')){
      return $this->respondCreationDenied('Failed Validation');
    } // end if

    $farmer = Farmer::create(Input::all());

    return $this->respondCreated($farmer->id);
  }

  public function update($id)
  {
    $farmer = Farmer::find($id);
    $farmer->fill(Input::all())->save();
  }
}