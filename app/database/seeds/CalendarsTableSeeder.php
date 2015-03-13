<?php

class CalendarsTableSeeder extends Seeder {

    public function run()
    {
        Calendar::create([
            'title' => 'Board Meeting',
            'start' => '2015-03-13 10:00:00',
            'end' => '2015-03-13 11:00:00'
        ]);

        Calendar::create([
            'title' => 'ACC Tournament',
            'start' => '2015-03-10 00:00:00',
            'end' => '2015-03-14 00:00:00',
            'allDay' => true
        ]);

        Calendar::create([
            'title' => 'Analyst Review',
            'start' => '2015-03-13 14:00:00',
            'end' => '2015-03-13 16:00:00'
        ]);

        Calendar::create([
            'title' => 'Banker Policies (Regions Bank w/ Reggie Jackson)',
            'start' => '2015-03-24 9:00:00',
            'end' => '2015-03-24 17:00:00'
        ]);

        Calendar::create([
            'title' => 'JSI w/ Katniss Everdeen',
            'start' => '2015-03-19 10:00:00',
            'end' => '2015-03-19 11:00:00'
        ]);

        Calendar::create([
            'title' => 'ARM Workday',
            'start' => '2015-03-17 00:00:00',
            'end' => '2015-03-18 00:00:00',
            'allDay' => true,
            'url' => 'http://www.rhi.com'
        ]);
    }

}