<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCommitteespecsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('committeespecs', function(Blueprint $table)
		{
			$table->increments('id');
            $table->integer('loantype_id');
            $table->double('min_amount')->default(0);
            $table->double('max_amount')->default(0);
            $table->integer('member_count')->default(0);
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('committeespecs');
	}

}
