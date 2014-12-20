<?php

    class AppController extends BaseController{
        public function index()
        {
          //return Auth::user();
          if(Auth::guest()){
              return Redirect::to("/login");
          }

			    return View::make('portal_employee.index');
        }
    }

 