import "angular";

angular
    .module("other.directives",[])
    .directive("otherTest",()=>{
        return {
            template:`
                <div>otherTest</div>
            `
        }
    })

export default "other.directives";
