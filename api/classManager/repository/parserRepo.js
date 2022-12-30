"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDatesArray = void 0;
class RepositoryParser {
}
function generateDatesArray(initialDate, repeat) {
    let datesArray = [];
    let transformedInitialDate = generateNewDateFromFrontEndDate(initialDate);
    //add 7 days to date
    for (let i = 0; i < repeat * 4; i++) {
        datesArray.push(new Date(transformedInitialDate.getFullYear(), transformedInitialDate.getMonth(), transformedInitialDate.getDate() + 7 * i));
    }
    return datesArray;
}
exports.generateDatesArray = generateDatesArray;
function generateNewDateFromFrontEndDate(frontEndDate) {
    let newArray = frontEndDate.split("-");
    let newDate = new Date(parseInt(newArray[0]), parseInt(newArray[1]) - 1, parseInt(newArray[2]));
    return newDate;
}
