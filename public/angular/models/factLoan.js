(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('Loan', function (BaseModel) {

            //"class"
            function Loan(data) {
                this.id = data.id;
                this.loan_type = data.loan_type;
                this.crops = data.crops;
            }

            //set up inheritance
            BaseModel.extend(Loan);

            //getter!
            Object.defineProperty(Loan.prototype, 'totalAcres', {
                get: function () {
                    return this.crops.reduce(function (total, crop) {
                        return total + parseFloat(crop.acres) || 0;
                    }, 0);
                }
            });

            Loan.endpoint = 'loans';

            return Loan;
        });
})();
