import "angular";
import datepicker from 'angular-ui-bootstrap/src/datepicker';

angular.module("temp", [
    datepicker
])
    .controller("tempCtrl", ($scope) => {

        $scope.test = 1;

        $scope.dat = new Date();
        $scope.format = "yyyy/MM/dd";
        $scope.altInputFormats = ['yyyy/M!/d!'];

        $scope.popup1 = {
            opened: false
        };
        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

    });

