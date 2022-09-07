class StudentProfile {
  birthday: string;
  name: string;
  status: string;
  city: string;
  level: string;
  frequency: string;
  description: string;
  teacher_name: string;
  id: string;

  constructor(
    birthday:string,
    name: string,
    status: string,
    city: string,
    level: string,
    frequency: string,
    description: string,
    teacher_name: string,
    id: string
  ) {
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
