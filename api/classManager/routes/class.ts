import { Request, Response } from "express";
import {
  ClassModel,
  ClassModelFrontEnd,
  returnClassesFromPg,
} from "../models/classModel.js";
import { ModelParser } from "../models/modelParser.js";
import {
  getAllClassesById,
  updateClass,
  insertClass,
  deleteClassById,
} from "../repository/classesRepo.js";
import { getStudentCreditsByStudentName } from "../repository/studentRepo.js";
const express = require("express");
const router = express.Router();

router
  .route("/:id")
  .get((req: Request, res: Response) => {
    if (req.params.id) {
      getAllClassesById(req.params.id).then((data: any) => {
        res.send(returnClassesFromPg(data));
      });
    } else {
      res.sendStatus(500).send("You must provide an id.");
    }
  })
  .put((req: Request, res: Response) => {
    let instances = req.body.map((aClass: ClassModel) => {
      return new ClassModel(aClass);
    });
    instances.forEach((instance: ClassModel) => {
      insertClass(instance);
    });
    res.sendStatus(200);
  })
  .post(async (req: Request, res: Response) => {
    try {
      if (req.body[0] != undefined) {
        let receivedClass = new ClassModel(req.body[0]);
        const studentCredits = await getStudentCreditsByStudentName(
          receivedClass.student_name
        );
        if (studentCredits != 0) {
          if (receivedClass.frontEnd.repeat) {
            let modelParser = new ModelParser();
            let classDatesArray = modelParser.generateDatesArray(
              receivedClass.frontEnd.dateString,
              receivedClass.frontEnd.repeat
            );
            classDatesArray.forEach((classDate: Date) => {
              let newClass = new ClassModel(
                undefined,
                receivedClass.teacher_name,
                receivedClass.student_name,
                receivedClass.title,
                receivedClass.description,
                classDate,
                receivedClass.duration,
                receivedClass.status,
                receivedClass.grade,
                receivedClass.time,
                "",
                "",
                new ClassModelFrontEnd()
              );
              insertClass(newClass);
            });
          } else {
            insertClass(receivedClass);
          }
          res.sendStatus(200);
        } else {
          res.sendStatus(403);
        }
      }
    } catch {
      res.sendStatus(500);
    }
  })
  .delete(async (req: Request, res: Response) => {
    try {
      const result = await deleteClassById(req.params.id);
      res.sendStatus(200);
    } catch {
      res.sendStatus(400);
    }
  });

module.exports = router;
export { router };
