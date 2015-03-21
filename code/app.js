(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('PanelController', function () {
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
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