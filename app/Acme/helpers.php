<?php

function errors_for($attribute, $errors)
{
  return $errors->first($attribute, '<span class="error">:message</span>');
}
function getCropYear()
{
  return DB::table('globals')->pluck('crop_year');
}