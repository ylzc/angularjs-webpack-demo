let view = {
    name: "temp",
    config: {
        url: "/temp",
        templateProvider: function ($q) {
            'ngInject';
            let deferred = $q.defer();
            require.ensure(['./temp.html'], (require) => {
                require("./temp.scss");
                let template = require('./temp.html');
                deferred.resolve(template);
            }, 'temp');
            return deferred.promise;
        },
        resolve: {
            'tempModule': function ($q, $ocLazyLoad) {
                'ngInject';
                let deferred = $q.defer();
                require.ensure(['./tempController.js'], require => {
                    require('./tempController.js');
                    $ocLazyLoad.load({
                        name: "temp"
                    });
                    deferred.resolve();
                }, 'temp');
                return deferred.promise;
            }
        }
    }
};

export {
    view
}
