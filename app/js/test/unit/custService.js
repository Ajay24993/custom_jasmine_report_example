describe('Testing AngularJS custom Service or predefined services', function() {
    var mock, notify,scope,httpBackend;
    beforeEach(module('testingAngularApp'));
    beforeEach(function() {
        module(function($provide) {
            var MockedConversionService = {
                convertKelvinToCelsius: function(temp) {
                    return Math.round(temp - 273);
                }
            };
            $provide.value('consersionService', MockedConversionService);
        });
    });
    beforeEach(inject(function($controller, $rootScope, $httpBackend, $timeout) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        ctrl = $controller('testingAngularCtrl', { $scope: scope });
    }));
    it('should update weather for a specific destination', function() {
        scope.destinations = {
            city: "London",
            country: "England"
        };
        httpBackend.expectGET("http://api.openweathermap.org/data/2.5/weather?q=" + scope.destinations.city + "&appid=" + scope.apiKey)
            .respond({
                weather: [{
                    main: "Rain",
                    description: "Light rain"
                }],
                main: { temp: 288 }
            });
        scope.getWeather(scope.destinations);
        httpBackend.flush();
        expect(scope.destinations.weather.main).toBe('Rain');
        expect(scope.destinations.weather.temp).toBe(15);
    });
});
