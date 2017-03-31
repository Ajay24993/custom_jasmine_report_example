/*describe('Testing the spies functionality of the jasmine framework', function() {
    it('should check that the function addDestination is executed', function() {
        spyOn(scope, 'addDestination');
        expect(scope.destinations).toBeDefined();
            expect(scope.destinations.length).toBe(0);

            scope.newDestination = {
                city: "Pune",
                country: "India"
            }
            scope.addDestination();
            expect(scope.addDestination).toHaveBeenCalled();
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
});
*/