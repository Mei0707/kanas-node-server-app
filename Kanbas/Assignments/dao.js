import Database from "../Database/index.js";
export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId);
};
export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Database.now().toString() };
    Database.modules = [ ...Database.modules, newModule];
    return newModule;
};
export function deletAssignment(assignmentId) {
    const  { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
};
export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
};