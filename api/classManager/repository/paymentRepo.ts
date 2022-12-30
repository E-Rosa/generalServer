import { QueryResult } from "pg";
import { client } from "../configurations/dbConnection";
import { PaymentModel } from "../models/paymentModel";

class PaymentRepository {
  async getAllPayments(): Promise<QueryResult> {
    return await client.query("SELECT * FROM payments");
  }
  async getPaymentsByStudentId(studentId: string): Promise<QueryResult> {
    return await client.query("SELECT * FROM payments WHERE payment_student_id=$1", [
      studentId,
    ]);
  }
  async insertPayment(payment: PaymentModel, teacher_id: string): Promise<QueryResult> {
    return await client.query(
      "INSERT INTO payments (payment_id, payment_teacher_id, payment_student_id, payment_date, payment_value, payment_status) VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5)",
      [
        teacher_id,
        payment.student_id,
        payment.date,
        payment.value,
        payment.status
      ]
    );
  }
  async updatePayment(payment: PaymentModel): Promise<QueryResult> {
    return await client.query(
      "UPDATE payments SET payment_date=$2, payment_value=$3, payment_status=$4 WHERE payment_id=$1",
      [payment.id, payment.date, payment.value, payment.status]
    );
  }
  deletePaymentById(paymentId: string): Promise<QueryResult> {
    return client.query(
        "DELETE FROM payments WHERE payment_id=$1", [paymentId]
    )
  }
}

export {PaymentRepository}
