<?php

class DatabaseSeeder extends Seeder {

  protected $tables = [
    'admingrader',
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
    'ratioconstraints',
    'regions',
    'reports',
    'requireddocuments',
    'responses',
    'roles',
    'screens',
    'spendcats',
    'staff',
    'staffprofiles',
    'states',
    'systemics',
    'units',
    'users',
    'vote',
    'votestatus'
  ];

  protected $seeders = [
    'AdmingraderTableSeeder',
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
    'RatioconstraintsTableSeeder',
    'RegionsTableSeeder',
    'ReportsTableSeeder',
    'RequireddocumentsTableSeeder',
    'ResponsesTableSeeder',
    'RolesTableSeeder',
    'ScreensTableSeeder',
    'SpendcatsTableSeeder',
    'StaffTableSeeder',
    'StaffprofilesTableSeeder',
    'StatesTableSeeder',
    'SystemicsTableSeeder',
    'UnitsTableSeeder',
    'UsersTableSeeder',
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
