<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCountiesTable extends Migration {

	public function up()
	{
		Schema::create('counties', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('state_id');
      $table->integer('location_id')->default(4);
      $table->string('county');
      $table->string('label')->unique();
      $table->string('locale')->unique();
      $table->double('price_corn_irr')->default(4.20);
      $table->double('price_corn_ni')->default(4.20);
      $table->double('insured_price_corn_irr')->default(4.25);
      $table->double('insured_price_corn_ni')->default(4.25);
      $table->double('yield_corn_irr')->default(139.00);
      $table->double('yield_corn_ni')->default(94.00);

      $table->double('price_soybeans_irr')->default(10.00);
      $table->double('price_soybeans_ni')->default(10.00);
      $table->double('price_soybeans_facirr')->default(10.00);
      $table->double('price_soybeans_facni')->default(10.00);
      $table->double('insured_price_soybeans_irr')->default(11.25);
      $table->double('insured_price_soybeans_ni')->default(11.25);
      $table->double('insured_price_soybeans_facirr')->default(11.25);
      $table->double('insured_price_soybeans_facni')->default(11.25);
      $table->double('yield_soybeans_irr')->default(31.00);
      $table->double('yield_soybeans_ni')->default(25.00);
      $table->double('yield_soybeans_facirr')->default(23.00);
      $table->double('yield_soybeans_facni')->default(18.00);

      $table->double('price_sorghum_irr')->default(4.00);
      $table->double('price_sorghum_ni')->default(4.00);
      $table->double('insured_price_sorghum_irr')->default(4.00);
      $table->double('insured_price_sorghum_ni')->default(4.00);
      $table->double('yield_sorghum_irr')->default(55.00);
      $table->double('yield_sorghum_ni')->default(55.00);

      $table->double('price_wheat_irr')->default(5.75);
      $table->double('price_wheat_ni')->default(5.75);
      $table->double('insured_price_wheat_irr')->default(6.64);
      $table->double('insured_price_wheat_ni')->default(6.64);
      $table->double('yield_wheat_irr')->default(46.00);
      $table->double('yield_wheat_ni')->default(46.00);

      $table->double('price_cotton_irr')->default(90.00);
      $table->double('price_cotton_ni')->default(90.00);
      $table->double('insured_price_cotton_irr')->default(93.00);
      $table->double('insured_price_cotton_ni')->default(93.00);
      $table->double('yield_cotton_irr')->default(649.00);
      $table->double('yield_cotton_ni')->default(467.00);

      $table->double('price_rice_irr')->default(0.135);
      $table->double('price_rice_ni')->default(0.135);
      $table->double('insured_price_rice_irr')->default(0.14);
      $table->double('insured_price_rice_ni')->default(0.14);
      $table->double('yield_rice_irr')->default(5820.00);
      $table->double('yield_rice_ni')->default(5820.00);

      $table->double('price_peanuts_irr')->default(2.30);
      $table->double('price_peanuts_ni')->default(2.30);
      $table->double('insured_price_peanuts_irr')->default(2.80);
      $table->double('insured_price_peanuts_ni')->default(2.80);
      $table->double('yield_peanuts_irr')->default(3000.00);
      $table->double('yield_peanuts_ni')->default(3000.00);

      $table->double('price_sugarcane_irr')->default(0.28);
      $table->double('price_sugarcane_ni')->default(0.28);
      $table->double('insured_price_sugarcane_irr')->default(0.16);
      $table->double('insured_price_sugarcane_ni')->default(0.16);
      $table->double('yield_sugarcane_irr')->default(5133.00);
      $table->double('yield_sugarcane_ni')->default(5133.00);
		});
	}


	public function down()
	{
		Schema::drop('counties');
	}

}
