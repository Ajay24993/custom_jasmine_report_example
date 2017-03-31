describe('Testing AngularJS custom Filter or other filters', function() {
    beforeEach(module('testingAngularApp'));
    it('should return only the warm countries', inject(function($filter) {
        var filter = $filter("warmestDestinations");
        var destinations = [{
            city: "Beijing",
            country: "China",
            weather: {
                temp: 21
            }
        }, {
            city: "Moscow",
            country: "Russia"
        }, {
            city: "Mexico City",
            country: "Mexico",
            weather: {
                temp: 12
            }
        }, {
            city: "Lima",
            country: "Peru",
            weather: {
                temp: 15
            }
        }, ];
        expect(destinations.length).toBe(4);

        var warmestDestinations = filter(destinations, 15);
        expect(warmestDestinations.length).toBe(2);
        expect(warmestDestinations[0].city).toBe("Beijing");
        expect(warmestDestinations[1].city).toBe("Lima");
    }));
});
