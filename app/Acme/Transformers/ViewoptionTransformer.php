<?php namespace Acme\Transformers;

class ViewoptionTransformer extends Transformer{

  public function transform($arr)
  {
    //return $arr;
    return [
      'id' => $arr['id'],
      'user_id' => $arr['user_id'],
      'voRegion' => (boolean) $arr['voRegion'],
      'voSeason' => (boolean) $arr['voSeason'],
      'voDistributor' => (boolean) $arr['voDistributor'],
      'voAgency' => (boolean) $arr['voAgency'],
      'voCloseDate' => (boolean) $arr['voCloseDate'],
      'voCommitTotal' => (boolean) $arr['voCommitTotal'],
      'voCommitArm' => (boolean) $arr['voCommitArm'],
      'voCommitDistributor' => (boolean) $arr['voCommitDistributor'],
      'voCommitOther' => (boolean) $arr['voCommitOther'],
      'voFeePercentage' => (boolean) $arr['voFeePercentage'],
      'voFeeTotal' => (boolean) $arr['voFeeTotal'],
      'voRateArm' => (boolean) $arr['voRateArm'],
      'voRateDist' => (boolean) $arr['voRateDist'],
      'voBalanceDue' => (boolean) $arr['voBalanceDue'],
      'voAcresTotal' => (boolean) $arr['voAcresTotal'],
      'voAcresCorn' => (boolean) $arr['voAcresCorn'],
      'voAcresSoybeans' => (boolean) $arr['voAcresSoybeans'],
      'voAcresSorghum' => (boolean) $arr['voAcresSorghum'],
      'voAcresWheat' => (boolean) $arr['voAcresWheat'],
      'voAcresCotton' => (boolean) $arr['voAcresCotton'],
      'voAcresRice' => (boolean) $arr['voAcresRice'],
      'voAcresPeanuts' => (boolean) $arr['voAcresPeanuts'],
      'voAcresSugarcane' => (boolean) $arr['voAcresSugarcane'],
      'voAcresOther' => (boolean) $arr['voAcresOther'],
      'voIconAddendum' => (boolean) $arr['voIconAddendum'],
      'voIconCross' => (boolean) $arr['voIconCross'],
      'voIconBankruptcy' => (boolean) $arr['voIconBankruptcy'],
      'voIcon3pcredit' => (boolean) $arr['voIcon3pcredit'],
      'voIconAddedland' => (boolean) $arr['voIconAddedland'],
      'voIconDisbursement' => (boolean) $arr['voIconDisbursement'],
      'voIconAttachments' => (boolean) $arr['voIconAttachments']
    ];
  }
}