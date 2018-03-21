import {app} from '../../app';
import "../../services/testService2";

app.controller("test1Ctrl", ($scope, testService2) => {

    console.log(testService2.get("test"));

    $scope.test = {
        id: 999
    };

    console.log($scope.test);

});
