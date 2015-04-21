<?php

class UploadsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /uploads
	 *
	 * @return Response
	 */
	public function index()
	{
		$all = Upload::all();
        return $all;
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /uploads/create
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('uploads.create');
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /uploads
	 *
	 * @return Response
	 */
	public function store()
	{
        if (Auth::check()) {
            $fnm = 'driversLicense.pdf';
            $loanID = Input::get('loan_id');
            $loan = Loan::findOrFail($loanID);
            $file_path = $loan->crop_year . '_' . $loanID;
            //return $loan->toArray();

            $upload = new Upload;
            $upload->loan_id = (integer) $loanID;
            $upload->user_id = (integer) Auth::user()->getId();

            if (Input::hasFile('thumbnail')) {
                $file = Input::file('thumbnail');

                $upload->document = Input::get('title');
                $upload->filename = $fnm;
                $upload->original_filename = $file->getClientOriginalName();
                $upload->path =$file_path . '/' . $fnm;
                $upload->filetype = $file->getClientOriginalExtension();

                $file = $file->move(public_path() . '/files_loans/' . $file_path . '/', $fnm);

                $upload->save();

            } // end if
        } else {
            return Redirect::to('login')->with('message', 'You must be logged in.');
        } // end if auth::check()
	}

	/**
	 * Display the specified resource.
	 * GET /uploads/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return 'SHOW ONE';
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /uploads/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		return 'EDIT';
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /uploads/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		return 'UPDATE ONE';
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /uploads/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		return 'DELETE ONE';
	}

    public function uploadProgress()
    {
        $file = Input::file('file');
        $file->move(public_path() . '/files_loans/jwg/', 'acronyms.pdf');
    }
}