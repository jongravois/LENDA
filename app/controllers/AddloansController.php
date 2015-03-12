<?php

use Acme\Transformers\CommentTransformer;
use Acme\Transformers\AddloanTransformer;
use Acme\Transformers\NotificationTransformer;

class AddloansController extends ApiController {

    protected $addloanTransformer;
    protected $notificationTransformer;
    protected $commentTransformer;

    function __construct(AddloanTransformer $addloanTransformer, NotificationTransformer $notificationTransformer, CommentTransformer $commentTransformer)
    {
        $this->addloanTransformer = $addloanTransformer;
        $this->notificationTransformer = $notificationTransformer;
        $this->commentTransformer = $commentTransformer;

        //$this->beforeFilter('auth.basic', ['on'=>'post']);
    }

    public function index()
    {
        $loans = Addloan::where('applicant_id', '!=', 'null')->get();
        //return $loans;  //REMOVE THIS

        return $this->respond([
            'data' => $this->addloanTransformer->transformCollection($loans->all())
        ]);
    }

    public function show($id)
    {
        //USED BY LoansFactory
        $loan = Addloan::where('id', $id)->get();
        //return $loan;

        if( $loan->isEmpty() ){
            return $this->respondNotFound('Loan does not exist.');
        } // end if

        return Response::json(['data' => $this->tform($loan)], 200);
    }

    public function store()
    {
        //TODO: Add validation
        $crop_year = Globals::pluck('crop_year');

        $loan = Addloan::create(Input::all());
        $newLoan = Addloan::find($loan->id);

        $path = public_path('files_loans/') . $crop_year . '_' . $newLoan->original_id;
    }

    public function update($id)
    {
        $loan = Addloan::find($id);
        $loan->fill(Input::all())->save();
    }

    private function tform($arr)
    {
        return array_map(function($arr)
        {
            $appDate = $arr['app_date'];
            $dueDate = $arr['due_date'];
            $diff = $dueDate->diffInDays($appDate);

            //return $arr;
            return [
                'id'		=>	$arr['id'],
                'app_date'	=> 	$arr['app_date']->format('m/d/Y'),
                'decision_date'	=> 	($arr['decision_date'] ? $arr['decision_date']->format('m/d/Y') : null),
                'distributor_approval_date' => ($arr['distributor_approval_date'] ? $arr['distributor_approval_date']->format('m/d/Y') : null),
                'due_date'	=>	$arr['due_date']->format('m/d/Y'),
                'default_due_date' => ($arr['default_due_date'] ? $arr['default_due_date']->format('m/d/Y') : null),
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
                'has_attachments' => (boolean) $arr['has_attachments'],
                'has_distributor' => (boolean) $arr['has_distributor'],
                'distributor_id' => $arr['distributor_id'],
                'distributor' => $arr['distributor']['distributor'],
                'has_addendum' => (boolean) $arr['has_addendum'],
                'addendum_type' => (string) $arr['addendum_type'],
                'bankruptcy_history' =>	(boolean) $arr['bankruptcy_history'],
                'required_3party' => (boolean) $arr['required_3party'],
                'added_land' => (boolean) $arr['added_land'],
                'controlled_disbursement' => (boolean) $arr['controlled_disbursement'],
                'its_list' => (integer) $arr['its_list'],
                'fsa_compliant' => (integer) $arr['fsa_compliant'],
                'prev_lien_verified' => (integer) $arr['prev_lien_verified'],
                'leases_valid' => (integer) $arr['leases_valid'],
                'bankruptcy_order_received' => (integer) $arr['bankruptcy_order_received'],
                'received_3party' => (integer) $arr['received_3party'],
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
                'reconciliation' => (integer) $arr['reconciliation'],
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