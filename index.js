function returnFirstTwoDrivers(drivers) {
    if (drivers.length >= 2) {
    return [drivers[0], drivers[1]];
    } else {
    return drivers;
    }
    }
function returnLastTwoDrivers(drivers){
    if (drivers.length >= 4) {
    return [drivers[2], drivers[3]];
    } else {
    return drivers;
    }
    }
    let allDrivers = ["Driver 1", "Driver 2", "Driver 3", "Driver 4"];
    const firstTwoDrivers = returnFirstTwoDrivers(allDrivers);
    const lastTwoDrivers = returnLastTwoDrivers(allDrivers);
    
    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(farePrice){
    return function(fare){
    return fare * farePrice
    }
}
    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);

    const selectDifferentDrivers = function(drivers, differentDrivers){
        return differentDrivers(drivers);
    }






