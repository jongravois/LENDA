<?php namespace Acme\Transformers;

class PdfAppTransformer extends Transformer
{

  public function transform($arr)
  {
    // return $arr;
    return [
      'id' => $arr['id'],
      'title' => $arr['title'],
      'description' => $arr['description'],
      'pdfLink' => $arr['pdfLink'],
      'rank' => (integer) $arr['rank'],
      'visible' => (boolean) $arr['isVisible']
    ];
  }
}