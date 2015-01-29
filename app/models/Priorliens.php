<?php

class Priorliens extends \Eloquent
{
    protected $fillable = ['loan_id', 'lien_holder', 'city_state', 'contact', 'phone', 'email', 'projected_crops', 'ins_over_discount', 'fsa_payments', 'claims', 'other', 'total'];

    // RELATIONSHIPS
    public function loan()
    {
        return $this->belongsTo('Loan', 'loan_id');
    }
}