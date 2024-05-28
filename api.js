// let app = angular.module('charList', []);

// app.controller('myCtrl',function($scope,$http) {
//     $scope.characters = [];

//     $http({
//         method : "GET",
//         url : "https://hp-api.onrender.com/api/characters"
//     }).then(function(response){
//         $scope.characters = response.data;
//     },function(reseponse){
//         $scope.content = "something went wrong";
//     });
// });


let app = angular.module('charList', []);

app.controller('myCtrl', function($scope, $http) {
    $scope.characters = [];
    $scope.searchText = "";

    $http.get('https://hp-api.onrender.com/api/characters')
        .then(function(response) {
            $scope.characters = response.data;
        }, function(response) {
            $scope.content = "something went wrong";
        });
        $scope.search = function(){

        };
});