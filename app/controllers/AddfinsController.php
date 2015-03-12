<?php

use Acme\Transformers\AddfinsTransformer;

class AddfinsController extends ApiController {

    protected $addfinsTransformer;

    function __construct(AddfinsTransformer $addfinsTransformer)
    {
        $this->addfinsTransformer = $addfinsTransformer;
    }

    public function index()
    {
        $loanfinancials = Addfin::all();
        return $this->respond([
            'data' => $this->addfinsTransformer->transformCollection($loanfinancials->all())
        ]);
    }

    public function store()
    {
        /*
         * if( ! Input::get('loanfinancial')){
            return $this->respondCreationDenied('Failed Validation');
        } // end if
        */

        Addfin::create(Input::all());

        return $this->respondCreated('Loanfinancial created');
    }

    public function show($id)
    {
        $loanfinancial = Addfin::where('id', $id)->get();

        if( $loanfinancial->isEmpty() ){
            return $this->respondNotFound('Loanfinancial does not exist.');
        } // end if

        return $this->respond([
            'data' => $this->addfinsTransformer->transform($loanfinancial[0])
        ]);
    }

    public function edit($id)
    {
        //
    }

    public function update($id)
    {
        $loanfinancial = Addfin::find($id);

        if(!$loanfinancial){
            Addfin::create(Input::all());
            return $this->respondCreated('Loanfinancial Created');
        } // end if

        $loanfinancial->fill(Input::all())->save();

        return $this->respondCreated('Loanfinancial updated.');
    }

    public function destroy($id)
    {
        return Addfin::where('id', $id)->delete();
    }

    public function byLoan($id)
    {
        $loanfinancials = Addfin::where('loan_id', $id)->get();
        return $this->respond([
            'data' => $this->adfinsTransformer->transformCollection($loanfinancials->all())
        ]);
    }

}