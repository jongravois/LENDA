<?php

class DefaultExpensesTableSeeder extends Seeder {

  public function run()
  {
    //corn
    Defaultexpenses::create([
      'crop_id' => 1,
      'fertilizer_dist_acre' => 172.81,
      'seed_dist_acre' => 126.00,
      'herbicide_dist_acre' => 32.94,
      'custom_arm_acre' => 20.50,
      'fuel_arm_acre' => 30.00,
      'labor_arm_acre' => 10.00,
      'repairs_arm_acre' => 10.00,
      'insurance_other_acre' => 20.00,
      'harvesting_arm_acre' => 35.00
    ]);

    //beans
    Defaultexpenses::create([
      'crop_id' => 2,
      'fertilizer_dist_acre' => 23.50,
      'seed_dist_acre' => 60.50,
      'fungicide_dist_acre' => 28.81,
      'herbicide_dist_acre' => 26.38,
      'custom_arm_acre' => 26.00,
      'fuel_arm_acre' => 30.00,
      'labor_arm_acre' => 10.00,
      'repairs_arm_acre' => 10.00,
      'insurance_other_acre' => 20.00,
      'harvesting_arm_acre' => 35.00
    ]);

    //sorghum
    Defaultexpenses::create([
      'crop_id' => 3,
      'fertilizer_dist_acre' => 69.00,
      'seed_dist_acre' => 18.50,
      'herbicide_dist_acre' => 23.23,
      'insecticide_dist_acre' => 16.00,
      'custom_arm_acre' => 27.50,
      'fuel_arm_acre' => 10.00,
      'labor_arm_acre' => 10.00,
      'repairs_arm_acre' => 8.00,
      'insurance_other_acre' => 20.00,
      'harvesting_arm_acre' => 35.00
    ]);

    //wheat
    Defaultexpenses::create([
      'crop_id' => 4,
      'fertilizer_dist_acre' => 78.34,
      'seed_dist_acre' => 45.60,
      'fungicide_dist_acre' => 13.23,
      'herbicide_dist_acre' => 23.49,
      'insecticide_dist_acre' => 0.00,
      'custom_arm_acre' => 29.45,
      'fuel_arm_acre' => 0.00,
      'labor_arm_acre' => 18.00,
      'repairs_arm_acre' => 10.00,
      'insurance_other_acre' => 20.00,
      'harvesting_arm_acre' => 35.00
    ]);

    //cotton
    Defaultexpenses::create([
      'crop_id' => 5,
      'fertilizer_dist_acre' => 107.05,
      'seed_dist_acre' => 84.50,
      'fungicide_dist_acre' => 5.50,
      'herbicide_dist_acre' => 61.21,
      'insecticide_dist_acre' => 51.95,
      'custom_arm_acre' => 58.00,
      'fuel_arm_acre' => 30.00,
      'labor_arm_acre' => 24.00,
      'repairs_arm_acre' => 20.00,
      'insurance_other_acre' => 20.00,
      'harvesting_arm_acre' => 90.00,
      'misc_arm_acre' => 6.00
    ]);

    //rice
    Defaultexpenses::create([
      'crop_id' => 6,
      'fertilizer_dist_acre' => 104.50,
      'seed_dist_acre' => 75.00,
      'fungicide_dist_acre' => 13.23,
      'herbicide_dist_acre' => 76.76,
      'insecticide_dist_acre' => 5.33,
      'custom_arm_acre' => 49.50,
      'fuel_arm_acre' => 70.00,
      'labor_arm_acre' => 27.00,
      'repairs_arm_acre' => 20.00,
      'insurance_other_acre' => 20.00,
      'harvesting_arm_acre' => 60.00,
      'misc_arm_acre' => 90.00
    ]);

    //peanuts
    Defaultexpenses::create([
      'crop_id' => 7,
      'fertilizer_dist_acre' => 107.05,
      'seed_dist_acre' => 84.50,
      'fungicide_dist_acre' => 5.50,
      'herbicide_dist_acre' => 61.21,
      'insecticide_dist_acre' => 51.95,
      'custom_arm_acre' => 58.00,
      'fuel_arm_acre' => 30.00,
      'labor_arm_acre' => 24.00,
      'repairs_arm_acre' => 20.00,
      'insurance_other_acre' => 20.00,
      'harvesting_arm_acre' => 90.00,
      'misc_arm_acre' => 6.00
    ]);

    //cane
    Defaultexpenses::create([
      'crop_id' => 8,
      'fertilizer_dist_acre' => 107.05,
      'seed_dist_acre' => 84.50,
      'fungicide_dist_acre' => 5.50,
      'herbicide_dist_acre' => 61.21,
      'insecticide_dist_acre' => 51.95,
      'custom_arm_acre' => 58.00,
      'fuel_arm_acre' => 30.00,
      'labor_arm_acre' => 24.00,
      'repairs_arm_acre' => 20.00,
      'insurance_other_acre' => 20.00,
      'harvesting_arm_acre' => 90.00,
      'misc_arm_acre' => 6.00
    ]);
  }

}