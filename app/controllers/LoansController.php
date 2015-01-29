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
		//USED BY LoansFactory
		$loan = Loan::with('loanstatus', 'loantype', 'location', 'regions', 'user')->where('id', $id)->get();
		//return $loan;

		if( $loan->isEmpty() ){
			return $this->respondNotFound('Loan does not exist.');
		} // end if

		return Response::json(['data' => $this->tform($loan)], 200);
	}

	public function store()
	{
		//TODO: Add validation
		/*if( ! Input::get('loantype_id')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if*/

		$crop_year = Globals::pluck('crop_year');

		$loan = Loan::create(Input::all());
		$newLoan = Loan::find($loan->id);

		$path = public_path('files_loans/') . $crop_year . '_' . $loan->id;
		if(!File::exists($path)) {
			$result = File::makeDirectory($path, 0775);
		}

		//TODO: Add file_url to $scope.loans -- LOOK AT STAPLER
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

		for($l=1; $l<9; $l++){
			$newCrop = [
				'crop_year' => getCropYear(),
				'loan_id' => $loan->id,
				'crop_id' => $l
			];
			Loancrop::create($newCrop);
		} // end for

		return $this->respondCreated($newLoan);
	}

	public function update($id)
	{
		$loan = Loan::find($id);
		$loan->fill(Input::all())->save();

		$newInfo = [
			'loan_id'	=>	$loan->id,
			'user'		=>	Auth::user()->username,
			'action'	=>	'Updated loan'
		];
		Systemics::create($newInfo);
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

	public function attachments($id)
	{
		$loan = Loan::find($id);
		$filePath = public_path('files_loans/' . $loan->crop_year . '_' . $loan->id);
		$files = array_diff(scandir($filePath), array('..', '.'));
		return $files;
	}

	private function tform($arr)
	{
		return array_map(function($arr)
		{
			$appDate = $arr['app_date'];
			$dueDate = $arr['due_date'];
			$diff = $dueDate->diffInDays($appDate);

			return [
				'id'		=>	$arr['id'],
				'app_date'	=> 	$arr['app_date']->format('m/d/Y'),
				'decision_date'	=> 	($arr['decision_date'] ? $arr['decision_date']->format('m/d/Y') : null),
				'distributor_approval_date'	=> 	($arr['distributor_approval_date'] ? $arr['distributor_approval_date']->format('m/d/Y') : null),
				'due_date'	=>	$arr['due_date']->format('m/d/Y'),
				'loan_days' =>	$diff,
				'loan_type_id' => $arr['loan_type_id'],
				'loan_type' => $arr['loantype']['loantype'],
				'crop_year'	=>	$arr['crop_year'],
				'season'	=>	$arr['season'],
				//'season_full' => $fullSeason,
				'status_id' =>	$arr['status_id'],
				'status' => $arr['loanstatus']['status'],
				'grade' => $arr['grade'],
				'user_id' => $arr['user_id'],
				'loc_id' => $arr['loc_id'],
				'loc_abr' => $arr['location']['loc_abr'],
				'region_id'	=> $arr['region_id'],
				'region' =>	$arr['regions']['region'],
				'applicant_id'	=>	$arr['applicant_id'],
				'farmer_id'	=>	(integer) $arr['farmer_id'],
				'is_active' => (boolean) $arr['is_active'],
				'is_cross_collateralized' => (boolean) $arr['is_cross_collateralized'],
				'is_fast_tracked' => (boolean) $arr['is_fast_tracked'],
				'analyst_can_approve' => (boolean) $arr['analyst_can_approve'],
				'has_distributor' => (boolean) $arr['has_distributor'],
				'distributor_id' => $arr['distributor_id'],
				'distributor' => $arr['distributor']['distributor'],
				'has_addendum' => (boolean) $arr['has_addendum'],
				'bankruptcy_history' =>	(boolean) $arr['bankruptcy_history'],
				'required_3party' => (boolean) $arr['required_3party'],
				'added_land' => (boolean) $arr['added_land'],
				'controlled_disbursement' => (boolean) $arr['controlled_disbursement'],
				'its_list' => (integer) $arr['its_list'],
				'fsa_compliant' => (integer) $arr['fsa_compliant'],
				'prev_lien_verified' => (integer) $arr['prev_lien_verified'],
				'leases_valid' => (integer) $arr['leases_valid'],
				'bankruptcy_order_received' => (integer) $arr['bankruptcy_order_received'],
				'received_3party' =>	(integer) $arr['received_3party'],
				'recommended' => (integer) $arr['recommended'],
				'arm_approved' => (integer) $arr['arm_approved'],
				'dist_approved' => (integer) $arr['dist_approved'],
				'loan_closed' => (integer) $arr['loan_closed'],
				'loan_closed_date' => $arr['loan_closed_date'],
				'arm_balance' => (integer) $arr['arm_balance'],
				'added_land_verified' => (integer) $arr['added_land_verified'],
				'arm_ucc_received' => (integer) $arr['arm_ucc_received'],
				'dist_ucc_received' => (integer) $arr['dist_ucc_received'],
				'aoi_received' => (integer) $arr['aoi_received'],
				'ccc_received' => (integer) $arr['ccc_received'],
				'rebate_assignment' => (integer) $arr['rebate_assignment'],
				'limit_warning' => (integer) $arr['limit_warning'],
				'crop_inspection' => (integer) $arr['crop_inspection'],
				'reconcilliation' => (integer) $arr['reconcilliation'],
				'account_classification' => (integer) $arr['account_classification'],
				'last_activity' => $arr['updated_at'],
				'analyst' => [
					'nick' => $arr['user']['nick'],
					'name' => $arr['user']['username'],
					'email' => $arr['user']['email']
				],
				'conditions' => [
					'asa' => (boolean) $arr['conditions_asa'],
					'aci' => (boolean) $arr['conditions_aci'],
					'areb' => (boolean) $arr['conditions_areb'],
					'adis' => (boolean) $arr['conditions_adis'],
					'pg' => (boolean) $arr['conditions_pg'],
					'ccl' => (boolean) $arr['conditions_ccl'],
					'afsa' => (boolean) $arr['conditions_afsa'],
					'cd' => (boolean) $arr['conditions_cd']
				]
			];
		}, $arr->all());
	}
}