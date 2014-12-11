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
    $farmers = Farmer::with('state')->orderBy('farmer')->get();

    return $this->respond([
      'data' => $this->farmerTransformer->transformCollection($farmers->all())
    ]);
  }

  public function show($id)
  {
    $farmer = Farmer::with('state')->where('id', $id)->get();

    if( $farmer->isEmpty() ){
      return $this->respondNotFound('Farmer does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->farmerTransformer->transform($farmer[0])
    ]);
  }

  public function store()
  {
    if( ! Input::get('email')){
      return $this->respondCreationDenied('Failed Validation');
    } // end if

    // Insert into user table and get insert_id
    $user = User::firstOrCreate(
      [
        'email' => Input::get('email'),
        'password' => 'changeme'
      ]
    );

    // Add id to Input
    $arr = Input::all();
    $arr['user_id'] = $user->id;

    // Insert into farmer table
    $farmer = Farmer::create($arr);

    return $this->respondCreated($farmer->id);
  }

  public function update($id)
  {
    $farmer = Farmer::find($id);
    $farmer->fill(Input::all())->save();
  }
}