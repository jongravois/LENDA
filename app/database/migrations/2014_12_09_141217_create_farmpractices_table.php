<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFarmpracticesTable extends Migration
{

    public function up()
    {
        Schema::create('farmpractices', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('crop_year')->default(2015);
            $table->integer('loan_id');
            $table->integer('farm_id')->nullable();
            $table->integer('crop_id');
            $table->string('towhom_market')->nullable();
            $table->string('gin_mill')->nullable();
            $table->double('acres')->default(0);
            $table->boolean('irrigated');
            $table->string('ins_type')->default('RP');
            $table->string('ins_option')->default('EU');
            $table->double('ins_price')->nullable();
            $table->double('ins_level')->default(75);
            $table->double('aph')->default(0);
            $table->double('ins_premium')->default(0);
            $table->double('ins_share')->default(100);
            $table->double('prod_share')->default(100);
            $table->double('mill_share')->default(0);
            $table->double('prod_yield')->default(0);
            $table->double('prod_price')->default(0);
            $table->double('bkqty')->default(0);
            $table->double('bkprice')->default(0);
            $table->double('harvest')->default(0);
            $table->double('rebates')->default(0);
            $table->double('crop_disc')->default(50);
            $table->double('fsa_disc')->default(20);
            $table->double('cropins_disc')->default(20);
            $table->double('nonrp_disc')->default(50);
            $table->double('sco_disc')->default(50);
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::drop('farmpractices');
    }

}
