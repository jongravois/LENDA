<?php

use Acme\Transformers\CommentTransformer;

class CommentController extends ApiController {

	protected $commentTransformer;

	function __construct(CommentTransformer $commentTransformer)
	{
		$this->commentTransformer = $commentTransformer;
	}


	public function index()
	{
		$comment = Comment::with('loan', 'responses.user', 'status', 'user')->get();

		return $this->respond([
			'data' => $this->commentTransformer->transformCollection($comment->all())
		]);
	}

	public function show($id)
	{
		$comment = Comment::with('loan', 'responses.user', 'status', 'user')->where('id', $id)->get();

		if( $comment->isEmpty() ){
			return $this->respondNotFound('Comment does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->commentTransformer->transform($comment[0])
		]);
	}

	public function store()
	{
		if( ! Input::get('comment')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if

		$comment = Comment::create(Input::all());

		return $this->respondCreated($comment->id);
	}

	public function update($id)
	{
		$comment = Comment::find($id);
		$comment->fill(Input::all())->save();
	}

	public function byLoan($id)
	{
		$comment = Comment::with('loan', 'responses.user', 'status', 'user')->where('loan_id', $id)->get();

		return $this->respond([
			'data' => $this->commentTransformer->transformCollection($comment->all())
		]);
	}

}