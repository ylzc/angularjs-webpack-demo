import "angular";
import datepicker from 'angular-ui-bootstrap/src/datepicker';
import _ from "lodash";

angular.module("temp", [
    datepicker
])
    .controller("tempCtrl", ($scope) => {

        console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));

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

