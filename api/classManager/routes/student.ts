import { Request, Response } from "express";
import {
  StudentProfileModel,
  StudentProfileModelFrontEnd,
} from "../models/studentModel";

const express = require("express");
const router = express.Router();
const {
  getStudentByName,
  getStudentById,
  updateStudent,
  deleteStudentById,
  insertStudent,
} = require("../repository/studentRepo.js");
const {
  returnStudentCardModelsFromPg,
} = require("../models/studentModel.js");
const { deleteClassesByStudentId } = require("../repository/classesRepo");

router.route("/").get((req: any, res: any) => {
  let a: object = [];
  res.send(a);
});

router.route("/:name").get(async (req: any, res: any) => {
  try {
    const dataFromQuery = await getStudentByName(req.params.name);
    const StudentCardModels = returnStudentCardModelsFromPg(dataFromQuery);
    res.json(StudentCardModels);
    console.log("StudentCardModels sent.");
  } catch {
    res.sendStatus(400);
  }
});

router
  .route("/profile/:id")
  .get(async (req: Request, res: Response) => {
    try {
      const getStudentQueryResult = await getStudentById(req.params.id);
      res.json(
        new StudentProfileModel(
          undefined,
          getStudentQueryResult.rows[0].student_name,
          getStudentQueryResult.rows[0].student_status,
          getStudentQueryResult.rows[0].student_id,
          getStudentQueryResult.rows[0].student_birthday,
          getStudentQueryResult.rows[0].student_city,
          getStudentQueryResult.rows[0].student_level,
          getStudentQueryResult.rows[0].student_subscription_date,
          getStudentQueryResult.rows[0].student_frequency,
          getStudentQueryResult.rows[0].student_description,
          getStudentQueryResult.rows[0].teacher_name,
          getStudentQueryResult.rows[0].teacher_id,
          getStudentQueryResult.rows[0].credits,
          new StudentProfileModelFrontEnd()
        )
      );
    } catch {
      res.sendStatus(400);
    }
  })
  .put(async (req: any, res: any) => {
    try {
      const query = await updateStudent(req.body);
      res.sendStatus(200);
    } catch {
      res.sendStatus(400);
    }
  })
  .delete(async (req: any, res: any) => {
    try {
      const deleteClassesQuery = await deleteClassesByStudentId(req.params.id);
      const deleteProfileQuery = await deleteStudentById(req.params.id);
      console.log('deleted ', req.params.id)
      res.sendStatus(200);
    } catch {
      res.sendStatus(400);
    }
  });
router.route("/add").post(async (req: any, res: any) => {
  let receivedStudentProfile: StudentProfileModel = req.body;
  try {
    await insertStudent(
      receivedStudentProfile.name,
      receivedStudentProfile.status,
      receivedStudentProfile.description,
      receivedStudentProfile.city,
      receivedStudentProfile.frequency,
      receivedStudentProfile.level,
      receivedStudentProfile.subscription
    );
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});
module.exports = router;
export { router };

//tsc --module commonjs ./api/routes/student.ts
