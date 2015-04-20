<?php

class AttachmentsTableSeeder extends Seeder {

    public function run()
    {
        Attachment::create([
            'loan_id' => 1,
            'title' => 'Drivers License',
            'filename' => 'driversLicense.pdf',
            'filetype' => 'pdf'
        ]);

        Attachment::create([
            'loan_id' => 1,
            'title' => 'Equipment List',
            'filename' => 'equipmentList.pdf',
            'filetype' => 'pdf'
        ]);
    }

}