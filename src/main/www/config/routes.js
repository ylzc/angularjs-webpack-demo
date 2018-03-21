import { app } from "../app";
import { view as temp } from '../partials/temp';
import { view as test } from '../partials/test';
import { view as other } from "../partials/other";
import { view as test1 } from "../partials/test1";

app.config(($urlRouterProvider,$locationProvider,$stateProvider)=>{
    $locationProvider.hashPrefix("");
    $stateProvider
        .state(test.name,test.config)
        .state(other.name,other.config)
        .state(temp.name,temp.config)
        .state(test1.name,test1.config)

    $urlRouterProvider
        .otherwise("/test")
});