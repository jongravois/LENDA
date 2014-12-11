<?php

Route::get('/', 'AppController@index')->before('auth');
Route::get('login', 'SessionsController@create');
Route::get('logout', 'SessionsController@destroy');
Route::resource('sessions', 'SessionsController');
Route::get('app', [
  'as' => 'home',
  'uses' => 'AppController@index'
])->before('auth');

Route::get('test', function(){
  return User::where('email', 'jongravois@gmail.com')->get();
});

Route::group(['prefix'=>'api', 'after' => 'allowOrigin'],function(){
  Route::resource('admingrader', 'AdmingraderController');
  Route::resource('agencies', 'AgenciesController');
  Route::resource('applicants', 'ApplicantsController');
  Route::resource('committees', 'CommitteeController');
  Route::resource('comments', 'CommentController');
  Route::resource('conditions', 'ConditionsController');
  Route::resource('corporations', 'CorporationsController');
  Route::resource('counties', 'CountiesController');
  Route::resource('crops', 'CropsController');
  Route::resource('cropexpenses', 'CropexpensesController');
  Route::resource('cropdetails', 'CropdetailsController');
  Route::resource('croppractices', 'CroppracticesController');
  Route::resource('distributors', 'DistributorsController');
  Route::resource('entitytypes', 'EntitytypesController');
  Route::resource('expenses', 'ExpensesController');
  Route::resource('farmers', 'FarmersController');
  Route::resource('farms', 'FarmController');
  Route::resource('farmcrops', 'FarmcropsController');
  Route::resource('farmexpenses', 'FarmexpensesController');
  Route::resource('globals', 'GlobalsController');
  Route::resource('guarantors', 'GuarantorController');
  Route::resource('insurance', 'InsuranceController');
  Route::resource('insurancetypes', 'InsurancetypesController');
  Route::resource('jointventures', 'JointventuresController');
  Route::resource('loans', 'LoansController');
  Route::resource('loanassets', 'LoanassetsController');
  Route::resource('loancapacity', 'LoancapacityController');
  Route::resource('loanconditions', 'LoanconditionsController');
  Route::resource('loancrops', 'LoancropsController');
  Route::resource('loanexceptions', 'LoanexceptionsController');
  Route::resource('loandistributor', 'LoandistributorController');
  Route::resource('loanfinancials', 'LoanfinancialsController');
  Route::resource('loanpractices', 'LoanpracticesController');
  Route::resource('loanquestions', 'LoanquestionsController');
  Route::resource('loanstatus', 'LoanstatusController');
  Route::resource('loantypes', 'LoantypesController');
  Route::resource('locations', 'LocationsController');
  Route::resource('partners', 'PartnersController');
  Route::resource('prerequisites', 'PrerequisitesController');
  Route::resource('ratioconstraints', 'RatioconstraintsController');
  Route::resource('regions', 'RegionsController');
  Route::resource('reports', 'ReportsController');
  Route::resource('requireddocuments', 'RequireddocumentsController');
  Route::resource('roles', 'RolesController');
  Route::resource('screens', 'ScreensController');
  Route::resource('spendcats', 'SpendcatController');
  Route::resource('staff', 'StaffController');
  Route::resource('states', 'StatesController');
  Route::resource('systemics', 'SystemicsController');
  Route::resource('units', 'UnitsController');
  Route::resource('users', 'UsersController');

  Route::get('loans/{id}/comments', 'CommentController@byLoan');
  Route::get('loans/{id}/committee', 'CommitteeController@byLoan');
  Route::get('loans/{id}/conditions', 'LoanConditionsController@byLoan');
  Route::get('loans/{id}/corporations', 'CorporationsController@byLoan');
  Route::get('loans/{id}/counties', 'CountiesController@byLoan');
  Route::get('loans/{id}/cropexpenses', 'CropexpensesController@byLoan');
  Route::get('loans/{id}/farms', 'FarmController@byLoan');
  Route::get('loans/{id}/farmexpenses', 'FarmexpensesController@byLoan');
  Route::get('loans/{id}/farmpractices', 'FarmpracticesController@byLoan');
  Route::get('loans/{id}/financials', 'LoanfinancialsController@byLoan');
  Route::get('loans/{id}/guarantors', 'GuarantorController@byLoan');
  Route::get('loans/{id}/insurance', 'InsuranceController@byLoan');
  Route::get('loans/{id}/jointventures', 'JointventuresController@byLoan');
  Route::get('loans/{id}/loanassets', 'LoanassetsController@byLoan');
  Route::get('loans/{id}/loancrops', 'LoancropsController@byLoan');
  Route::get('loans/{id}/distributor', 'LoandistributorController@byLoan');
  Route::get('loans/{id}/partners', 'PartnersController@byLoan');
  Route::get('loans/{id}/prerequisites', 'PrerequisitesController@byLoan');
  Route::get('loans/{id}/quests', 'LoanquestionsController@byLoan');
  Route::get('loans/{id}/systemics', 'SystemicsController@byLoan');
  Route::get('loantypes/{id}/screens', 'ScreensController@byLoantype');
});