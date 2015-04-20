<?php

use Acme\Transformers\AttachmentTransformer;

class AttachmentsController extends ApiController {

    protected $attachmentTransformer;

    function __construct(AttachmentTransformer $attachmentTransformer)
    {
        $this->attachmentTransformer = $attachmentTransformer;
    }

    public function index()
    {
        $attachments = Attachment::all();
        return $this->respond([
            'data' => $this->attachmentTransformer->transformCollection($attachments->all())
        ]);
    }

    public function store()
    {
        /*if( ! Input::get('title')){
            return $this->respondCreationDenied('Failed Validation');
        } // end if
        */

        Attachment::create(Input::all());

        return $this->respondCreated('Attachment created');
    }

    public function show($id)
    {
        $attachment = Attachment::where('id', $id)->get();

        if( $attachment->isEmpty() ){
            return $this->respondNotFound('Attachment does not exist.');
        } // end if

        return $this->respond([
            'data' => $this->attachmentTransformer->transform($attachment[0])
        ]);
    }

    public function edit($id)
    {
        //
    }

    public function update($id)
    {
        $attachment = Attachment::find($id);

        if(!$attachment){
            Attachment::create(Input::all());
            return $this->respondCreated('Attachment Created');
        } // end if

        $attachment->fill(Input::all())->save();

        return $this->respondCreated('Attachment updated.');
    }

    public function destroy($id)
    {
        return Attachment::where('id', $id)->delete();
    }

    public function byLoan($id)
    {
        $attachments = Attachment::where('loan_id', $id)->get();
        return $this->respond([
            'data' => $this->attachmentTransformer->transformCollection($attachments->all())
        ]);
    }

}