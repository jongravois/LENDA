<?php

class PdfApp extends \Eloquent
{
  protected $table = 'pdfapps';
  protected $fillable = ['title', 'description', 'pdfLink', 'rank', 'isVisible'];
}