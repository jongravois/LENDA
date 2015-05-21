<?php

use Acme\Transformers\NotificationTransformer;

class NotificationController extends ApiController {

  protected $notificationTransformer;

  function __construct(NotificationTransformer $notificationTransformer)
  {
    $this->notificationTransformer = $notificationTransformer;
  }

  public function index()
  {
    $notes = Notification::with('user')->get();
    return $this->respond([
      'data' => $this->notificationTransformer->transformCollection($notes->all())
    ]);
  }

  public function store()
  {
    Notification::create(Input::all());

    return $this->respondCreated('Notification created');
  }

  public function show($id)
  {
    $note = Notification::where('id', $id)->get();

    if( $note->isEmpty() ){
      return $this->respondNotFound('Note does not exist.');
    } // end if

    return $this->respond([
      'data' => $this->notificationTransformer->transform($note[0])
    ]);
  }

  public function edit($id)
  {
    //
  }

  public function update($id)
  {
    $note = Notification::find($id);

    if(!$note){
      Notification::create(Input::all());
      return $this->respondCreated('Notification Created');
    } // end if

    $note->fill(Input::all())->save();

    return $this->respondCreated('Notification updated.');
  }

  public function destroy($id)
  {
    return Notification::where('id', $id)->delete();
  }

  public function byUser($id)
  {
    $notes = Notification::where('user_id', $id)->where('status', 'pending')->get();
    return $this->respond([
      'data' => $this->notificationTransformer->transformCollection($notes->all())
    ]);
  }

}