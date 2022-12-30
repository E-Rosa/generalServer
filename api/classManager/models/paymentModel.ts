import { QueryResult } from "pg";
import { ModelParser } from "./modelParser";

class PaymentModel {
  id: string;
  teacher_id: string;
  student_id: string;
  date: Date;
  value: number;
  status: "paid" | "pending" | "late" | "";
  frontEnd: PaymentModelFrontEnd;

  constructor(
    constructor1: PaymentModel | undefined = undefined,
    id: string = "",
    teacher_id: string = "",
    student_id: string = "",
    date: Date = new Date(),
    value: number = 1,
    status: "paid" | "pending" | "late" | "" = "",
    frontEnd: PaymentModelFrontEnd = new PaymentModelFrontEnd()
  ) {
    let modelParser = new ModelParser();
    if (constructor1 != undefined) {
      this.id = constructor1.id;
      this.teacher_id = constructor1.teacher_id;
      this.student_id = constructor1.student_id;
      this.date = constructor1.date;
      this.value = constructor1.value;
      this.status = constructor1.status;
      if(constructor1.frontEnd){
        this.frontEnd = constructor1.frontEnd;
        this.frontEnd.dateString = modelParser.parseDateToString(date);
      }else{
        this.frontEnd = frontEnd;
        this.frontEnd.dateString = modelParser.parseDateToString(date);
      }
      
    } else {
      this.id = id;
      this.teacher_id = teacher_id;
      this.student_id = student_id;
      this.date = date;
      this.value = value;
      this.status = status;
      this.frontEnd = frontEnd;
      this.frontEnd.dateString = modelParser.parseDateToString(date);
    }
  }

  getCredits(classPrice: number): number {
    return Math.ceil(classPrice / this.value);
  }

  returnInstancesFromPg(data: QueryResult): PaymentModel[] {
    let a: PaymentModel[] = [];
    data.rows.forEach((dataInstance: PaymentModelDB) => {
      a.push(
        new PaymentModel(
          undefined,
          dataInstance.payment_id,
          dataInstance.payment_student_id,
          dataInstance.payment_student_id,
          dataInstance.payment_date,
          dataInstance.payment_value,
          dataInstance.payment_status
        )
      );
    });
    return a;
  }
  
}

class PaymentModelFrontEnd {
  teacher_name: string;
  student_name: string;
  dateString: string;

  constructor(
    teacher_name: string = "",
    student_name: string = "",
    dateString: string = ""
  ) {
    this.teacher_name = teacher_name;
    this.student_name = student_name;
    this.dateString = dateString;
  }
}

interface PaymentModelDB {
  payment_id: string;
  payment_teacher_id: string;
  payment_student_id: string;
  payment_date: Date;
  payment_value: number;
  payment_status: "paid" | "pending" | "late" | "";
}

function prepareInstancesForFrontEnd(
  data: PaymentModel[],
  teacherName: string,
  studentName: string
): void {
  data.forEach((instance: PaymentModel) => {
    instance.frontEnd = new PaymentModelFrontEnd(
      teacherName,
      studentName,
      instance.frontEnd.dateString
    );
  });
}
export { PaymentModel, PaymentModelFrontEnd, prepareInstancesForFrontEnd };
