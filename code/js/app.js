(function () {
    var app = angular.module('store', ['store-products']);

    // Dependency Injection
    app.controller('StoreController', ['$http', function($http) {
        var store = this;
        store.products = [];

        // Service
        $http.get('./data/products.json').success(function(data){
            store.products = data;
        });
    }]);

    /*app.controller('PanelController', function () {
        this.tab = 3;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });*/

    /*app.controller('ReviewController', function () {
        this.review = {};
        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        }
    });*/

    app.directive('reviewForm', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/review-form.html',
            controller: function () {
                this.review = {};
                this.addReview = function(product) {
                    product.reviews.push(this.review);
                    this.review = {};
                }
            },
            controllerAs: 'reviewCtrl'
        };
    });

})();
