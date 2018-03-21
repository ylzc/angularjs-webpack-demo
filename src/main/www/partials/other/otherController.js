import "angular";
import _ from "lodash";
import directive from "./otherDirectives";
import testService1 from "../../services/testService1";
import cgsPlugin from "../../directives/sucsoft";

angular
    .module("other", [
        directive,
        testService1,
        cgsPlugin
    ])
    .controller("otherCtrl", ($scope,testService1) => {

        console.log(testService1);

        console.log(_.defaults({'a': 1}, {'a': 3, 'b': 2}));

        $scope.test = 1;

    });

