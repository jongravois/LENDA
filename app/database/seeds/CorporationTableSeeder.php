<?php

class CorporationTableSeeder extends Seeder
{

    public function run()
    {
        Corporation::create([
            'loan_id' => 4,
            'corporation' => 'SHIELD',
            'ssn' => '929293393',
            'address' => 'Communications Department',
            'city' => 'Sky Carrier',
            'state_id' => 4,
            'zip' => '77631',
            'email' => 'support@shield.com',
            'phone' => '5125555050',
            'description' => 'S.H.I.E.L.D. is an espionage and law-enforcement agency in the Marvel Comics Universe. Created by Stan Lee and Jack Kirby in Strange Tales #135 (Aug. 1965), it often deals with paranormal and superhuman threats. The acronym originally stood for Supreme Headquarters, International Espionage, Law-Enforcement Division. It was changed in 1991 to Strategic Hazard Intervention Espionage Logistics Directorate.',
            'president' => 'Fury, Nick S.',
            'vicepresident' => 'Coulson, Phil',
            'secretary' => 'Hill, Maria',
            'treasurer' => 'Bill, Dollar'
        ]);
    }
}