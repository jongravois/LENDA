<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePdfappsTable extends Migration {

	public function up()
	{
		Schema::create('pdfapps', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('title');
			$table->text('description');
			$table->string('pdfLink');
			$table->string('pdfImg');
			$table->string('docLink');
			$table->string('docImg');
			$table->integer('rank');
			$table->boolean('isVisible');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('pdfapps');
	}

}
