const express = require("express");
const router = express.Router();
const {
  getStudentByName,
  getStudentById,
  updateStudentProfile,
} = require("../repository/studentRepo.js");
const {
  createStudentCards,
  createStudentProfile,
} = require("../models/studentModel.js");

router.route("/").get((req: any, res: any) => {
  let a: object = [];
  res.send(a);
});
router.route("/:name").get((req: any, res: any) => {
  console.log('/api/classManager/students/:name hit');
  getStudentByName(req.params.name)
    .then((data: any) => {
      console.log("got student");
      res.json(createStudentCards(data));
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router
  .route("/profile/:id")
  .get((req: any, res: any) => {
    getStudentById(req.params.id)
      .then((data: any) => {
        console.log(createStudentProfile(data));
        res.json(createStudentProfile(data));
      })
      .catch((err: any) => {
        console.log(err);
        res.sendStatus(500);
      });
  })
  .put((req: any, res: any) => {
    console.log("student data below");
    console.log(req.body);
   updateStudentProfile(
      req.body.name,
      req.body.status,
      req.body.id,
      req.body.city,
      req.body.level,
      req.body.frequency,
      req.body.description, 
      req.body.birthday
    );
    res.sendStatus(200);
  });
module.exports = router;
export { router };

//tsc --module commonjs ./api/routes/student.ts
