// Code your solution in this file!
const returnFirstTwoDrivers = function([name1, name2, name3, name4]){
    return [`${name1}`, `${name2}`];
}

const returnLastTwoDrivers = function([name1, name2, name3, name4]){
    return [`${name3}`, `${name4}`];
}

const selectingDrivers = [
     returnFirstTwoDrivers,
     returnLastTwoDrivers
]

function createFareMultiplier(integer){
    return function multiplier (fare){
      return   integer * fare };
}

const fareDoubler = function (fare){
    return fare * 2;
}

const fareTripler = function (fare){
    return fare * 3;
}

function selectDifferentDrivers([name1, name2, name3, name4], returnLastTwoDrivers){
    return returnLastTwoDrivers([name1, name2, name3, name4]);
}