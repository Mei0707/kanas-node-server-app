import model from "./model.js";
// let { users } = db;
export const createUser = (user) => { 
    delete user._id;
    return model.create(user);
};
export const findAllUsers = async (req, res) => {
    const { role } = req.query;
    if (role) {
        const users = await dao.findUsersByRole(role);
        res.json(users);
        return;
    }
    const users = await dao.findAllUsers();
    res.json(users);
};
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) => model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
export const findUsersByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({
        $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
    });
};

