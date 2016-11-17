angular.module("App",["ngRoute"])
.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "templates/products.html",
            controller: "Products"
        })
        .when("/basket", {
            templateUrl : "templates/basket.html",
            controller: "Basket"
        })
        .when("/contacts", {
            templateUrl : "templates/contacts.html"
        })
        .when("/profile", {
            templateUrl : "templates/profile.html"
        });
})
.service("Info", require("./services/info.js"))
.controller("Basket", function ($scope, $http) {
    $http.get("/basket").then(function (ret)
    {
        if (ret.data.error)
        {
            alert(ret.data.error);
        }
        else
        {
            $scope.basket = ret.data;
        }
    })
})
.controller("Menu", function($scope,$http, Info)
{
    $scope.info = Info;
})
.controller("Products", function($scope,$http,Info)
{
    $scope.info = Info;
    $http.get("/products").then(function(ret)
    {
            $scope.products = ret.data;
    });
});