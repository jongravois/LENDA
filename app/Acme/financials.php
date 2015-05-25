<?php

use Underscore\Underscore as _;

function processFinancials($loan)
{
    $fins = $loan['financials'];

    if($fins['fee_processing_onTotal']){
        $procFee = ((double)calcCommits($loan['id'], 'arm_adj') + (double)calcCommits($loan['id'], 'dist_adj')) * ((double)$fins['fee_processing']/100);
    } else {
        $procFee = (double)calcCommits($loan['id'], 'arm_adj') * ((double)$fins['fee_processing']/100);
    }

    if($fins['fee_service_onTotal']){
        $srvcFee = ((double)calcCommits($loan['id'], 'arm_adj') + (double)calcCommits($loan['id'], 'dist_adj')) * ((double)$fins['fee_service']/100);
    } else {
        $srvcFee = (double)calcCommits($loan['id'], 'arm_adj') * ((double)$fins['fee_service']/100);
    }

    $arm_commit = (double)calcCommits($loan['id'], 'arm_adj');
    $dist_commit = (double)calcCommits($loan['id'], 'dist_adj');
    $other_commit = (double)calcCommits($loan['id'], 'other_adj');
    $total_commit = (double)$arm_commit + (double)$dist_commit + (double)$other_commit;

    $principalArm = calcPrincipal($arm_commit, $srvcFee, $procFee);
    $principalDist = calcPrincipal($dist_commit, 0, 0);
    $principalOther = calcPrincipal($other_commit, 0, 0);

    $interestArm = calcInterest(calcPrincipal($arm_commit, $srvcFee, $procFee), $fins['int_percent_arm']/100);
    $interestDist = calcInterest(calcPrincipal($dist_commit, 0, 0), (double)$fins['int_percent_other']/100);
    $interestTotal = $interestArm + $interestDist;

    return [
        'amount_requested' => (double)$fins['amount_requested'],
        'total_balance' => (double)$fins['total_balance'],
        'balance_remaining' => (double)$fins['remaining_balance'],
        'claims_percent' => (double)$fins['claims_percent'],
        'supplement_insurance_discount_percent' => (double) $fins['supplement_insurance_discount_percent'],
        'fsa_assignment_percent' => (double)$fins['fsa_assignment_percent'],
        'other_discount_percent' => (double)$fins['other_discount_percent'],
        'disc_prod_percent' => (double)$fins['disc_prod_percent'],
        'equipment_percent' => (double)$fins['equipment_percent'],
        'realestate_percent' => (double)$fins['realestate_percent'],
        'non_rp_percent' => (double)$fins['non_rp_percent'],
        'disc_ins_percent' => (double)$fins['disc_ins_percent'],
        'int_percent_arm' => (double)$fins['int_percent_arm'],
        'int_percent_dist' => (double)$fins['int_percent_dist'],
        'int_percent_other' => (double)$fins['int_percent_other'],
        'fee_processing_percent' => (double)$fins['fee_processing'],
        'fee_processing_onTotal' => (boolean)$fins['fee_processing_onTotal'],
        'fee_service_percent' => (double)$fins['fee_service'],
        'fee_service_onTotal' => (boolean)$fins['fee_service_onTotal'],
        'total_fee_percent' => (double)$fins['total_fee_percent'],
        'collateral_equipment' => (double)$fins['collateral_equipment'],
        'collateral_realestate' => (double)$fins['collateral_realestate'],

        'total_acres' => (double)getLoanTotalAcres($loan['id']),
        'total_fsa_payment' => (double)getTotalFSAPayment($loan['id']),
        'total_claims' => (double)getTotalClaims($loan['id']),
        'commit_arm' => $arm_commit,
        'commit_dist' => $dist_commit,
        'commit_other' => $other_commit,
        'commit_total' => $total_commit,
        'proc_fee' => (double)$procFee,
        'proc_fee_arm_only' => (double)$arm_commit * ((double)$fins['fee_processing']/100),
        'srvc_fee' => (double)$srvcFee,
        'srvc_fee_arm_only' => (double)$arm_commit * ((double)$fins['fee_service']/100),
        'fee_total' => (double)$procFee + (double)$srvcFee,
        'principal_arm' => $principalArm,
        'principal_dist' => $principalDist,
        'principal_other' => $principalOther,
        'principal' => (double)calcPrincipal($arm_commit, $srvcFee, $procFee) + (double)calcPrincipal($dist_commit, 0, 0) + (double)calcPrincipal($other_commit, 0, 0),
        'int_arm' => $interestArm,
        'int_dist' => $interestDist,
        'int_total' => $interestTotal,
        'cash_flow' => 999999,
        'risk' => 999999,
        'adjusted_risk' => 999999

        /* THESE MAY NOT BE NEEDED */
        //'prod' => calcCropValue(getLoanTotalAcres($loan['id']), prod_share, prod_yield, price),
        //'bkd_val' => 0, //(bkprice-price)*yield-(acres*harvest*yield)
        //'rebate_val' => 0, // (rebates*yield*share/100*acres)
        //'adj_prod' => (double)$fins['adj_prod'], //(prod+crops_bkd_val+crops_rebate_val
        //'collateral' => (double)$fins['collateral']
        //'guaranty' => (double)$fins['guaranty'],
        //'disc_adj_prod' => (double)$fins['disc_adj_prod'],
        //'ins_disc_prod' => (double)$fins['ins_disc_prod'],
        //'disc_ins' => (double)$fins['disc_ins'],
        //'total_revenue' => (double)$fins['total_revenue']
    ];
}

function calcCommits($loanID, $entity)
{
    $commit = 0;

    for($c=1; $c<10; $c++){
        $acres = fetchAcresByCrop($loanID, $c);
        $exps = fetchExpTotal($loanID, $c, $entity);
        $commit +=  ((double)$acres * (double)$exps);
    } // end for

    return $commit;
}

function calcCropValue($acres, $prod_share, $prod_yield, $price)
{
    return (double)$acres * ((double)$prod_share/100) * (double)$prod_yield * (double)$price;
}

function calcInterest($principal, $percent)
{
    return 0.75 * 0.5 * (double)$percent * (double)$principal;
}

function calcPrincipal($commit, $svcFee, $procFee)
{
    return (double)$commit + (double)$svcFee + (double)$procFee;
}

function fetchAcresByCrop($loanID, $cropID)
{
    return Loancrop::where('loan_id', $loanID)->where('crop_id', $cropID)->pluck('acres');
}

function fetchExpTotal($loanID, $cropID, $entity)
{
    return Cropexpenses::where('loan_id', $loanID)->where('crop_id', $cropID)->sum($entity);
}

function getTotalFSAPayment($loanID)
{
    return Loancrop::where('loan_id', $loanID)->sum('fsa_payment');
}

function getTotalClaims($loanID)
{
    return Loancrop::where('loan_id', $loanID)->sum('claims');
}


