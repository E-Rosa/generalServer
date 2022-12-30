import { ModelParser } from "./modelParser";

class StudentCardModel {
  name: string;
  status: string;
  id: string;
  constructor(name: string = "", status: string = "", id: string = "") {
    this.name = name;
    this.status = status;
    this.id = id;
  }
}
class StudentProfileModel {
  name: string;
  status: string;
  id: string;
  birthday: string;
  subscription: Date;
  city: string;
  level: string;
  frequency: string;
  description: string;
  teacher_id: string;
  teacher_name: string;
  credits: number;
  frontEnd: StudentProfileModelFrontEnd;
  constructor(
    constructor1: StudentProfileModel | undefined = undefined,
    name: string = "",
    status: string = "",
    id: string = "",
    birthday: string = "",
    city: string = "",
    level: string = "",
    subscription: Date = new Date(),
    frequency: string = "",
    description: string = "",
    teacher_name: string = "",
    teacher_id: string = "",
    credits: number = 0,
    frontEnd: StudentProfileModelFrontEnd = new StudentProfileModelFrontEnd()
  ) {
    let modelParser = new ModelParser();
    if (constructor1 != undefined) {
      this.name = constructor1.name;
      this.status = constructor1.status;
      this.id = constructor1.id;
      this.birthday = constructor1.birthday;
      this.city = constructor1.city;
      this.level = constructor1.level;
      this.subscription = constructor1.subscription;
      this.frequency = constructor1.frequency;
      this.description = constructor1.description;
      this.teacher_name = constructor1.teacher_name;
      this.teacher_id = constructor1.teacher_id;
      this.credits = constructor1.credits;
      this.frontEnd = constructor1.frontEnd;
      this.frontEnd.subscriptionString = modelParser.parseDateToString(
        new Date(constructor1.subscription)
      );
    } else {
      this.name = name;
      this.status = status;
      this.id = id;
      this.birthday = birthday;
      this.city = city;
      this.level = level;
      this.subscription = subscription;
      this.frequency = frequency;
      this.description = description;
      this.teacher_name = teacher_name;
      this.teacher_id = teacher_id;
      this.credits = credits;
      this.frontEnd = frontEnd;
      
      this.frontEnd.subscriptionString = modelParser.parseDateToString(subscription);
    }
  }
}
class StudentProfileModelFrontEnd {
  subscriptionString: string;
  constructor(subscriptionString: string = "") {
    this.subscriptionString = subscriptionString;
  }
}

function returnStudentCardModelsFromPg(data: any): StudentCardModel[] {
  let a: StudentCardModel[] = [];
  if (data.rows[0] != undefined) {
    for (let i = 0; i < data.rows.length; i++) {
      let name: string = data.rows[i].student_name;
      let status: string = data.rows[i].student_status;
      let id: string = data.rows[i].student_id;
      let card: StudentCardModel = new StudentCardModel(name, status, id);
      a.push(card);
    }
    return a;
  } else {
    return [new StudentCardModel()];
  }
}

function returnStudentProfileModelFromPg(data: any): StudentProfileModel[] {
  let a = [];
  if (data.rows[0] != undefined) {
    for (let i = 0; i < data.rows.length; i++) {
      let card: StudentProfileModel = new StudentProfileModel(data.rows[i]);
      a.push(card);
    }
    return a;
  } else {
    return [new StudentProfileModel()];
  }
}

export {
  StudentCardModel,
  StudentProfileModel,
  StudentProfileModelFrontEnd,
  returnStudentCardModelsFromPg,
  returnStudentProfileModelFromPg,
};

//tsc --module commonjs ./api/models/studentModel.ts
