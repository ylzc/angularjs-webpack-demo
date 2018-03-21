import { app } from "../app";

app
    .service("testService2", function () {

        let s = {};

        function get(key) {
            return s[key]
        }

        function set(key, value) {
            s[key] = value;
            return s;
        }

        return {
            get:get,
            set:set
        };

    });