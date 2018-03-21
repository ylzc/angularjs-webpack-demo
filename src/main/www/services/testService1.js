import "angular";

angular
    .module("services.testServices", [])
    .service("testService1", () => {
        let s = {};

        function get(key) {
            return s[key]
        }

        function set(key, value) {
            s[key] = value;
            return s;
        }

        return {
            get: get,
            set: set
        };

    });