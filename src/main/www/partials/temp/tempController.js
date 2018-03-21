import "angular";
import modal from 'angular-ui-bootstrap/src/modal';
import _ from "lodash";
import tempModal from "./tempModal.html";

angular
    .module("temp", [
        modal
    ])
    .controller("tempCtrl", ($scope, $uibModal) => {

        console.log(_.defaults({'a': 1}, {'a': 3, 'b': 2}));

        $scope.test = 1;

        $scope.openModal = () => {
            let modal = $uibModal.open({
                template: tempModal,
                controller: "tempModalCtrl",
                size: 'md'
            });
            modal
                .result
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    })
    .controller("tempModalCtrl", ($uibModalInstance, $scope) => {
        $scope.cancel = () => {
            $uibModalInstance.dismiss("cancel");
        };

        $scope.close = () => {
            $uibModalInstance.close("close");
        };
    });

