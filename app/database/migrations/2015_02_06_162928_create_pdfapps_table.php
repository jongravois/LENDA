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
			$table->integer('rank');
			$table->boolean('isVisible')->default(1);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('pdfapps');
	}

}
