<?php namespace Acme\Transformers;

class LoanfinancialsTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' => (integer) $arr['id'],
			'loan_id' => (integer) $arr['loan_id'],
			'amount_requested' => (double) $arr['amount_requested'],
			'collateral_equipment' => (double) $arr['collateral_equipment'],
			'collateral_realestate' => (double) $arr['collateral_realestate'],
			'total_acres' => (double) getLoanTotalAcres($arr['loan_id']),
            'fee_processing_percent' => (double) $arr['fee_processing'],
            'fee_processing_onTotal' => (boolean) $arr['fee_processing_onTotal'],
			'int_percent_arm' => (double) $arr['int_percent_arm'],
            'int_percent_dist' => (double) $arr['int_percent_dist'],
            'int_percent_other' => (double) $arr['int_percent_other'],
            'int_arm' => (double) $arr['int_arm'], //calc
			'int_dist' => (double) $arr['int_dist'], //calc
			'int_other' => (double) $arr['int_other'], //calc
			'interest' => (double) $arr['interest'], //calc
			'fsa_assignment_percent' => (double) $arr['fsa_assignment_percent'],
			'disc_ins_percent' => (double) $arr['disc_ins_percent'],
			'claims_percent' => (double) $arr['claims_percent'],
			'equipment_percent' => (double) $arr['equipment_percent'],
			'realestate_percent' => (double) $arr['realestate_percent'],
			'proc_fee' => (double) $arr['proc_fee'], //calc
			'proc_fee_arm_only' => (double) $arr['proc_fee_arm_only'], //calc
			'fee_service_percent' => (double) $arr['fee_service'], //calc
			'fee_service_onTotal' => (boolean) $arr['fee_service_onTotal'],
			'srvc_fee' => (double) $arr['srvc_fee'], //calc
			'srvc_fee_arm_only' => (double) $arr['srvc_fee_arm_only'], //calc
			'total_fee_percent' => (double) $arr['total_fee_percent'], //calc
			'fee_total' => (double) $arr['fee_total'], //calc
			'total_fsa_payment' => (double) $arr['total_fsa_payment'], //harvest
			'total_claims' => (double) $arr['total_claims'], //harvest
			'total_revenue' => (double) $arr['total_revenue'], //calc
			'total_balance' => (double) $arr['total_balance'], //calc
			'remaining_balance' => (double) $arr['remaining_balance'], //calc
			'balance_paid' => (double) $arr['balance_paid'],
			'cash_flow' => (double) $arr['cash_flow'], //calc
			'risk' => (double) $arr['risk'], //calc
			'risk_adj' => (double) $arr['risk_adj'], //calc
			'guaranty' => (double) $arr['guaranty'], //calc
			'prod' => (double) $arr['prod'], //calc
			'adj_prod' => (double) $arr['adj_prod'], //calc
			'disc_prod' => (double) $arr['disc_prod'], //calc
			'disc_prod_percent' => (double) $arr['disc_prod_percent'], //calc
			'non_rp_percent' => (double) $arr['non_rp_percent'],
			'disc_adj_prod' => (double) $arr['disc_adj_prod'], //calc
			'ins_disc_prod' => (double) $arr['ins_disc_prod'], //calc
			'disc_ins' => (double) $arr['disc_ins'], //calc
			'commit_arm' => (double) $arr['commit_arm'], //calc
			'commit_dist' => (double) $arr['commit_dist'], //calc
			'commit_other' => (double) $arr['commit_other'], //calc
			'commit_total' => (double) $arr['commit_total'], //calc
			'principal_arm' => (double) $arr['principal_arm'], //calc
			'principal_dist' => (double) $arr['principal_dist'], //calc
			'principal_other' => (double) $arr['principal_other'], //calc
			'principal' => (double) $arr['principal'], //calc
			'arm_and_dist' => (double) $arr['arm_and_dist'], //calc
			'collateral' => (double) $arr['collateral'] //calc
		];
	}

}