"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelParser = void 0;
class ModelParser {
    generateDatesArray(dateString, repeat) {
        let datesArray = [];
        let parsedDate = this.parseStringToDate(dateString);
        //add 7 days to date
        for (let i = 0; i < repeat * 4; i++) {
            datesArray.push(new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate() + 7 * i));
        }
        return datesArray;
    }
    parseStringToDate(frontEndDate) {
        let newArray = frontEndDate.split("-");
        let newDate = new Date(parseInt(newArray[0]), parseInt(newArray[1]) - 1, parseInt(newArray[2]));
        return newDate;
    }
    parseDateToString(date) {
        let a = [];
        let dateString = date.toLocaleDateString();
        let dayMonthYear = dateString.split("/");
        a.push(dayMonthYear[2]);
        a.push(dayMonthYear[1]);
        a.push(dayMonthYear[0]);
        return a.join("-");
    }
}
exports.ModelParser = ModelParser;
