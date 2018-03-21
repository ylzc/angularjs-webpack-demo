import {app} from '../../app';
import "../../services/testService2";

app.controller("testCtrl", ($scope,testService2) => {
    $scope.page = {
        option: {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        }
    }
    testService2.set("test",{id:1});
    console.log(testService2)
})
