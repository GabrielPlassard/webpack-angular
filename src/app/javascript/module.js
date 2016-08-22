var javascriptCtrl = require('./controller/javascript.ctrl');

var moduleName = 'javascriptModule';
module.exports = moduleName;

angular.module(moduleName, [])
    .controller('JavascriptCtrl', javascriptCtrl);