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
      'pdfImg' => $arr['pdfImg'],
      'docLink' => $arr['docLink'],
      'docImg' => $arr['docImg'],
      'rank' => (integer) $arr['rank'],
      'visible' => (boolean) $arr['isVisible']
    ];
  }
}