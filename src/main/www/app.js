import "angular";
import "@uirouter/angularjs";
import "angular-animate";
import "angular-sanitize";
import "oclazyload/dist/modules/ocLazyLoad.core";
import "oclazyload/dist/modules/ocLazyLoad.loaders.core";

let app = angular.module("sucsoft",[
    "ui.router",
    "ngAnimate",
    "ngSanitize",
    "oc.lazyLoad"
]);

export { app } ;