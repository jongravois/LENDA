<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFarmcropsTable extends Migration
{

    public function up()
    {
        Schema::create('farmcrops', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('crop_year');
            $table->integer('loan_id');
            $table->integer('farm_id')->nullable();
            $table->integer('crop_id');
            $table->string('towhom_market')->nullable();
            $table->string('gin_mill')->nullable();
            $table->string('ins_type')->default('RP');
            $table->double('ins_price')->nullable();
            $table->integer('ins_level')->default(75);
            $table->double('ins_yield')->nullable();
            $table->double('ins_premium')->nullable();
            $table->double('irr')->nullable();
            $table->double('ni')->nullable();
            $table->double('mill_share')->nullable();
            $table->double('ins_share')->default(100);
            $table->double('prod_share')->default(100);
            $table->double('prod_yield')->nullable();
            $table->double('prod_price')->nullable();
            $table->double('bkqty')->nullable();
            $table->double('bkprice')->nullable();
            $table->double('harvest')->nullable();
            $table->double('rebates')->nullable();
            $table->double('disc_prod_percent')->default(50);
            $table->double('disc_ins_percent')->default(20);
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::drop('farmcrops');
    }

}
