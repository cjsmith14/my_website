angular
    .module("myApp",['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/state1");
        
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "app/partials/home.html"
            })
            .state('about', {
                url: "/about",
                templateUrl: "app/partials/about.html"   
            })
            .state('blog', {
                url: "/blog",
                templateUrl: "app/partials/blog.html"   
            })
    })