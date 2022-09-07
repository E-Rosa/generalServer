function checkStorage(key: string): boolean {
  if (sessionStorage.getItem(key) != null) {
    return true;
  } else {
    return false;
  }
}

function validateStudentProfile(profile: any): boolean {
  if (profile.name.length > 150) {
    console.log("Name must have 150 characters or less");
    return false;
  }
  if (profile.city.length > 50) {
    console.log("City must have 50 characters or less");
    return false;
  } else {
    return true;
  }
}

export { checkStorage, validateStudentProfile };

//tsc --module es6 ./public/modules/validation.ts
