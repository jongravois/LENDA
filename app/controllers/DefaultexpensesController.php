<?php

use Acme\Transformers\DefaultexpensesTransformer;

class DefaultexpensesController extends ApiController {

  protected $defaultexpensesTransformer;

  function __construct(DefaultexpensesTransformer $defaultexpensesTransformer)
  {
    $this->defaultexpensesTransformer = $defaultexpensesTransformer;
  }

  public function index()
  {
    $defaultexpenses = Defaultexpenses::all();

    return $this->respond([
      'data' => $this->defaultexpensesTransformer->transformCollection($defaultexpenses->all())
    ]);
  }

  public function show($id)
  {
    $defaultexpense = Defaultexpenses::where('id', $id)->get();

    if( $defaultexpense->isEmpty() ){
      return $this->respondNotFound('Default Expense does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->defaultexpensesTransformer->transform($defaultexpense[0])
    ]);
  }

  public function store()
  {
    Defaultexpenses::create(Input::all());

    return $this->respondCreated('Default Expense created.');
  }

  public function update($id)
  {
    $defaultexpense = Defaultexpenses::find($id);

    if(!$defaultexpense){
      Defaultexpenses::create(Input::all());
      return $this->respondCreated('Default Expense created.');
    }

    $defaultexpense->fill(Input::all())->save();

    return $this->respondCreated('Default Expense updated.');
  }

  public function destroy($id)
  {
    return Defaultexpenses::where('id', $id)->delete();
  }

  public function byCrop($id)
  {
    $defaultexpenses = Defaultexpenses::where('crop_id', $id)->get();

    return $this->respond([
      'data' => $this->defaultexpensesTransformer->transformCollection($defaultexpenses->all())
    ]);
  }

  public function byLocation($id)
  {
      $defaultexpenses = Defaultexpenses::where('location_id', $id)->get();

      return $this->respond([
          'data' => $this->defaultexpensesTransformer->transformCollection($defaultexpenses->all())
      ]);
  }
}