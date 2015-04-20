<?php namespace Acme\Transformers;

class AttachmentTransformer extends Transformer{

    public function transform($arr)
    {
        //return $arr;
        return [
            'id' => (integer) $arr['id'],
            'loan_id' => (integer) $arr['loan_id'],
            'title' => $arr['title'],
            'filename' => $arr['filename'],
            'filetype' => $arr['filetype'],
            'description' => $arr['description'],
            'uploaded' => $arr['created_at']->format('m/d/Y')
        ];
    }
}