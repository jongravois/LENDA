<?php

use Acme\Transformers\PdfAppTransformer;

class PdfAppsController extends ApiController {

  protected $pdfAppTransformer;

  function __construct(PdfAppTransformer $pdfAppTransformer)
  {
    $this->pdfAppTransformer = $pdfAppTransformer;
  }

  public function index()
  {
    $pdfApp = PdfApp::all();

    return $this->respond([
      'data' => $this->pdfAppTransformer->transformCollection($pdfApp->all())
    ]);
  }

  public function show($id)
  {
    $pdfApp = PdfApp::where('id', $id)->get();

    if( $pdfApp->isEmpty() ){
      return $this->respondNotFound('Application does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->pdfAppTransformer->transform($pdfApp[0])
    ]);
  }

  public function store()
  {
    PdfApp::create(Input::all());

    return $this->respondCreated('Application created.');
  }

  public function update($id)
  {
    $pdfApp = PdfApp::find($id);

    if(!$pdfApp){
      PdfApp::create(Input::all());
      return $this->respondCreated('Application created.');
    }

    $pdfApp->fill(Input::all())->save();

    return $this->respondCreated('Application updated.');
  }

  public function destroy($id)
  {
    return PdfApp::where('id', $id)->delete();
  }
}