import "angular";
import "angular-ui-router";
import "angular-animate";
import "angular-sanitize";
import "oclazyload";

let app = angular.module("sucsoft",[
    "ui.router",
    "ngAnimate",
    "ngSanitize",
    "oc.lazyLoad"
]);

export { app } ;