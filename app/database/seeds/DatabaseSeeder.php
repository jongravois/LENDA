<?php

class DatabaseSeeder extends Seeder {

  protected $tables = [
    'admingrader',
    'affiliates',
    'agencies',
    'applicants',
    'comments',
    'committee',
    'conditions',
    'corporations',
    'counties',
    'crops',
    'cropdetails',
    'cropexpenses',
    'croppractices',
    'defaultexpenses',
    'distributors',
    'entitytypes',
    'expenses',
    'exceptions',
    'farmcrops',
    'farmers',
    'farmexpenses',
    'farmpractices',
    'farms',
    'globals',
    'guarantors',
    'insurance',
    'insuranceoptions',
    'insurancetypes',
    'jointventures',
    'loanassets',
    'loancapacity',
    'loancrops',
    'loanconditions',
    'loandistributor',
    'loanexceptions',
    'loanfinancials',
    'loanpractices',
    'loanquestions',
    'loans',
    'loanstatus',
    'loantypes',
    'locations',
    'notifications',
    'partners',
    'prerequisites',
    'profiles',
    'ratioconstraints',
    'references',
    'regions',
    'reports',
    'requireddocuments',
    'responses',
    'roles',
    'screens',
    'spendcats',
    'states',
    'systemics',
    'units',
    'users',
    'viewoptions',
    'vote',
    'votestatus'
  ];

  protected $seeders = [
    'AdmingraderTableSeeder',
    'AffiliateTableSeeder',
    'AgenciesTableSeeder',
    'ApplicantsTableSeeder',
    'CommentsTableSeeder',
    'CommitteeTableSeeder',
    'ConditionsTableSeeder',
    'CorporationTableSeeder',
    'CountiesTableSeeder',
    'CropexpensesTableSeeder',
    'CropsTableSeeder',
    'CropdetailsTableSeeder',
    'CroppracticesTableSeeder',
    'DefaultExpensesTableSeeder',
    'DistributorsTableSeeder',
    'EntitytypesTableSeeder',
    'ExceptionsTableSeeder',
    'ExpensesTableSeeder',
    'FarmcropsTableSeeder',
    'FarmersTableSeeder',
    'FarmexpensesTableSeeder',
    'FarmpracticesTableSeeder',
    'FarmsTableSeeder',
    'GlobalsTableSeeder',
    'GuarantorTableSeeder',
    'InsuranceTableSeeder',
    'InsuranceoptionsTableSeeder',
    'InsurancetypesTableSeeder',
    'JointventuresTableSeeder',
    'LoanassetsTableSeeder',
    'LoancropsTableSeeder',
    'LoandistributorTableSeeder',
    'LoancapacityTableSeeder',
    'LoanconditionsTableSeeder',
    'LoanexceptionsTableSeeder',
    'LoanfinancialsTableSeeder',
    'LoansTableSeeder',
    'LoanpracticesTableSeeder',
    'LoanquestionsTableSeeder',
    'LoanstatusTableSeeder',
    'LoantypesTableSeeder',
    'LocationsTableSeeder',
    'NotificationTableSeeder',
    'PartnersTableSeeder',
    'PrerequisitesTableSeeder',
    'ProfilesTableSeeder',
    'RatioconstraintsTableSeeder',
    'ReferencesTableSeeder',
    'RegionsTableSeeder',
    'ReportsTableSeeder',
    'RequireddocumentsTableSeeder',
    'ResponsesTableSeeder',
    'RolesTableSeeder',
    'ScreensTableSeeder',
    'SpendcatsTableSeeder',
    'StatesTableSeeder',
    'SystemicsTableSeeder',
    'UnitsTableSeeder',
    'UsersTableSeeder',
    'ViewoptionsTableSeeder',
    'VotesTableSeeder',
    'VotestatusTableSeeder'
  ];

  public function run()
  {
    Eloquent::unguard();

    $this->cleanDatabase();

    foreach($this->seeders as $seedClass)
    {
      $this->call($seedClass);
    }
  } // end run() fn

  private function cleanDatabase()
  {
    DB::statement('SET FOREIGN_KEY_CHECKS=0');

    foreach($this->tables as $table)
    {
      DB::table($table)->truncate();
    }

    DB::statement('SET FOREIGN_KEY_CHECKS=1');
  } // end cleanDatabase() fn

}
