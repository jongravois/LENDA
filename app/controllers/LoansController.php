<?php

use Acme\Transformers\CommentTransformer;
use Acme\Transformers\LoanTransformer;
use Acme\Transformers\NotificationTransformer;

class LoansController extends ApiController {

	protected $loanTransformer;
  protected $notificationTransformer;
	protected $commentTransformer;

	function __construct(LoanTransformer $loanTransformer, NotificationTransformer $notificationTransformer, CommentTransformer $commentTransformer)
	{
		$this->loanTransformer = $loanTransformer;
    $this->notificationTransformer = $notificationTransformer;
		$this->commentTransformer = $commentTransformer;

		//$this->beforeFilter('auth.basic', ['on'=>'post']);
	}

	public function index()
	{
		$loans = Loan::with('applicants.entitytype', 'committee.user', 'corporations', 'comments.responses', 'comments.status', 'distributor', 'farmer', 'farms.county', 'financials', 'insurance', 'loancrop.crop', 'loanstatus', 'loantype.reqdocs',  'location', 'partners', 'regions', 'ventures', 'user')->where('applicant_id', '!=', 'null')->get();
		//return $loans;  //REMOVE THIS

		return $this->respond([
			'data' => $this->loanTransformer->transformCollection($loans->all())
		]);
	}

	public function show($id)
	{
		$loan = Loan::with('applicants.entitytype', 'committee.user', 'corporations', 'comments.responses', 'comments.status', 'distributor', 'farmer', 'farms.county', 'financials', 'insurance', 'loancrop.crop', 'loanstatus', 'loantype.reqdocs',  'location', 'partners', 'regions', 'ventures', 'user')->where('id', $id)->get();
		//return $loan;

		if( $loan->isEmpty() ){
			return $this->respondNotFound('Loan does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->loanTransformer->transform($loan[0])
		]);
	}

	public function store()
	{
		//TODO: Add authentication
		/*if( ! Input::get('loantype_id')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if*/

		$loan = Loan::create(Input::all());
		$newLoan = Loan::find($loan->id);

		//Add systemic
		$newInfo = [
			'loan_id'	=>	$loan->id,
			'user'		=>	Auth::user()->username,
			'action'	=>	'Created loan'
		];
		Systemics::create($newInfo);

		Loanfinancials::create(['loan_id' => $loan->id]);
		//Add systemic
		$newInfo = [
			'loan_id'	=>	$loan->id,
			'user'		=>	Auth::user()->username,
			'action'	=>	'Created loan financials'
		];
		Systemics::create($newInfo);

		Loanquestions::create(['loan_id' => $loan->id]);
		//Add systemic
		$newInfo = [
			'loan_id'	=>	$loan->id,
			'user'		=>	Auth::user()->username,
			'action'	=>	'Created loan questions'
		];
		Systemics::create($newInfo);

		return $this->respondCreated($newLoan);
	}

	public function update($id)
	{
		$loan = Loan::find($id);
		$loan->fill(Input::all())->save();
	}

	public function getAcreTotals($id)
	{
		$tots = DB::select( DB::raw("SELECT SUM(acres) as acres FROM farmcrops WHERE loan_id = {$id}") );
		return $tots;
	}

	public function getExtraCollaterals($id)
	{
		$tots = DB::select( DB::raw("SELECT SUM(rebates) as total_rebates, SUM(fsa_payment) as total_fsa_payment FROM loancrops WHERE loan_id = {$id}") );
		return $tots;
	}

  public function pendingVotes($id)
  {
    $pens = Notification::where('notification_type', 'vote')->where('loan_id', $id)->where('status', 'pending')->get();

    return $this->respond([
      'data' => $this->notificationTransformer->transformCollection($pens->all())
    ]);
  }
}