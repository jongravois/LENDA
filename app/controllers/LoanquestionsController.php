<?php

use Acme\Transformers\LoanquestionTransformer;
use Illuminate\Support\Facades\Input;

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
    $q = Loanquestions::create(Input::all());

    DB::table('loanfinancials')
      ->where('loan_id', $q->loan_id)
      ->update([
        'bankruptcy' => $q->bankruptcy,
        'judgements' => $q->judgements
      ]);

      if(Input::get('insInPlace') === 0)
      {
          DB::table('loans')
              ->where('id', $q->loan_id)
              ->update([
                  'its_list' => 1,
                  'fsa_compliant' => 1
              ]);
      } // end if

    return $this->respondCreated('Loan Questions created');
  }

  public function show($id)
  {
    $question = Loanquestions::where('id', $id)->get();

    if( $question->isEmpty() ){
      //create it
      $quests = new Loanquestions;
      $quests->loan_id = $id;
      $quests->save();
      return $this->respond([
        'data' => $this->loanquestionTransformer->transform($quests[0])
      ]);
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
      $q = Loanquestions::create(Input::all());

      DB::table('loanfinancials')
        ->where('loan_id', $q->loan_id)
        ->update([
          'bankruptcy' => $q->bankruptcy,
          'judgements' => $q->judgements
        ]);

      return $this->respondCreated('Loan Questions Created');
    } // end if

    $question->fill(Input::all())->save();

    DB::table('loanfinancials')
      ->where('loan_id', $question->loan_id)
      ->update([
        'bankruptcy' => $question->bankruptcy,
        'judgements' => $question->judgements
      ]);

    return $this->respondCreated('Loan Questions updated.');
  }

  public function destroy($id)
  {
    return Loanquestions::where('id', $id)->delete();
  }

  public function byLoan($id)
  {
    $quests = Loanquestions::where('loan_id', $id)->get();

    if( $quests->isEmpty() ){
      //create it
      $quests = new Loanquestions;
      $quests->loan_id = $id;
      $quests->save();
    } // end if

    return $this->respond([
      'data' => $this->loanquestionTransformer->transformCollection($quests->all())
    ]);
  }

}