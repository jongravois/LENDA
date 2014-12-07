<?php

use Acme\Transformers\ScreenTransformer;

class ScreensController extends ApiController {

  protected $screenTransformer;

  function __construct(ScreenTransformer $screenTransformer)
  {
    $this->screenTransformer = $screenTransformer;
  }

  public function index()
  {
    $ps = Screen::all();
    return $this->respond([
      'data' => $this->screenTransformer->transformCollection($ps->all())
    ]);
  }

  public function store()
  {
    Screen::create(Input::all());

    return $this->respondCreated('Screen created');
  }

  public function show($id)
  {
    $p = Screen::where('id', $id)->get();

    if( $p->isEmpty() ){
      return $this->respondNotFound('Screen does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->screenTransformer->transform($p[0])
    ]);
  }

  public function edit($id)
  {
    //
  }

  public function update($id)
  {
    $p = Screens::find($id);

    if(!$p){
      Screen::create(Input::all());
      return $this->respondCreated('Screen Created');
    } // end if

    $p->fill(Input::all())->save();

    return $this->respondCreated('Screen updated.');
  }

  public function destroy($id)
  {
    return Screen::where('id', $id)->delete();
  }

  public function byLoantype($id)
  {
    $ps = Screen::where('loantype_id', $id)->orderBy('sort_order')->get();
    return $this->respond([
      'data' => $this->screenTransformer->transformCollection($ps->all())
    ]);
  }

}