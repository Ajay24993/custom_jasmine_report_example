var testingAngluarApp = angular.module('testingAngularApp', []);

testingAngluarApp.factory('notify', ['$window', function(win) {
    var msgs = [];
    return function(msg) {
        msgs.push(msg);
        if (msgs.length === 3) {
            win.alert(msgs.join('\n'));
            msgs = [];
        }
    }
}]);

testingAngluarApp.directive('destinationDirectives', function() {
    return {
        scope: {
            destination: '=',
            apiKey: '=',
            onRemove: '&'
        },
        template: "<span>{{destination.city}}, {{destination.country}} </span>" +
            "</span> <button ng-click = 'onRemove($index)'> Remove </button>",
        contoller: function($scope, $rootScope) {
            $scope.removeDestination = function(index) {
                $scope.destinations.splice(index, 1);
            };
        }
    };
});

testingAngluarApp.service('conversionService', function() {
    this.convertKelvinToCelsius = function(temperature) {
        return Math.round(temperature - 273);
    };
    return this;
});
