const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);

}

const returnLastTwoDrivers = function(array){
    return array.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(x) {
    return function(fare) {
        return   (x * fare)
    }

}
const fareDoubler = function(fare) {
    return (2 * fare)
}

const fareTripler = function(fare) {
    return (3 * fare)
}

function selectDifferentDrivers(arrayOfDrivers, callback) {
    const drivers = callback(arrayOfDrivers)
    console.log("arrayOfDrivers",arrayOfDrivers)
    console.log("callback",callback)
    console.log("drivers",drivers)
    return drivers
    
}     