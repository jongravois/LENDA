<?php

use Underscore\Underscore as _;

function getAcresForCrop($obj, $cropID)
{
    $nCropID = (integer)$cropID-1;
    if($obj[$nCropID]['crop_id'] == $cropID){
        return $obj[$nCropID]['acres'];
    }
}
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
function getExpenseCategories($loanID)
{
    $cats = Cropexpenses::where('loan_id', $loanID)->get(['expense']);
    return array_unique($cats->all());
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
function getLoanTotalAcres($loanID)
{
    $acresIrr = DB::table('farms')
        ->where('loan_id', $loanID)
        ->sum('irr');
    $acresNi = DB::table('farms')
        ->where('loan_id', $loanID)
        ->sum('ni');
    return (double) $acresIrr + $acresNi;
}
function getUniqueAgencies($loanID)
{
    $ags = Agency::select('agency')->whereIn('id', function($q) use ($loanID){
        $q->from('insurance')
            ->selectRaw('DISTINCT(agency_id)')
            ->where('loan_id', $loanID);
    })->get();
    return implode(array_pluck($ags->all(), 'agency'), ', ');
}
function processAttachments($id) {
    $attachments = Attachment::where('loan_id', $id)-> get();
    return $attachments;
}
function processCrops($loanID)
{
    return [
        'corn' => [
            'crop_id' => 1,
            'crop' => 'corn',
            'name' => 'Corn',
            'is_active' => true,
            'acres' => 999999
        ],
        'soybeans' => [],
        'beansFAC' => [],
        'sorghum' => [],
        'wheat' => [],
        'cotton' => [],
        'rice' => [],
        'peanuts' => [],
        'sugarcane' => [],
        'other' => []
    ];
}
function processExpenses($loanID)
{
    $slim = trimExpenseCategories($loanID);

    $byCat =  _::groupBy($slim, function($item){
        return $item['expense'];
    });

    //will be each cat's total acre_arm, acre_dist, acre_other, acre_total, calc_arm, calc_dist, calc_other, calc_total - groupBy('expense')

    $byCrop = []; //will be each crop's total acres, expense, crop, name, arm, dist, other, per_acre, calc_arm, calc_dist, calc_other, calc_total
    $total = [];
    $totalCat = [];
    $totalCrop = [];
    $totalLoan = [];

    $arrExp = [
        'byCat' => $byCat, //$cats
        'byCrop' => [],
        'byEntry' => $slim,
        'total' => [
            'byCat' => [],
            'byCrop' => [],
            'byLoan' => []
        ]
    ];

    return $arrExp;
}
function processPartners($id)
{
    $newPartners = [];
    $partners = Partners::where('loan_id', $id)-> get();

    return $partners;
}
function trimExpenseCategories($loanID)
{
    $exps = Cropexpenses::where('loan_id', $loanID)->get();
    $slim = []; //will be all cropexpense records - limited fields & calcs

    foreach($exps as $exp){
        $newed = [
            'loancrop_id' => (integer) $exp['loancrop_id'],
            'crop' => $exp['loancrop']['crop']['crop'],
            'name' => $exp['loancrop']['crop']['name'],
            'cat_id' => (integer) $exp['cat_id'],
            'expense' => $exp['expense'],
            'acres' => (double) $exp['loancrop']['acres'],
            'arm' => (double) $exp['arm'],
            'arm_adj' => (double) $exp['arm_adj'],
            'dist' => (double) $exp['dist'],
            'dist_adj' => (double) $exp['dist_adj'],
            'other' => (double) $exp['other'],
            'other_adj' => (double) $exp['other_adj'],
            'per_acre' => (double) $exp['arm_adj'] + (double) $exp['dist_adj'] + (double) $exp['other_adj'],
            'calc_arm' => (double) $exp['arm_adj'] * (double) $exp['loancrop']['acres'],
            'calc_dist' => (double) $exp['dist_adj'] * (double) $exp['loancrop']['acres'],
            'calc_other' => (double) $exp['other_adj'] * (double) $exp['loancrop']['acres'],
            'calc_total' => ((double) $exp['arm_adj'] + (double) $exp['dist_adj'] + (double) $exp['other_adj']) * (double) $exp['loancrop']['acres']
        ];
        array_push($slim, $newed);
    }

    return $slim;
}

