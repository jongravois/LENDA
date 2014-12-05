<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProfilesController extends \BaseController {

	public function show($username)
	{
        try
        {
			$user = User::with('profile', 'profile.location')->whereUsername($username)->firstOrFail();
            //dd($user->toArray());
        }
        catch(ModelNotFoundException $e)
        {
            Flash::message('User Not Found!');
            return Redirect::home();
        }

        return View::make('profiles.show')->withUser($user);
	}

}