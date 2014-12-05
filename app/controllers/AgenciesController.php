<?php

use Acme\Transformers\AgencyTransformer;
class AgenciesController extends ApiController {
  protected $agencyTransformer;

  function __construct(AgencyTransformer $agencyTransformer)
  {
    $this->agencyTransformer = $agencyTransformer;
  }

  public function index()
  {
    $ags = Agency::all();
    return $this->respond([
      'data' => $this->agencyTransformer->transformCollection($ags->all())
    ]);
  }

  public function store()
  {
    Agency::create(Input::all());

    return $this->respondCreated('Agency created');
  }

  public function show($id)
  {
    $agency = Agency::where('id', $id)->get();

    if( $agency->isEmpty() ){
      return $this->respondNotFound('Agency does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->agencyTransformer->transform($agency[0])
    ]);
  }

  public function edit($id)
  {
    //
  }

  public function update($id)
  {
    $agency = Agency::find($id);

    if(!$agency){
      Agency::create(Input::all());
      return $this->respondCreated('Agency Created');
    } // end if

    $agency->fill(Input::all())->save();

    return $this->respondCreated('Agency updated.');
  }

  public function destroy($id)
  {
    return Agency::where('id', $id)->delete();
  }

  public function byLoan($id)
  {
    $ags = Agency::where('loan_id', $id)->get();
    return $this->respond([
      'data' => $this->agencyTransformer->transformCollection($ags->all())
    ]);
  }
}