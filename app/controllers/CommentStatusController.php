<?php

use Acme\Transformers\CommentstatusTransformer;

class CommentstatusController extends ApiController {

	protected $commentstatusTransformer;

	function __construct(CommentstatusTransformer $commentstatusTransformer)
	{
		$this->commentstatusTransformer = $commentstatusTransformer;
	}


	public function index()
	{
		$commentstatus = Commentstatus::all();

		return $this->respond([
			'data' => $this->commentstatusTransformer->transformCollection($commentstatus->all())
		]);
	}

	public function show($id)
	{
		$commentstatus = Commentstatus::where('id', $id)->get();

		if( $commentstatus->isEmpty() ){
			return $this->respondNotFound('Commentstatus does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->commentstatusTransformer->transform($commentstatus[0])
		]);
	}

	public function store()
	{
		if( ! Input::get('commentstatus')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if

		$commentstatus = Commentstatus::create(Input::all());

		return $this->respondCreated($commentstatus->id);
	}

	public function update($id)
	{
		$commentstatus = Commentstatus::find($id);
		$commentstatus->fill(Input::all())->save();
	}

	public function byLoan($id)
	{
		$commentstatus = Commentstatus::where('loan_id', $id)->get();

		return $this->respond([
			'data' => $this->commentstatusTransformer->transformCollection($commentstatus->all())
		]);
	}

	public function pendingComments($id)
	{
		if(!Auth::user()){ return []; }
		$comms = Commentstatus::where('loan_id', $id)->where('recipient_id', Auth::user()->id)->where('status', 'pending')->get();

		if(!$comms){ return []; }

		return $this->respond([
			'data' => $this->commentstatusTransformer->transformCollection($comms->all())
		]);
	}
}