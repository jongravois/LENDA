<?php

use Acme\Transformers\GuarantorTransformer;
class GuarantorController extends ApiController {
  protected $guarantorTransformer;

  function __construct(GuarantorTransformer $guarantorTransformer)
  {
    $this->guarantorTransformer = $guarantorTransformer;
  }

  public function index()
  {
    $guarantors = Guarantor::all();
    return $this->respond([
      'data' => $this->guarantorTransformer->transformCollection($guarantors->all())
    ]);
  }

  public function store()
  {
    Guarantor::create(Input::all());

    return $this->respondCreated('Guarantor created');
  }

  public function show($id)
  {
    $guarantor = Guarantor::where('id', $id)->get();

    if( $guarantor->isEmpty() ){
      return $this->respondNotFound('Guarantor does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->guarantorTransformer->transform($guarantor[0])
    ]);
  }

  public function edit($id)
  {
    //
  }

  public function update($id)
  {
    $guarantor = Guarantor::find($id);

    if(!$guarantor){
      Guarantor::create(Input::all());
      return $this->respondCreated('Guarantor Created');
    } // end if

    $guarantor->fill(Input::all())->save();

    return $this->respondCreated('Guarantor updated.');
  }

  public function destroy($id)
  {
    return Guarantor::where('id', $id)->delete();
  }

  public function byLoan($id)
  {
    $guarantors = Guarantor::where('loan_id', $id)->get();
    return $this->respond([
      'data' => $this->guarantorTransformer->transformCollection($guarantors->all())
    ]);
  }
}