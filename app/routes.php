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
  return Loanpractice::where('loan_id', '1')->where('is_active', '1')->get();
});

Route::group(['prefix'=>'api', 'after' => 'allowOrigin'],function(){
  Route::resource('admingrader', 'AdmingraderController');
  Route::resource('affiliates', 'AffiliatesController');
  Route::resource('agencies', 'AgenciesController');
  Route::resource('applicants', 'ApplicantsController');
  Route::resource('committees', 'CommitteeController');
  Route::resource('comments', 'CommentController');
  Route::resource('commentstatus', 'CommentStatusController');
  Route::resource('conditions', 'ConditionsController');
  Route::resource('corporations', 'CorporationsController');
  Route::resource('counties', 'CountiesController');
  Route::resource('crops', 'CropController');
  Route::resource('cropexpenses', 'CropexpensesController');
  Route::resource('cropdetails', 'CropdetailsController');
  Route::resource('croppractices', 'CroppracticesController');
  Route::resource('defaultexpenses', 'DefaultexpensesController');
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
  Route::resource('notifications', 'NotificationController');
  Route::resource('partners', 'PartnersController');
  Route::resource('prerequisites', 'PrerequisitesController');
  Route::resource('priorliens', 'PriorliensController');
  Route::resource('ratioconstraints', 'RatioconstraintsController');
  Route::resource('references', 'ReferencesController');
  Route::resource('regions', 'RegionsController');
  Route::resource('reports', 'ReportsController');
  Route::resource('requireddocuments', 'RequireddocumentsController');
  Route::resource('roles', 'RolesController');
  Route::resource('screens', 'ScreensController');
  Route::resource('spendcats', 'SpendcatController');
  Route::resource('states', 'StatesController');
  Route::resource('systemics', 'SystemicsController');
  Route::resource('units', 'UnitsController');
  Route::resource('users', 'UsersController');
  Route::resource('viewoptions', 'ViewoptionsController');

  Route::get('defaultexpenses/{id}/bycrop', 'DefaultexpensesController@byCrop');
  Route::get('loans/{id}/affiliates', 'AffiliatesController@byLoan');
  Route::get('loans/{id}/comments', 'CommentController@byLoan');
  Route::get('loans/{id}/commentstatus', 'CommentStatusController@pendingComments');
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
  Route::get('loans/{id}/pendingvotes', 'LoansController@pendingVotes');
  Route::get('loans/{id}/prerequisites', 'PrerequisitesController@byLoan');
  Route::get('loans/{id}/quests', 'LoanquestionsController@byLoan');
  Route::get('users/{id}/notifications', 'NotificationController@byUser');
  Route::get('loans/{id}/priorliens', 'PriorliensController@byLoan');
  Route::get('loans/{id}/references', 'ReferencesController@byLoan');
  Route::get('loans/{id}/systemics', 'SystemicsController@byLoan');
  Route::get('loans/{id}/totalacres', 'LoanCropsController@totalAcres');
  Route::get('loantypes/{id}/screens', 'ScreensController@byLoantype');
});