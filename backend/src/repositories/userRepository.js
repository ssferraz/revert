const { User: UserModel} = require("../models/User");

const userRepository = {
    create: async (user) => {
        const response = (await UserModel.create(user)).toObject();
        delete response.password;
        delete response.__v;
        return response;
    },
    getAll: async () => {
        const users = await UserModel.find().select('-password -__v');
        return users;
    },
    get: async (id) => {
        const user = await UserModel.findById(id).select('-password -__v');
        return user;
    },
    delete: async (id) => {
        const deletedUser = await UserModel.findByIdAndDelete(id).select('-password -__v');
        return deletedUser;
    },
    update: async (id, user) => {
        const updatedUser = await UserModel.findByIdAndUpdate(id, user).select('-password -__v');
        return updatedUser;
    },
    authenticate: async (email, password) => {
        const user = await UserModel.findOne({
            email: email,
            password: password
        }).select('-password -__v');
        return user;
    },
    
}

module.exports = userRepository;
