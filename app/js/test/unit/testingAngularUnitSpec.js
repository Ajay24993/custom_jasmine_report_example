describe('Testing AngularJS Test Suite', function() {

    beforeEach(module('testingAngularApp'));

    var scope, ctrl, httpBackend, timeout, rootScope;
    beforeEach(inject(function($controller, $rootScope, $httpBackend, $timeout) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        timeout = $timeout;
        ctrl = $controller('testingAngularCtrl', { $scope: scope });
    }));
    describe('Testing AngularJS Controller', function() {
        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });
        it('should initialize the title in the scope', function() {
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Testing AngularJS Applications");
            expect(scope.title).not.toBe("Testing AnglrJS Applications");
        });
        it('should add two destination city and country', function() {
            expect(scope.destinations).toBeDefined();
            expect(scope.destinations.length).toBe(0);

            scope.newDestination = {
                city: "Pune",
                country: "India"
            }
            scope.addDestination();

            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe('Pune');
            expect(scope.destinations[0].country).toBe('India');

            scope.newDestination.city = "Berlin";
            scope.newDestination.country = "Germany";
            scope.addDestination();

            expect(scope.destinations.length).toBe(2);
            expect(scope.destinations[1].city).toBe('Berlin');
            expect(scope.destinations[1].country).toBe('Germany');
            expect(scope.destinations[0].city).toBe('Pune');
            expect(scope.destinations[0].country).toBe('India');
        });
        it('should remove the location city and country', function() {
            scope.destinations = [{
                city: "Paris",
                country: "France"
            }, {
                city: "London",
                country: "England"
            }];
            expect(scope.destinations.length).toBe(2);
            scope.removeDestination(0);
            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe('London');
            expect(scope.destinations[0].country).toBe('England');
        });
        it('should update weather for a specific destination', function() {
            spyOn(rootScope,'$broadcast');
            scope.destinations = {
                city: "London",
                country: "England"
            };
            httpBackend.expectGET("http://api.openweathermap.org/data/2.5/weather?q=" + scope.destinations.city + "&appid=" + scope.apiKey)
                .respond(500);
                /*.respond({
                    weather: [{
                        main: "Rain",
                        description: "Light rain"
                    }],
                    main: { temp: 288 }
                });*/
            scope.getWeather(scope.destinations);
            httpBackend.flush();
            /*expect(scope.destinations.weather.main).toBe('Rain');
            expect(scope.destinations.weather.temp).toBe(15);*/
            expect(rootScope.$broadcast).toHaveBeenCalled();
            expect(rootScope.$broadcast).toHaveBeenCalledWith('messageUpdated');
            expect(rootScope.$broadcast).toHaveBeenCalledTimes(1);
        });
        it('should remove error message after 3 seconds ', function() {
            scope.message = 'Error';
            expect(scope.message).toBe('Error');
            scope.$apply();
            timeout.flush();
            expect(scope.message).toBeNull();
        });
    });
});
fdescribe("A spy, when configured to fake a series of return values", function() {
  var foo, bar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, "getBar").and.returnValues("fetched first", "fetched second");

    foo.setBar(123);
  });

  it("tracks that the spy was called", function() {
    foo.getBar(123);
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called multiple times returns the requested values in order", function() {
    expect(foo.getBar()).toEqual("fetched first");
    expect(foo.getBar()).toEqual("fetched second");
    expect(foo.getBar()).toBeUndefined();
  });
});