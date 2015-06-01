<?php namespace Acme\Transformers;

class ViewfilterTransformer extends Transformer{

    public function transform($arr)
    {
        //return $arr;
        return [
            'id' => $arr['id'],
            'user_id' => $arr['user_id'],
            'vfAcresBeans' => $arr['vfAcresBeans'],
            'vfAcresBeansFAC' => $arr['vfAcresBeansFAC'],
            'vfAcresCane' => $arr['vfAcresCane'],
            'vfAcresCorn' => $arr['vfAcresCorn'],
            'vfAcresCotton' => $arr['vfAcresCotton'],
            'vfAcresOther' => $arr['vfAcresOther'],
            'vfAcresPeanuts' => $arr['vfAcresPeanuts'],
            'vfAcresRice' => $arr['vfAcresRice'],
            'vfAcresSorghum' => $arr['vfAcresSorghum'],
            'vfAcresTotal' => $arr['vfAcresTotal'],
            'vfAcresWheat' => $arr['vfAcresWheat'],
            'vfAddedLand' => (boolean)$arr['vfAddedLand'],
            'vfAddendums' => (boolean)$arr['vfAddendums'],
            'vfAgencies' => $arr['vfAgencies'],
            'vfAnalysts' => $arr['vfAnalysts'],
            'vfAppDate' => $arr['vfAppDate'],
            'vfAttachments' => (boolean)$arr['vfAttachments'],
            'vfBankruptcy' => (boolean)$arr['vfBankruptcy'],
            'vfCloseDate' => $arr['vfCloseDate'],
            'vfCommentAccount' => (boolean)$arr['vfCommentAccount'],
            'vfCommentAnalyst' => (boolean)$arr['vfCommentAnalyst'],
            'vfCommentCommittee' => (boolean)$arr['vfCommentCommittee'],
            'vfCommentSystem' => (boolean)$arr['vfCommentSystem'],
            'vfComments' => (boolean)$arr['vfComments'],
            'vfCommitArm' => $arr['vfCommitArm'],
            'vfCommitDist' => $arr['vfCommitDist'],
            'vfCommitOther' => $arr['vfCommitOther'],
            'vfCommitTotal' => $arr['vfCommitTotal'],
            'vfCropYears' => $arr['vfCropYears'],
            'vfDisbursements' => (boolean)$arr['vfDisbursements'],
            'vfDistributors' => $arr['vfDistributors'],
            'vfDueDateview' => $arr['vfDueDateview'],
            'vfFarmers' => $arr['vfFarmers'],
            'vfFee' => $arr['vfFee'],
            'vfLimitClose' => (boolean)$arr['vfLimitClose'],
            'vfLimitExceeded' => (boolean)$arr['vfLimitExceeded'],
            'vfLoanTypes' => $arr['vfLoanTypes'],
            'vfRateArm' => $arr['vfRateArm'],
            'vfRateDist' => $arr['vfRateDist'],
            'vfRateOther' => $arr['vfRateOther'],
            'vfRegions' => $arr['vfRegions'],
            'vfSeasons' => $arr['vfSeasons'],
            'vfStatusApproved' => (boolean)$arr['vfStatusApproved'],
            'vfStatusDenied' => (boolean)$arr['vfStatusDenied'],
            'vfStatusInProgress' => (boolean)$arr['vfStatusInProgress'],
            'vfStatusPaid' => (boolean)$arr['vfStatusPaid'],
            'vfStatusRecommended' => (boolean)$arr['vfStatusRecommended'],
            'vfStatusWithdrawn' => (boolean)$arr['vfStatusWithdrawn'],
            'vfThirdPart' => (boolean)$arr['vfThirdPart']
        ];
    }
}