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
    //TODO: Add validation
    $farmer = Farmer::where('email', Input::get('email'))->first();
    if($farmer){
      return $this->respondCreated($farmer->id);
    } // end if

    $arr = Input::all();
    $DOB = date("Y-m-d", strtotime($arr['dob']));
    $arr['dob'] = $DOB;
    $farmer = Farmer::create($arr);
    //Add systemic
    $newInfo = [
      'loan_id'	=>	Input::get('loan_id'),
      'user'		=>	Auth::user()->username,
      'action'	=>	'Created loan farmer'
    ];
    Systemics::create($newInfo);
    return $this->respondCreated($farmer->id);
  }

  public function update($id)
  {
    $farmer = Farmer::find($id);
    $farmer->fill(Input::all())->save();
  }
}