import * as userService from '../services/user.service.js';

const register = async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.status(200).json({ message: 'User registered successfully'});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const result = await userService.loginUser(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: `Error fetching users: ${error.message}` });
    }
};

export default { register, login, getAllUsers };
