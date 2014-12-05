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
    $distributors = Distributor::all();
    return $this->respond([
      'data' => $this->distributorTransformer->transformCollection($distributors->all())
    ]);
  }

  public function store()
  {
    Distributor::create(Input::all());

    return $this->respondCreated('Distributor created');
  }

  public function show($id)
  {
    $distributor = Distributor::where('id', $id)->get();

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
    $distributors = Distributor::where('loan_id', $id)->get();
    return $this->respond([
      'data' => $this->distributorTransformer->transformCollection($distributors->all())
    ]);
  }
}