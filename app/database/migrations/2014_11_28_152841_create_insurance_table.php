<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateInsuranceTable extends Migration {

	public function up()
	{
		Schema::create('insurance', function(Blueprint $table)
		{
			$table->increments('id');
            $table->integer('loan_id');
            $table->integer('farmpractice_id');
            $table->string('agency_id')->nullable();
            $table->string('agent_id')->nullable();
            $table->string('policy')->nullable();
            $table->boolean('is_assigned')->default(0);
            $table->string('fsn')->nullable();
            $table->integer('loancounty_id')->nullable();
            $table->integer('loancrop_id')->nullable();
            $table->string('practice')->nullable();
            $table->string('type')->nullable();
            $table->string('option')->nullable();
            $table->double('acres')->nullable();
            $table->double('price')->nullable();
            $table->double('yield')->nullable();
            $table->double('level')->nullable();
            $table->double('premium')->nullable();
            $table->double('share')->nullable();
            $table->double('guaranty')->nullable();
            $table->double('value')->nullable();
            $table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('insurance');
	}

}
