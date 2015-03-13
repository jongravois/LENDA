<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCalendarsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('calendars', function(Blueprint $table)
		{
			$table->increments('id');
            $table->text('title');
            $table->dateTime('start');
            $table->dateTime('end');
            $table->boolean('allDay')->default(0);
            $table->boolean('durationEditable')->default(0);
            $table->text('calendar_group')->nullable();
            $table->text('event_access')->nullable();
            $table->text('url')->nullable();
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
		Schema::drop('calendars');
	}

}
