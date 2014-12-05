<?php

class SessionsController extends BaseController{
  public function create()
  {
    if(Auth::check()) return Redirect::to('/app');
    return View::make('sessions.create');
  }

  public function store()
  {
    if(Auth::attempt(Input::only('email', 'password'))){
      //dd(Auth::user());
      return Redirect::to('/app');
    } // end if
    return Redirect::back()->withInput();
  }

  public function destroy()
  {
    Auth::logout();
    return Redirect::route('sessions.create');
  }
}