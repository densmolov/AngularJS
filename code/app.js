(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Arkestone',
            price: 100,
            description: 'Tra-ta-ta...',
            canPurchase: true
        },
        {
            name: 'Thunderstone',
            price: 120,
            description: 'Ogo-go...',
            canPurchase: false
        }
    ]

})();