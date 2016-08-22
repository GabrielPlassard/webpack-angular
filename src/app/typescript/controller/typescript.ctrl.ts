export class TypescriptCtrl {

    public $inject = ['$scope'];

    constructor(private $scope: angular.IScope) {
        this.$scope['title'] = 'This is the typescript controller';
    }
}