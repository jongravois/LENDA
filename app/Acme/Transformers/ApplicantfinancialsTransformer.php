<?php namespace Acme\Transformers;

class ApplicantfinancialsTransformer extends Transformer{

    public function transform($arr)
    {
        //return $arr;
        return [
            'id' => (integer) $arr['id'],
            'loan_id' => (integer) $arr['loan_id'],
            'applicant_id' => (integer) $arr['applicant_id'],
            'cpa_financials' => (boolean) $arr['cpa_financials'],
            'bankruptcy' => (boolean) $arr['bankruptcy'],
            'judgements' => (boolean) $arr['judgements'],
            'credit_score' => (double) $arr['credit_score'],
            'experience' => (double) $arr['experience'],
            'grade' => $arr['grade'],
            'amount_requested' => (double) $arr['amount_requested'],
            'year_1_revenue' => (double) $arr['year_1_revenue'],
            'year_1_expenses' => (double) $arr['year_1_expenses'],
            'year_2_revenue' => (double) $arr['year_2_revenue'],
            'year_2_expenses' => (double) $arr['year_2_expenses'],
            'year_3_revenue' => (double) $arr['year_3_revenue'],
            'year_3_expenses' => (double) $arr['year_3_expenses'],
            'current_assets' => (double) $arr['current_assets'],
            'current_assets_factor' => (double) $arr['current_assets_factor'],
            'current_assets_liability' => (double) $arr['current_assets_liability'],
            'intermediate_assets' => (double) $arr['intermediate_assets'],
            'intermediate_assets_factor' => (double) $arr['intermediate_assets_factor'],
            'intermediate_assets_liability' => (double) $arr['intermediate_assets_liability'],
            'fixed_assets' => (double) $arr['fixed_assets'],
            'fixed_assets_factor' => (double) $arr['fixed_assets_factor'],
            'fixed_assets_liability' => (double) $arr['fixed_assets_liability'],
            'debt2asset_ratio' => (double) $arr['debt2asset_ratio'],
            'debt2asset_ratio_adj' => (double) $arr['debt2asset_ratio_adj'],
            'ratio_current' => (double) $arr['ratio_current'],
            'ratio_current_adj' => (double) $arr['ratio_current_adj'],
            'capWork' => (double) $arr['capWork'],
            'capWork_adj' => (double) $arr['capWork_adj'],
            'capBorrow' => (double) $arr['capBorrow'],
            'capBorrow_adj' => (double) $arr['capBorrow_adj']
        ];
    }

}