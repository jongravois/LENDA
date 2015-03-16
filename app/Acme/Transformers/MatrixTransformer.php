<?php namespace Acme\Transformers;

class MatrixTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return array(
			'id' =>	$arr['id'],
			'group_heading' =>	$arr['group_heading'],
			'responsibility' =>	$arr['responsibility'],
			'CEO' =>	$arr['CEO'],
			'ABM' =>	$arr['ABM'],
			'MGR' =>	$arr['MGR'],
			'OAS' =>	$arr['OAS'],
			'LBM' =>	$arr['LBM'],
			'LOF' =>	$arr['LOF'],
			'LAN' =>	$arr['LAN'],
			'CON' =>	$arr['CON'],
			'HRM' =>	$arr['HRM'],
			'IBM' =>	$arr['IBM'],
			'IAS' =>	$arr['IAS'],
			'COM' =>	$arr['COM']
		);
	}
}