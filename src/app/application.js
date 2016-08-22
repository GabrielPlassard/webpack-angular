var angular = require('angular');
var javascriptModule = require('./javascript/module');
var typescriptModule = require('./typescript/module');

angular.element(document).ready(function() {
    angular.bootstrap(document, [javascriptModule, typescriptModule.moduleName]);
});