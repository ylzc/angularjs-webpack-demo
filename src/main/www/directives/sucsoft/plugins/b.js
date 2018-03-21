import ngAnimate from "angular-animate";

const MODULE_NAME = "sucsoft.plugins.b";
angular
    .module(MODULE_NAME, [
        ngAnimate
    ])
    .directive("cgsB", () => {
        return {
            template:`
                <div>cgs-b</div>
            `
        }
    });
export default MODULE_NAME;