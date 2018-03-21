let view = {
    name: "other",
    config: {
        url: "/other",
        templateProvider: function ($q) {
            'ngInject';
            let deferred = $q.defer();
            require.ensure(['./other.html'], (require) => {
                require("./other.scss");
                let template = require('./other.html');
                deferred.resolve(template);
            }, 'other');
            return deferred.promise;
        },
        resolve: {
            'otherModule': function ($q, $ocLazyLoad) {
                'ngInject';
                let deferred = $q.defer();
                require.ensure(['./otherController.js'], require => {
                    require('./otherController.js');
                    $ocLazyLoad.load({
                        name: "other"
                    });
                    deferred.resolve();
                }, 'other');
                return deferred.promise;
            }
        }
    }
};

export {
    view
}
