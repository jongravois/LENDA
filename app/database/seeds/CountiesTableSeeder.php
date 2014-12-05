<?php

use Acme\Seeder\BaseSeeder;

class CountiesTableSeeder extends BaseSeeder {

  function __construct()
  {
    $this->table = 'counties';
    $this->filename = app_path().'/database/seeds/csvs/counties.csv';
  }
}