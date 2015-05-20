<?php

use Acme\Transformers\ApplicantTransformer;

class ApplicantsController extends ApiController {

	protected $applicantTransformer;

	function __construct(ApplicantTransformer $applicantTransformer)
	{

		$this->applicantTransformer = $applicantTransformer;

		$this->beforeFilter('auth.basic', ['on'=>'post']);
	}

	public function index()
	{
		$applicants = Applicant::with('location', 'entitytype', 'state')->get();


		return $this->respond([
			'data' => $this->applicantTransformer->transformCollection($applicants->all())
		]);
	}

	public function show($id)
	{
		$applicant = Applicant::with('location', 'entitytype', 'state')->where('id', $id)->get();

		if( $applicant->isEmpty() ){
			return $this->respondNotFound('Applicant does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->applicantTransformer->transform($applicant[0])
		]);
	}

	public function store()
	{
		//TODO: Validation
		/*if( ! Input::get('applicant')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if*/

		$applicant = Applicant::where('ssn', Input::get('ssn'))->first();
		if($applicant){
			return $this->respondCreated($applicant->id);
		} // end if

		$arr = Input::all();
		//$DOB = date("m/d/Y", strtotime($arr['dob']));
		//$arr['dob'] = $DOB;
		$applicant = Applicant::create($arr);

		return $this->respondCreated($applicant->id);
	}

	public function update($id)
	{
		$applicant = Applicant::find($id);
		$applicant->fill(Input::all())->save();
	}
}