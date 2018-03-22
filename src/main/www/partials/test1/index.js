import {app} from "../../app";
import './test1Controller';
import './test1.scss';
import test from './test1.html';

const view = {
    name: "test1",
    config: {
        url: "/test1",
        template: test,
        onEnter:function(){
            console.log("enter")
        },
        onExit:()=>{
            console.log("exit")
        }
    }
};

app
    .config(function ($stateProvider) {
        $stateProvider
            .state(view.name, view.config);
    });

export {
    view
};
