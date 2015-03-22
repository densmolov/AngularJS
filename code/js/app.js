(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = [
        {
            name: 'Arkenstone',
            price: 100,
            description: 'Tra-ta-ta...',
            image: "images/Arkenstone.png",
            canPurchase: true,
            reviews: [
                {
                    stars: 3,
                    body: "At least you should give it a try.",
                    author: "anonymous"
                },
                {
                    stars: 5,
                    body: "Awesome!",
                    author: "joe@mail.su"
                },
                {
                    stars: 1,
                    body: "Really awful, sorry.",
                    author: "TheRagChewer"
                }
            ]
        },
        {
            name: 'Dragon Eye',
            price: 120,
            description: 'Ogo-go...',
            image: "images/dragon_eye.jpg",
            canPurchase: false,
            reviews: [
                {
                    stars: 3,
                    body: "Never again.",
                    author: "tyrtyr"
                },
                {
                    stars: 2,
                    body: "Oh no!..",
                    author: "ape@mail.su"
                }
            ]
        }
    ];
    });

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

    app.directive('productTitle', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/product-title.html'
        };
    });

    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/product-panels.html',
            controller: function () {
                this.tab = 3;
                this.selectTab = function(setTab){
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panelCtrl'
        };
    });

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