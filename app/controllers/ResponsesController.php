<?php

use Acme\Transformers\ResponseTransformer;

class ResponsesController extends ApiController {

    protected $responseTransformer;

    function __construct(ResponseTransformer $responseTransformer)
    {
        $this->responseTransformer = $responseTransformer;
    }


    public function index()
	{
		$responses = Commentresponse::all();

        return $this->respond([
            'data' => $this->responseTransformer->transformCollection($responses->all())
        ]);
	}

    public function show($id)
    {
        $response = Commentresponse::where('id', $id)->get();

        if( $response->isEmpty()){
            return $this->respondNotFound('Response does not exist.');
        } // end if

        return $this->respond([
            'data' => $this->responseTransformer->transform($response[0])
        ]);
    }

    public function store()
	{
        Commentresponse::create(Input::all());

        return $this->respondCreated('Response created');
	}

	public function update($id)
	{
        $response = Commentresponse::find($id);

        if(!$response) {
            Commentresponse::create(Input::all());

            return $this->respondCreated('Response created');
        } // end if

        $response->fill(Input::all())->save();

        return $this->respondCreated('Response created');
	}

	public function destroy($id)
	{
		return Commentresponse::where('id', $id)->delete();
	}

}