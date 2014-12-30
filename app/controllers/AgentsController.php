<?php

use Acme\Transformers\AgentTransformer;

class AgentsController extends ApiController {

	protected $agentTransformer;

	function __construct(AgentTransformer $agentTransformer)
	{
		$this->agentTransformer = $agentTransformer;
	}

	public function index()
	{
		$agents = Agents::all();

		return $this->respond([
			'data' => $this->agentTransformer->transformCollection($agents->all())
		]);
	}

	public function show($id)
	{
		$agent = Agents::where('id', $id)->get();

		if( $agent->isEmpty() ){
			return $this->respondNotFound('Agent does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->agentTransformer->transform($agent[0])
		]);
	}

	public function store()
	{
		Agents::create(Input::all());

		return $this->respondCreated('Agent created.');
	}

	public function update($id)
	{
		$agent = Agents::find($id);

		if(!$agent){
			Agents::create(Input::all());
			return $this->respondCreated('Agent created.');
		}

		$agent->fill(Input::all())->save();

		return $this->respondCreated('Agent updated.');
	}

	public function destroy($id)
	{
		return Agents::where('id', $id)->delete();
	}

	public function byAgency($id){
		$agents = Agents::where('agency_id', $id)->get();

		return $this->respond([
			'data' => $this->agentTransformer->transformCollection($agents->all())
		]);
	}
}