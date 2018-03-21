import ngSanitize from "angular-sanitize";

const MODULE_NAME = "sucsoft.plugins.a";
angular
    .module(MODULE_NAME, [
        ngSanitize
    ])
    .directive("cgsA", () => {
        return {
            template:`
                <div>cgs-a</div>
            `
        }
    });
export default MODULE_NAME;