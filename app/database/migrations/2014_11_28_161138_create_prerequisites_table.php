<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePrerequisitesTable extends Migration {

	public function up()
	{
		Schema::create('prerequisites', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loan_id');
      $table->string('document');
      $table->string('path')->nullable();
      $table->date('date_requested')->nullable();
      $table->date('date_received')->nullable();
      $table->string('reason_pending')->nullable();
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('prerequisites');
	}

}
