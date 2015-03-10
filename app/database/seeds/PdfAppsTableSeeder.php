<?php

class PdfAppsTableSeeder extends Seeder
{
  public function run()
  {
    PdfApp::create([
      'title' => 'Ag Input and All-In Loan Application',
      'description' => 'Production loans that are jointly handled between ARM and an input supplier. Production loan amounts can range up to $5 million.',
      'pdfLink' => 'Application_CropLoan.pdf',
      'rank' => 0
    ]);

    PdfApp::create([
      'title' => 'Grain Storage Loan Application',
      'description' => 'ARM will advance cash on grain that has been contracted and is in on-farm storage. Cash advances can be as much as 90% of the contract value. Loan repayment is determined by the delivery date of selling.',
      'pdfLink' => 'Application_GrainStorage.pdf',
      'rank' => 1
    ]);

    PdfApp::create([
      'title' => 'Capital Bridge Application',
      'description' => 'These are fall production loan that are determined by prior production costs. ARM will lend up to 25% of production needs. ARM works with a primary lender to set up an additional line of credit that allows for fall and early spring production finance needs. This loan may be acquired prior to the pay-off of previous crops production loan.',
      'pdfLink' => 'Application_CapitalBridge.pdf',
      'rank' => 2
    ]);

    PdfApp::create([
      'title' => 'Wheat Xpress Application',
      'description' => 'Quick and convenient wheat production financing.',
      'pdfLink' => 'Application_WheatXpress.pdf',
      'rank' => 3
    ]);
  }
}