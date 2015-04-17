<?php

function errors_for($attribute, $errors)
{
  return $errors->first($attribute, '<span class="error">:message</span>');
}
function getCropYear()
{
  return DB::table('globals')->pluck('crop_year');
}
function getLoanCropAcres($loanID, $cropID)
{
    $acres = DB::table('farmpractices')
        ->where('loan_id', $loanID)
        ->where('crop_id', $cropID)
        ->sum('acres');
    return (double) $acres;
}
function getLoanTotalAcres($id)
{
    $acres = DB::table('farms')->where('loan_id', $id)->sum('acres');
    return (double) $acres;
}