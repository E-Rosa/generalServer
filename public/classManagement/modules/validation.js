"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStudentProfile = exports.checkStorage = void 0;
function checkStorage(key) {
    if (sessionStorage.getItem(key) != null) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkStorage = checkStorage;
function validateStudentProfile(profile) {
    if (profile.name.length > 150) {
        console.log("Name must have 150 characters or less");
        return false;
    }
    if (profile.city.length > 50) {
        console.log("City must have 50 characters or less");
        return false;
    }
    else {
        return true;
    }
}
exports.validateStudentProfile = validateStudentProfile;
//tsc --module es6 ./public/modules/validation.ts
