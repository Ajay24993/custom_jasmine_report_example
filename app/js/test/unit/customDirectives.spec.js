/*describe('Testing AngularJS custom directives', function() {
    var scope, template, rootScope, isolateScope;
    beforeEach(module('testingAngularApp'));
    beforeEach(inject(function($compile, $rootScope) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        scope.destinations = [{
            city: "Tokiyo",
            country: "Japan"
        }, {
            city: "Paris",
            country: "France"
        }, {
            city: "London",
            country: "England"
        }];
        var element = angular.element("<span>{{destination.city}}, {{destination.country}} </span>" +
            "</span> <button ng-click = 'onRemove($index)'> Remove </button>");
        template = $compile(element)(scope);
        scope.$digest();
        isolateScope = element.isolateScope();
        console.log("isolateScope", isolateScope);
    }));

    fit('should remove the location city and country', function() {
        expect(scope.destinations.length).toBe(3);
        scope.removeDestination(0);
        expect(scope.destinations.length).toBe(1);
        expect(scope.destinations[0].city).toBe('London');
        expect(scope.destinations[0].country).toBe('England');
    });
});
*/