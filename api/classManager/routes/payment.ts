import { query, Request, Response } from "express";
import { Router } from "express";
import {
  PaymentModel,
  prepareInstancesForFrontEnd,
} from "../models/paymentModel";
import { PaymentRepository } from "../repository/paymentRepo";
import {
  getTeacherNameById,
  getTeacherIdByName,
} from "../repository/teacherRepo";
import { getStudentNameById } from "../repository/studentRepo";

const router = Router();
const paymentRepository = new PaymentRepository();
const paymentModel = new PaymentModel();

router
  .route("/:studentId")
  .get(async (req: Request, res: Response) => {
    try {
      const queryResult = await paymentRepository.getPaymentsByStudentId(
        req.params.studentId
      );
      const teacherName = await getTeacherNameById(
        queryResult.rows[0].payment_teacher_id
      );
      const studentName = await getStudentNameById(
        queryResult.rows[0].payment_student_id
      );
      if (queryResult.rows[0] != undefined) {
        let paymentModelInstances =
          paymentModel.returnInstancesFromPg(queryResult);
        prepareInstancesForFrontEnd(
          paymentModelInstances,
          teacherName,
          studentName
        );
        res.json(paymentModelInstances);
      } else {
        res.sendStatus(404);
      }
    } catch {
      console.log("error");
      res.sendStatus(500);
    }
  })
  .put(async (req: Request, res: Response) => {
    if (req.body[0] != undefined) {
      try {
        let paymentInstances = req.body.map((payment: PaymentModel) => {
          return new PaymentModel(payment);
        });
        for(let i=0; i<paymentInstances.length; i++){
          await paymentRepository.updatePayment(paymentInstances[i]);
        }
        res.sendStatus(200)
      } catch {
        console.log("didnt update payment")
        res.sendStatus(500)
      }
    }else{
      res.sendStatus(404)
    }
  });

router.route("/").post(async (req: Request, res: Response) => {
  console.log("POST /api/classManager/payments/:paymentId was hit");
  if (req.body[0] != undefined) {
    try {
      let paymentReceived = new PaymentModel(req.body[0]);
      let teacherId = await getTeacherIdByName("Elias Rosa");
      await paymentRepository.insertPayment(paymentReceived, teacherId);
      res.sendStatus(200);
    } catch {
      console.log("didnt insert student");
      res.sendStatus(400);
    }
  }
});
module.exports = router;
