<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLoancropsTable extends Migration
{

    public function up()
    {
        Schema::create('loancrops', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('crop_year');
            $table->integer('loan_id');
            $table->integer('crop_id');
            $table->boolean('is_active')->default(0);
            $table->double('acres')->default(0);
            $table->string('uom')->default('bu');
            $table->string('markettowhom')->nullable();
            $table->double('prod_price')->default(0);
            $table->double('prod_yield')->default(0);
            $table->double('prod_share')->default(0);
            $table->double('mill_share')->default(0);
            $table->double('ins_share')->default(0);
            $table->double('ins_price')->default(0);
            $table->double('bkqty')->default(0);
            $table->double('bkprice')->default(0);
            $table->double('overbook')->default(0);
            $table->string('gin_mill')->default('N/A');
            $table->double('harvest')->default(0);
            $table->double('rebates')->default(0);
            $table->double('claims')->default(0);
            $table->double('fsa_payment')->default(0);
            $table->double('percent_irrigated')->default(0);
            $table->double('break_even')->default(0);
            $table->double('aph')->nullable();
            $table->double('p1_yield')->nullable();
            $table->double('p2_yield')->nullable();
            $table->double('p3_yield')->nullable();
            $table->double('p4_yield')->nullable();
            $table->double('p5_yield')->nullable();
            $table->double('p6_yield')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('loancrops');
    }

}
