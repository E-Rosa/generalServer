class StudentProfile {
    constructor(birthday, name, status, city, level, frequency, description, teacher_name, id) {
        this.name = name;
        this.status = status;
        this.city = city;
        this.level = level;
        this.frequency = frequency;
        this.description = description;
        this.teacher_name = teacher_name;
        this.id = id;
        this.birthday = birthday;
    }
}
export { StudentProfile };
//tsc --module es6 ./public/models/studentProfile.ts
