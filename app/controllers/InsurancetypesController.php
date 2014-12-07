<?php

use Acme\Transformers\InsurancetypeTransformer;

class InsurancetypesController extends ApiController {

  protected $insurancetypeTransformer;

  function __construct(InsurancetypeTransformer $insurancetypeTransformer)
  {
    $this->insurancetypeTransformer = $insurancetypeTransformer;
  }

  public function index()
  {
    $insurancetypes = Insurancetype::all();

    return $this->respond([
      'data' => $this->insurancetypeTransformer->transformCollection($insurancetypes->all())
    ]);
  }

  public function show($id)
  {
    $insurancetype = Insurancetype::where('id', $id)->get();

    if( $insurancetype->isEmpty() ){
      return $this->respondNotFound('Insurancetype does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->insurancetypeTransformer->transform($insurancetype[0])
    ]);
  }

  public function store()
  {
    Insurancetype::create(Input::all());

    return $this->respondCreated('Insurancetype created.');
  }

  public function update($id)
  {
    $insurancetype = Insurancetype::find($id);

    if(!$insurancetype){
      Insurancetype::create(Input::all());
      return $this->respondCreated('Insurancetype created.');
    }

    $insurancetype->fill(Input::all())->save();

    return $this->respondCreated('Insurancetype updated.');
  }

  public function destroy($id)
  {
    return Insurancetype::where('id', $id)->delete();
  }
}