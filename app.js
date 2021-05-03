// document.querySelector('.img-btn').addEventListener('click', function()
// {
//     document.querySelector('.cont').classList.toggle('s-signup');
// });

var app = angular.module("myApp",["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/feed", {
      templateUrl: "feed.html",
    })
    .when("/job", {
      templateUrl: "job.html",
    })

    .otherwise({
      redirectTo: "./feed.html",
    });
});
app.controller("myCtrl", function ($scope, $http) {
  $http
    .get("https://shamikrojgar.jugalkpatel.repl.co/posts")
    .then(function (response) {
      console.log(response.data);
      $scope.persons = response.data.data;
      console.log("persons", $scope.persons);
    });
});

app.controller("jobCtrl", function ($scope, $http) {
  $http
    .get("https://shamikrojgar.jugalkpatel.repl.co/jobs")
    .then(function (response) {
      $scope.jobs = response.data.data;
    });
});
