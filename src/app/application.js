var angular = require('angular');
var javascriptModule = require('./javascript/module');

angular.element(document).ready(function() {
    angular.bootstrap(document, [javascriptModule]);
});