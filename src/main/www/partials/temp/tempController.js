import "angular";

angular.module("temp", [])
    .controller("tempCtrl", ($scope) => {

        $scope.test = 1;
        console.log(angular.copy)
    });

