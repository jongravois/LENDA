<?php

use Acme\Transformers\FarmTransformer;

class FarmController extends ApiController
{

    protected $farmTransformer;

    function __construct(FarmTransformer $farmTransformer)
    {
        $this->farmTransformer = $farmTransformer;
    }


    public function index()
    {
        $farm = Farm::with('county')->get();

        return $this->respond([
            'data' => $this->farmTransformer->transformCollection($farm->all())
        ]);
    }

    public function show($id)
    {
        $farm = Farm::with('county')->where('id', $id)->get();

        if ($farm->isEmpty()) {
            return $this->respondNotFound('Farm does not exist.');
        } // end if

        return $this->respond([
            'data' => $this->farmTransformer->transform($farm[0])
        ]);
    }

    public function store()
    {
        //TODO: Add validation
        /*
        if( ! Input::get('farm')){
            return $this->respondCreationDenied('Failed Validation');
        } // end if
        */

        $farm = Farm::create(Input::all());

        return $this->respondCreated($farm->id);
    }

    public function update($id)
    {
        $farm = Farm::find($id);
        $farm->fill(Input::all())->save();
    }

    public function byLoan($id)
    {
        $farm = Farm::where('loan_id', $id)->get();
        return $this->respond([
            'data' => $this->farmTransformer->transformCollection($farm->all())
        ]);
    }


}