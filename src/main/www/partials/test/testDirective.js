import {app} from '../../app';

app.directive('cgsEcharts', function ()
{
    return {
        restrict: 'A',
        scope: {
            options: '='
        },
        link: function (scope, element, attrs)
        {
            require.ensure([],(require)=> {
                const echarts = require("echarts");
                let chart;
                let chartId = attrs.cgsEcharts ? attrs.cgsEcharts : 'autoid';
                scope.$watch('options', function (n, o) {
                    if (scope.options) {
                        //init();
                        if (chart) {
                            chart.setOption(scope.options);
                        }
                    }
                }, true);
                scope.$on("chartChange", function (event) {
                    if (scope.options) {
                        //init();
                        if (chart) {
                            chart.setOption(scope.options);
                        }
                    }
                })

                function dispose() {
                    if (chart) {
                        chart.dispose();
                        $(window).unbind('resize.' + chartId);
                    }
                }

                function init() {
                    dispose();
                    // 安全检测，未显示却加载则不init

                    chart = echarts.init(element[0]);
                    // chart.showLoading({
                    //   text: '正在努力读取数据中……'
                    // });
                    // 为echarts对象加载数据
                    chart.setOption(scope.options);
                    // chart.hideLoading();
                    $(window).bind('resize.' + chartId, function () {
                        //						console.log(chartId);
                        chart.resize();
                        // chart.refresh();
                    });

                }

                init();

                scope.$on('$destroy', function () {
                    dispose();
                });
            },"echarts")
        }
    }
})
