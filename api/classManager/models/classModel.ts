import { ModelParser } from "./modelParser";

class ClassModel {
  teacher_name: string;
  student_name: string;
  title: string;
  description: string;
  date: Date;
  duration: string;
  status: string;
  grade: number;
  time: string;
  id: string;
  payment_id: string;
  frontEnd: ClassModelFrontEnd;
  constructor(
    constructor1: ClassModel | undefined = undefined,
    teacher_name: string = "",
    student_name: string = "",
    title: string = "",
    description: string = "",
    date: Date = new Date(),
    duration: string = "",
    status: string = "",
    grade: number = 1,
    time: string = "",
    id: string = "",
    payment_id: string = "",
    frontEnd: ClassModelFrontEnd = new ClassModelFrontEnd()
  ) {
    let modelParser = new ModelParser();
    if (constructor1 != undefined) {
      this.id = constructor1.id;
      this.teacher_name = constructor1.teacher_name;
      this.student_name = constructor1.student_name;
      this.title = constructor1.title;
      this.description = constructor1.description;
      this.date = constructor1.date;
      this.duration = constructor1.duration;
      this.status = constructor1.status;
      this.grade = constructor1.grade;
      this.time = constructor1.time;
      this.payment_id = constructor1.payment_id
      this.frontEnd = constructor1.frontEnd;
      this.frontEnd.dateString = modelParser.parseDateToString(date);
    } else {
      this.id = id!;
      this.teacher_name = teacher_name;
      this.student_name = student_name;
      this.title = title;
      this.description = description;
      this.date = date;
      this.duration = duration;
      this.status = status;
      this.grade = grade;
      this.time = time;
      this.payment_id = payment_id
      this.frontEnd = frontEnd;
      this.frontEnd.dateString = modelParser.parseDateToString(date);
    }
  }
}

class ClassModelFrontEnd {
  repeat: number;
  dateString: string;
  constructor(repeat: number = 0, dateString: string = "") {
    this.repeat = repeat;
    this.dateString = dateString;
  }
}

/* function generateClassInstance(data: any): ClassModel {
  return new ClassModel(
    data.teacher_name,
    data.student_name,
    data.title,
    data.description,
    data.date,
    data.duration,
    data.status,
    data.grade,
    data.time,
    data.id,
    new ClassModelFrontEnd()
  );
} */

/* function generateClassInstances(dataArray: any): ClassModel[] {
  let a: ClassModel[] = [];
  if (dataArray[0] != undefined) {
    dataArray.forEach((data: any) => {
      a.push(
        new ClassModel(
          data.teacher_name,
          data.student_name,
          data.title,
          data.description,
          data.date,
          data.duration,
          data.status,
          data.grade,
          data.time,
          data.id,
          new ClassModelFrontEnd(data)
        )
      );
    });
    return a;
  } else {
    return [new ClassModel()];
  }
} */

function returnClassesFromPg(data: any): ClassModel[] | [] { 
  let a = [];
  if (data.rows[0] != undefined) {
    for (let i = 0; i < data.rows.length; i++) {
      a.push(
        new ClassModel(
          undefined,
          data.rows[i].teacher_name,
          data.rows[i].student_name,
          data.rows[i].class_title,
          data.rows[i].class_description,
          data.rows[i].class_date,
          data.rows[i].class_duration,
          data.rows[i].class_status,
          data.rows[i].class_grade,
          data.rows[i].class_time,
          data.rows[i].class_id,
          data.rows[i].payment_id,
          new ClassModelFrontEnd()
        )
      );
    }
    return a;
  } else {
    return [];
  }
}

export {
  ClassModel,
  ClassModelFrontEnd,
  returnClassesFromPg
};
