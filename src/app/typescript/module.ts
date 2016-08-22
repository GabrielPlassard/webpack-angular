import * as angular from "angular";
import {TypescriptCtrl} from "./controller/typescript.ctrl";

export var moduleName = 'typescriptModule';

angular.module(moduleName, [])
    .controller('TypescriptCtrl', TypescriptCtrl);