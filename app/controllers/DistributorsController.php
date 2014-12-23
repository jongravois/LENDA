<?php

use Acme\Transformers\DistributorTransformer;
class DistributorsController extends ApiController {
  protected $distributorTransformer;

  function __construct(DistributorTransformer $distributorTransformer)
  {
    $this->distributorTransformer = $distributorTransformer;
  }

  public function index()
  {
    $distributors = Distributor::with('state')->get();
    return $this->respond([
      'data' => $this->distributorTransformer->transformCollection($distributors->all())
    ]);
  }

  public function store()
  {
    //TODO: Add validation
    $distributor = Distributor::where('distributor', Input::get('distributor'))->first();
    if($distributor){
      return $this->respondCreated($distributor->id);
    } // end if

    $distributor = Distributor::create(Input::all());

    //Add systemic
    $newInfo = [
      'loan_id'	=>	Input::get('loan_id'),
      'user'		=>	Auth::user()->username,
      'action'	=>	'Created distributor'
    ];
    Systemics::create($newInfo);

    return $this->respondCreated($distributor->id);
  }

  public function show($id)
  {
    $distributor = Distributor::with('state')->where('id', $id)->get();

    if( $distributor->isEmpty() ){
      return $this->respondNotFound('Distributor does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->distributorTransformer->transform($distributor[0])
    ]);
  }

  public function edit($id)
  {
    //
  }

  public function update($id)
  {
    $distributor = Distributor::find($id);

    if(!$distributor){
      Distributor::create(Input::all());
      return $this->respondCreated('Distributor Created');
    } // end if

    $distributor->fill(Input::all())->save();

    return $this->respondCreated('Distributor updated.');
  }

  public function destroy($id)
  {
    return Distributor::where('id', $id)->delete();
  }

  public function byLoan($id)
  {
    $distributors = Distributor::with('state')->where('loan_id', $id)->get();
    return $this->respond([
      'data' => $this->distributorTransformer->transformCollection($distributors->all())
    ]);
  }
}