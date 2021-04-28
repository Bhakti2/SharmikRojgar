var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http){
    $http.get("https://shamikrojgar.jugalkpatel.repl.co/posts")
    .then(function(response){
        console.log(response.data);
        $scope.persons = response.data.data;
        console.log("persons",$scope.persons);
    })
})