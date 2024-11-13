import * as enrollmentsDao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
import * as usersDao from "../Users/dao.js";

export default function EnrollmentRoutes(app) {
    const enrollUserInCourse = (req, res) => {
        const { userId, courseId } = req.body;
        enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.status(200).json({ message: "Enrolled successfully!"});
    };

    const unenrollFromCourse = (req, res) => {
        const { userId, courseId } = req.body;
        enrollmentsDao.unenrollFromCourse(userId, courseId);
        res.status(200).json({ message: "Unenrolled successfully!"});
    };
    
}