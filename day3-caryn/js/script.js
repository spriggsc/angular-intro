angular.module('myPostApp', []);
angular.module('myPostApp')
    .controller('myCtlr', function($scope) {
        $scope.objectAppContent = [
            {title: 'one', content:'hello'},
            {title: 'two', content:'Angular'},
            {title: 'three', content:'World'}
        ];
        $scope.additem = function () {
            $scope.addMe.push($scope.objectAppContent);
        };
    });
