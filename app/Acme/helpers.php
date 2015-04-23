<?php

function calcAdjProd($arr)
{
    return ( (double) $arr['acres'] * ((double) $arr['prod_share'] / 100) * (double) $arr['prod_yield'] * (double) $arr['prod_price']) + (((double) $arr['bkprice'] - (double) $arr['prod_price']) * (double) $arr['bkqty']) - ((double) $arr['harvest'] * (double) $arr['prod_yield'] * (double) $arr['acres']) + ((double) $arr['rebates'] * (double) $arr['prod_yield'] * (double) $arr['acres'] * ((double) $arr['prod_share'] / 100));
}
function calcDiscAdjProd($arr)
{
    return ((double) $arr['disc_prod_percent'] / 100) * ( (double) $arr['acres'] * ((double) $arr['prod_share'] / 100) * (double) $arr['prod_yield'] * (double) $arr['prod_price']) + (((double) $arr['bkprice'] - (double) $arr['prod_price']) * (double) $arr['bkqty']) - ((double) $arr['harvest'] * (double) $arr['prod_yield'] * (double) $arr['acres']) + ((double) $arr['rebates'] * (double) $arr['prod_yield'] * (double) $arr['acres'] * ((double) $arr['prod_share'] / 100));
}
function calcDiscIns($arr)
{
    return ((((double) $arr['ins_price'] * ((double) $arr['ins_level'] / 100) * (double) $arr['ins_yield']) - (double) $arr['ins_premium']) * ((double) $arr['acres'] * ((double) $arr['ins_share'] / 100)) - ((double) $arr['acres'] * ((double) $arr['prod_share'] / 100) * (double) $arr['prod_yield'] * (double) $arr['prod_price']) * ((double) $arr['disc_prod_percent'] / 100)) * .8;
}
function calcDiscProd($arr)
{
    return ((double) $arr['acres'] * ((double) $arr['prod_share'] / 100) * (double) $arr['prod_yield'] * (double) $arr['prod_price']) * ((double) $arr['disc_prod_percent'] / 100);
}
function calcInsDiscProd($arr)
{
    return (((double) $arr['ins_price'] * ((double) $arr['ins_level'] / 100) * (double) $arr['ins_yield']) - (double) $arr['ins_premium']) * ((double) $arr['acres'] * ((double) $arr['ins_share'] / 100)) - ((double) $arr['acres'] * ((double) $arr['prod_share'] / 100) * (double) $arr['prod_yield'] * (double) $arr['prod_price']) * ((double) $arr['disc_prod_percent'] / 100);
}
function calcInsGuaranty($arr)
{
    return (((double) $arr['ins_price'] * ((double) $arr['ins_level'] / 100) * (double) $arr['ins_yield']) - (double) $arr['ins_premium']) * ((double) $arr['acres'] * ((double) $arr['ins_share'] / 100));
}
function calcProd($arr)
{
    return ((double) $arr['acres'] * ((double) $arr['prod_share'] / 100) * (double) $arr['prod_yield'] * (double) $arr['prod_price']);
}
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
    $acresIrr = DB::table('farms')
        ->where('loan_id', $loanID)
        ->where('crop_id', $cropID)
        ->sum('irr');
    $acresNi = DB::table('farms')
        ->where('loan_id', $loanID)
        ->where('crop_id', $cropID)
        ->sum('ni');
    return (double) $acresIrr + $acresNi;
}
function getLoanTotalAcres($id)
{
    $acresIrr = DB::table('farms')
        ->where('loan_id', $id)
        ->sum('irr');
    $acresNi = DB::table('farms')
        ->where('loan_id', $id)
        ->sum('ni');
    return (double) $acresIrr + $acresNi;
}

