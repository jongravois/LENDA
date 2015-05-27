<?php

class SystemicsTableSeeder extends Seeder
{

    public function run()
    {

        Systemics::create([
            "loan_id" => "1",
            "user" => "Jonathan Gravois",
            "action" => "Created loan",
            "created_at" => "2015-02-14 09:10:00"
        ]);

        Systemics::create([
            "loan_id" => "1",
            "user" => "Jonathan Gravois",
            "action" => "Verified ITS",
            "created_at" => "2015-02-14 13:04:00"
        ]);

        Systemics::create([
            "loan_id" => "1",
            "user" => "Jonathan Gravois",
            "action" => "Verified FSA Compliance",
            "created_at" => "2015-02-14 13:56:00"
        ]);

        Systemics::create([
            "loan_id" => "1",
            "user" => "Kenn Thompson",
            "action" => "Cross-collateralized loan",
            "created_at" => "2015-02-18 09:10:00"
        ]);

        Systemics::create([
            "loan_id" => "1",
            "user" => "Jonathan Gravois",
            "action" => "Uploaded Guarantor Agreement - Sharon Gwin",
            "created_at" => "2015-02-19 09:10:00"
        ]);

        Systemics::create([
            "loan_id" => "2",
            "user" => "Jonathan Gravois",
            "action" => "Created loan"
        ]);

        Systemics::create([
            "loan_id" => "3",
            "user" => "Jonathan Gravois",
            "action" => "Created loan"
        ]);

        Systemics::create([
            "loan_id" => "4",
            "user" => "Jonathan Gravois",
            "action" => "Created loan"
        ]);

        Systemics::create([
            "loan_id" => "5",
            "user" => "Jonathan Gravois",
            "action" => "Created loan"
        ]);

        Systemics::create([
            "loan_id" => "6",
            "user" => "Jonathan Gravois",
            "action" => "Created loan"
        ]);

        Systemics::create([
            "loan_id" => "7",
            "user" => "Jonathan Gravois",
            "action" => "Created loan"
        ]);

        Systemics::create([
            "loan_id" => "8",
            "user" => "Jonathan Gravois",
            "action" => "Created loan"
        ]);
    }

}