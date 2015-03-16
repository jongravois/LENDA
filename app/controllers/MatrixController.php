<?php

use Acme\Transformers\MatrixTransformer;

class MatrixController extends ApiController {

    protected $matrixTransformer;

    function __construct(MatrixTransformer $matrixTransformer)
    {
        $this->matrixTransformer = $matrixTransformer;
    }

    public function index()
    {
        $grid = Matrix::all();

        return $this->respond([
            'data' => $this->matrixTransformer->transformCollection($grid->all())
        ]);
    }

    public function show($id)
    {
        $matrix = Matrix::where('id', $id)->get();

        if( $matrix->isEmpty() ){
            return $this->respondNotFound('Rule does not exist.');
        } // end if

        return $this->respond([
            'data' => $this->matrixTransformer->transform($matrix[0])
        ]);
    }

    public function store()
    {
        Matrix::create(Input::all());

        return $this->respondCreated('Rule created.');
    }

    public function update($id)
    {
        $matrix = Matrix::find($id);

        if(!$matrix){
            Matrix::create(Input::all());
            return $this->respondCreated('Rule created.');
        }

        $matrix->fill(Input::all())->save();

        return $this->respondCreated('Rule updated.');
    }

    public function destroy($id)
    {
        return Matrix::where('id', $id)->delete();
    }
}