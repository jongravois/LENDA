<?php

use Acme\Transformers\GlobalTransformer;

class GlobalsController extends ApiController {

  protected $globalTransformer;

  function __construct(GlobalTransformer $globalTransformer)
  {
    $this->globalTransformer = $globalTransformer;
  }

  public function index()
  {
    $globals = Globals::all();

    return $this->respond([
      'data' => $this->globalTransformer->transformCollection($globals->all())
    ]);
  }

  public function show($id)
  {
    $global = Globals::where('id', $id)->get();

    if( $global->isEmpty() ){
      return $this->respondNotFound('Global does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->globalTransformer->transform($global[0])
    ]);
  }

  public function store()
  {
    Globals::create(Input::all());

    return $this->respondCreated('Global created.');
  }

  public function update($id)
  {
    $global = Globals::find($id);

    if(!$global){
      Globals::create(Input::all());
      return $this->respondCreated('Global created.');
    }

    $global->fill(Input::all())->save();

    return $this->respondCreated('Global updated.');
  }

  public function destroy($id)
  {
    return Globals::where('id', $id)->delete();
  }
}