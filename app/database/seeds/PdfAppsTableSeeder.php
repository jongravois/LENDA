<?php

class PdfAppsTableSeeder extends Seeder
{
  public function run()
  {
    PdfApp::create([
      "title" => "Ag Input and All-In Loan Application",
      "description" => "Production loans that are jointly handled between ARM and an input supplier. Production loan amounts can range up to $5 million.",
      "pdfLink" => "",
      "pdfImg" => "//nebula.wsimg.com/38a8fe14d4d345c41d0abd1e3545b5e9?AccessKeyId=D44466EADCCC527413A8&amp;disposition=0&amp;alloworigin=1",
      "docLink" => "",
      "docImg" => "//nebula.wsimg.com/a03ac4947772ea5cfec093fb15cd3e6e?AccessKeyId=D44466EADCCC527413A8&amp;disposition=0&amp;alloworigin=1",
      "rank" => 0,
      "isVisible" => true
    ]);

    PdfApp::create([
      "title" => "Grain Storage Loan Application",
      "description" => "ARM will advance cash on grain that has been contracted and is in on-farm storage. Cash advances can be as much as 90% of the contract value. Loan repayment is determined by the delivery date of selling.",
      "pdfLink" => "",
      "pdfImg" => "//nebula.wsimg.com/38a8fe14d4d345c41d0abd1e3545b5e9?AccessKeyId=D44466EADCCC527413A8&amp;disposition=0&amp;alloworigin=1",
      "docLink" => "",
      "docImg" => "//nebula.wsimg.com/a03ac4947772ea5cfec093fb15cd3e6e?AccessKeyId=D44466EADCCC527413A8&amp;disposition=0&amp;alloworigin=1",
      "rank" => 1,
      "isVisible" => true
    ]);

    PdfApp::create([
      "title" => "Capital Bridge Application",
      "description" => "These are fall production loan that are determined by prior production costs. ARM will lend up to 25% of production needs. ARM works with a primary lender to set up an additional line of credit that allows for fall and early spring production finance needs. This loan may be acquired prior to the pay-off of previous crops production loan.",
      "pdfLink" => "",
      "pdfImg" => "//nebula.wsimg.com/38a8fe14d4d345c41d0abd1e3545b5e9?AccessKeyId=D44466EADCCC527413A8&amp;disposition=0&amp;alloworigin=1",
      "docLink" => "",
      "docImg" => "//nebula.wsimg.com/a03ac4947772ea5cfec093fb15cd3e6e?AccessKeyId=D44466EADCCC527413A8&amp;disposition=0&amp;alloworigin=1",
      "rank" => 2,
      "isVisible" => true
    ]);

    PdfApp::create([
      "title" => "Wheat Xpress Application",
      "description" => "Quick and convenient wheat production financing.",
      "pdfLink" => "",
      "pdfImg" => "//nebula.wsimg.com/38a8fe14d4d345c41d0abd1e3545b5e9?AccessKeyId=D44466EADCCC527413A8&amp;disposition=0&amp;alloworigin=1",
      "docLink" => "",
      "docImg" => "//nebula.wsimg.com/a03ac4947772ea5cfec093fb15cd3e6e?AccessKeyId=D44466EADCCC527413A8&amp;disposition=0&amp;alloworigin=1",
      "rank" => 3,
      "isVisible" => true
    ]);
  }
}