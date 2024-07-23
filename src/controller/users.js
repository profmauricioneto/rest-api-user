const users = require('../models/userModel');

// Controller functions
// These functions are called when the routes are hit in the server file (src/server.js)
// The functions are responsible for the logic of the routes

async function findAll(req, res) {
    try {
        const allUsers = await users.findAll();
        return res.json(allUsers);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function findUserById(req, res) {
    const {id} = req.params;
    try {
        const user = await users.findByPk(id);
        return res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

async function createUser(req, res) {
    const {fullname, age, email, address} = req.body;
    try {
        const newUser = await users.create({
            fullname,
            age,
            email,
            address,
            date: new Date(),
        });
        return res.json(newUser);
    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
}

async function updateUser(req, res) {
    const {id} = req.params;
    const {fullname, age, email, address} = req.body;
    try {
        const user = await users.findByPk(id);
        user.fullname = fullname;
        user.age = age;
        user.email = email
        user.address = address;
        await user.save();
        return res.json(user);
    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
}

async function deleteUser(req, res) {
    const {id} = req.params;
    try {
        const user = await users.findByPk(id);
        await user.destroy();
        return res.json(user);
    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = { 
    findAll, 
    findUserById,
    createUser,
    updateUser,
    deleteUser
}
