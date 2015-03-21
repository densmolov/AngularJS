(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = stones;
    });

    app.controller('PanelController', function () {
        this.tab = 3;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    var stones = [
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
    ]   //var stones

})();