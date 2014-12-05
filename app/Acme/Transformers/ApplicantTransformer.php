<?php namespace Acme\Transformers;

use Carbon\Carbon;

class ApplicantTransformer extends Transformer{

	public function transform($arr)
	{
		$dobby = $arr['dob'];
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'applicant' => $arr['applicant'],
			'grade' => $arr['grade'],
			'entity_id' => $arr['entity_id'],
			'entity' => $arr['entitytype']['entitytype'],
			'loc_id' => 	$arr['location']['id'],
			'location' => $arr['location']['location'],
			'loc_abr' => $arr['location']['loc_abr'],
			'ssn' => $arr['ssn'],
			'email' => $arr['email'],
			'phone' => $arr['phone'],
			'address' => $arr['address'],
			'city' => $arr['city'],
			'state_id' => $arr['state_id'],
			'state' => $arr['state']['state'],
			'state_abr' =>	 $arr['state']['abr'],
			'zip' => $arr['zip'],
			'dob' => $dobby->format('m/d/Y'),
			'spouse' =>	$arr['spouse'],
			'spouse_ssn' =>	$arr['spouse_ssn'],
			'spouse_phone' => $arr['spouse_phone'],
			'spouse_email' => $arr['spouse_email']
		];
	}
}