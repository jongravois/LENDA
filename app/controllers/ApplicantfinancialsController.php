<?php

use Acme\Transformers\ApplicantFinancialsTransformer;

class ApplicantfinancialsController extends ApiController {

    protected $applicantfinancialsTransformer;

    function __construct(ApplicantFinancialsTransformer $applicantfinancialsTransformer)
    {
        $this->applicantfinancialsTransformer = $applicantfinancialsTransformer;
    }


    public function index()
	{
        $fins = Applicantfinancial::all();
        return $this->respond([
            'data' => $this->applicantfinancialsTransformer->transformCollection($fins->all())
        ]);
	}

	public function store()
	{
        Applicantfinancial::create(Input::all());

        return $this->respondCreated('Applicantfinancial created');
	}

	public function show($id)
	{
        $fin = Applicantfinancial::where('id', $id)->get();

        if( $fin->isEmpty() ){
            return $this->respond([
                'data' => []
            ]);
        } // end if

        return $this->respond([
            'data' => $this->applicantfinancialsTransformer->transform($fin[0])
        ]);
	}

	public function update($id)
	{
        $fin = Applicantfinancial::find($id);

        if(!$fin){
            Applicantfinancial::create(Input::all());
            return $this->respondCreated('Applicantfinancial Created');
        } // end if

        $fin->fill(Input::all())->save();

        return $this->respondCreated('Applicantfinancial updated.');
	}

	public function destroy($id)
	{
        return Applicantfinancial::where('id', $id)->delete();
	}

    public function byLoan($id){
        $fin = Applicantfinancial::where('loan_id', $id)->get();

        if( $fin->isEmpty() ){
            return $this->respond([
                'data' => []
            ]);
        } // end if

        return $this->respond([
            'data' => $this->applicantfinancialsTransformer->transform($fin[0])
        ]);
    }

}