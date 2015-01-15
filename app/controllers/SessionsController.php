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
      if(Input::get('password') == 'changeme'){
        return Redirect::to('/pwchange');
      } // end if
      return Redirect::to('/app');
    } // end if
    Flash::error('Username/password combination not recognized!');
    return Redirect::back()->withInput();
  }

  public function destroy()
  {
    Auth::logout();
    return Redirect::route('sessions.create');
  }

  public function change_needed()
  {
    return View::make('sessions.change');
  }

  public function password_change()
  {
    if(Input::get('password') !== Input::get('password2')){
      Flash::error('The two passwords did not match!');
      return Redirect::back()->withInput();
    }
    $user = Auth::user();
    $user->password = Input::get('password');
    $user->save();
    Auth::logout();
    Flash::message('Please log in with your new credentials!');
    return Redirect::to('login');
  }
}