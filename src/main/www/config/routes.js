import { app } from "../app";
import { view as temp } from '../partials/temp';
import { view as test } from '../partials/test';

app.config(($urlRouterProvider,$locationProvider,$stateProvider)=>{
    $locationProvider.hashPrefix("");
    $stateProvider
        .state(test.name,test.config)
        .state(temp.name,temp.config);

    $urlRouterProvider
        .otherwise("/test")
});