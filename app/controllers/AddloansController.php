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
    }

    public function index()
    {
        $loans = Addloan::with('addendumtype', 'addfins')->where('has_addendum', '1')->get();
        //return $loans;  //REMOVE THIS

        return $this->respond([
            'data' => $this->addloanTransformer->transformCollection($loans->all())
        ]);
    }

    public function show($id)
    {
        //USED BY LoansFactory
        $loan = Addloan::with('addendumtype', 'addfins')->where('id', $id)->get();
        //return $loan;

        if( $loan->isEmpty() ){
            return $this->respondNotFound('Loan does not exist.');
        } // end if

        return $this->respond([
            'data' => $this->addloanTransformer->transform($loan[0])
        ]);
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

    public function byLoan($id)
    {
        $adds = Addloan::with('addendumtype', 'addfins')->where('original_id', $id)->get();

        return $this->respond([
            'data' => $this->addloanTransformer->transformCollection($adds->all())
        ]);
    }
}