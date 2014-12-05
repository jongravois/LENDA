<?php

class County extends \Eloquent {
  public $timestamps = false;
  protected $fillable = ['state_id','location_id','county','label','locale','price_corn_irr','price_corn_ni','price_soybeans_irr','price_soybeans_ni','price_soybeans_facirr','price_soybeans_facni','price_sorghum_irr','price_sorghum_ni','price_wheat_irr','price_wheat_ni','price_cotton_irr','price_cotton_ni','price_rice_irr','price_rice_ni','price_peanuts_irr','price_peanuts_ni','price_sugarcane_irr','price_sugarcane_ni','insured_price_corn_irr','insured_price_corn_ni','insured_price_soybeans_irr','insured_price_soybeans_ni','insured_price_soybeans_facirr','insured_price_soybeans_facni','insured_price_sorghum_irr','insured_price_sorghum_ni','insured_price_wheat_irr','insured_price_wheat_ni','insured_price_cotton_irr','insured_price_cotton_ni','insured_price_rice_irr','insured_price_rice_ni','insured_price_peanuts_irr','insured_price_peanuts_ni','insured_price_sugarcane_irr','insured_price_sugarcane_ni','yield_corn_irr','yield_corn_ni','yield_soybeans_irr','yield_soybeans_ni','yield_soybeans_facirr','yield_soybeans_facni','yield_sorghum_irr','yield_sorghum_ni','yield_wheat_irr','yield_wheat_ni','yield_cotton_irr','yield_cotton_ni','yield_rice_irr','yield_rice_ni','yield_peanuts_irr','yield_peanuts_ni','yield_sugarcane_irr','yield_sugarcane_ni'];

  /* RELATIONSHIPS */
  public function states()
  {
    return $this->belongsTo('State', 'state_id');
  }

  public function farms()
  {
    return $this->hasMany('Farm','county_id');
  }

}