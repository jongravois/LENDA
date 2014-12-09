<?php

use Acme\Transformers\LoanquestionTransformer;

class LoanquestionsController extends ApiController {

  protected $loanquestionTransformer;

  function __construct(LoanquestionTransformer $loanquestionTransformer)
  {
    $this->loanquestionTransformer = $loanquestionTransformer;
  }

  public function index()
  {
    $questions = Loanquestions::all();
    return $this->respond([
      'data' => $this->loanquestionTransformer->transformCollection($questions->all())
    ]);
  }

  public function store()
  {
    Loanquestions::create(Input::all());

    return $this->respondCreated('Loan Question created');
  }

  public function show($id)
  {
    $question = Loanquestions::where('id', $id)->get();

    if( $question->isEmpty() ){
      return $this->respondNotFound('Loan Question does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->loanquestionTransformer->transform($question[0])
    ]);
  }

  public function edit($id)
  {
    //
  }

  public function update($id)
  {
    $question = Loanquestions::find($id);

    if(!$question){
      Loanquestions::create(Input::all());
      return $this->respondCreated('Loan Question Created');
    } // end if

    $question->fill(Input::all())->save();

    return $this->respondCreated('Loan Question updated.');
  }

  public function destroy($id)
  {
    return Loanquestions::where('id', $id)->delete();
  }

  public function byLoan($id)
  {
    $questions = Loanquestions::where('loan_id', $id)->get();
    return $this->respond([
      'data' => $this->loanquestionTransformer->transformCollection($questions->all())
    ]);
  }

}