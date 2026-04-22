const express = require("express");

const Student = require("../models/student");

const { verifyRole, restrictStudentToOwnData } = require("./auth/util");
const { ROLES } = require("../../consts");

const router = express.Router();
//create student
//name , email , password
router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res
        .status(400)
        .json({ message: "please provide name, email or password" });
    }
    //check if the student exists
    try {
        const existingstudent = await Student.findOne({ email });
        if (existingStudent) {
            return res
            .status(400)
            .json({ messege: "Student Already exists with this email" });
        }
        const newStudent = new Student({name, email, password});
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({message: error.message});
    }



}
module.exports = router;
