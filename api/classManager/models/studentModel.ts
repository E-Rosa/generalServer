class StudentCard {
  name: string;
  status: string;
  id: string;
  constructor(name: string, status: string, id: string) {
    this.name = name;
    this.status = status;
    this.id = id;
  }
}

class StudentProfile {
  name: string;
  status: string;
  id: string;
  birthday: string;
  subscription: string;
  city: string;
  level: string;
  frequency: string;
  description: string;
  teacher_id: string;
  teacher_name: string;

  constructor(
    name: string,
    status: string,
    id: string,
    birthday: string,
    city: string,
    level: string,
    subscription: string,
    frequency: string,
    description: string,
    teacher_name: string,
    teacher_id: string
  ) {
    this.name = name;
    this.status = status;
    this.id = id;
    this.birthday = birthday.toString().split("").slice(0, 15).join("");
    this.city = city;
    this.level = level;
    this.subscription = subscription.toString().split("").slice(0, 15).join("");
    this.frequency = frequency;
    this.description = description;
    this.teacher_name = teacher_name;
    this.teacher_id = teacher_id;
  }
}

function createStudentCards(data: any): object[] {
  let a: object[] = [];
  if (data.rows[0] != undefined) {
    for (let i = 0; i < data.rows.length; i++) {
      let name: string = data.rows[i].student_name;
      let status: string = data.rows[i].student_status;
      let id: string = data.rows[i].student_id;
      let card: object = new StudentCard(name, status, id);
      a.push(card);
    }
  } 
  return a;
}

function createStudentProfile(data: any): object[] | null {
  let a: object[] = [];
  if (data.rows[0] != undefined) {
    for (let i = 0; i < data.rows.length; i++) {
      let name: string = data.rows[i].student_name;
      let status: string = data.rows[i].student_status;
      let id: string = data.rows[i].student_id;
      let birthday: string = data.rows[i].student_birthday;
      let city: string = data.rows[i].student_city;
      let subscription: string = data.rows[i].student_subscription_date;
      let frequency: string = data.rows[i].student_frequency;
      let description: string = data.rows[i].student_description;
      let teacher_name: string = data.rows[i].teacher_name;
      let teacher_id: string = data.rows[i].teacher_id;
      let level: string = data.rows[i].student_level;
      let card: object = new StudentProfile(
        name,
        status,
        id,
        birthday,
        city,
        level,
        subscription,
        frequency,
        description,
        teacher_name,
        teacher_id
      );
      a.push(card);
    }
    return a;
  } else {
    return null;
  }
}

export {
  StudentCard,
  StudentProfile,
  createStudentCards,
  createStudentProfile,
};

//tsc --module commonjs ./api/models/studentModel.ts
