<?php

class AddendumTypesController extends ApiController {

    public function index()
    {
        $addendumtypes = Addendumtype::all();

        return $this->respond([
            'data' => $addendumtypes->all()
        ]);
    }

    public function show($id)
    {
        $addendumtype = Addendumtype::where('id', $id)->get();

        if( $addendumtype->isEmpty() ){
            return $this->respondNotFound('Global does not exist.');
        } // end if

        return $this->respond([
            'data' => $addendumtype->all()
        ]);
    }

    public function store()
    {
        Addendumtype::create(Input::all());

        return $this->respondCreated('Global created.');
    }

    public function update($id)
    {
        $addendumtype = Addendumtype::find($id);

        if(!$addendumtype){
            Addendumtype::create(Input::all());
            return $this->respondCreated('Global created.');
        }

        $addendumtype->fill(Input::all())->save();

        return $this->respondCreated('Global updated.');
    }

    public function destroy($id)
    {
        return Addendumtype::where('id', $id)->delete();
    }
}