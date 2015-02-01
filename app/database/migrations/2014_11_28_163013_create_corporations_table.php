<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCorporationsTable extends Migration
{

    public function up()
    {
        Schema::create('corporations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('loan_id');
            $table->string('corporation');
            $table->string('ssn');
            $table->string('address');
            $table->string('city');
            $table->string('state_id');
            $table->string('zip');
            $table->string('email');
            $table->string('phone');
            $table->text('description');
            $table->string('president');
            $table->string('vicepresident');
            $table->string('secretary');
            $table->string('treasurer');
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::drop('corporations');
    }

}
