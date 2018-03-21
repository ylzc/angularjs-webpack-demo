import a from "./plugins/a";
import b from "./plugins/b";

const MODULE_NAME = "sucsoft.plugins";
angular
    .module(MODULE_NAME,[
        a,
        b
    ]);
export default MODULE_NAME;